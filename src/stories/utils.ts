export function extractRenderBody(code: string) {
  let inRender = false;
  let depth = 0;
  let renderBody = "";
  let insideString = false;
  let stringDelimiter = "";

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    // 检查是否在字符串中
    if (char === '"' || char === "'") {
      if (!insideString) {
        insideString = true;
        stringDelimiter = char;
      } else if (char === stringDelimiter) {
        insideString = false;
      }
    }

    // 如果不在字符串中，检查 render() 函数
    if (!insideString) {
      if (inRender) {
        if (char === "{") {
          depth++;
        } else if (char === "}") {
          depth--;
          if (depth === 0) {
            // 结束 render() 函数体
            break;
          }
        }
        renderBody += char;
      } else {
        // 检查是否进入 render() 函数
        if (code.slice(i, i + 6) === "render") {
          inRender = true;
          i += 5; // 跳过 "render" 字符
          while (i < code.length && code[i] !== "{") {
            i++; // 跳过函数参数和空格
          }
          if (code[i] === "{") {
            depth = 1;
            i++; // 跳过大括号
          }
        }
      }
    }
  }

  return renderBody.trim();
}
