import { Button, ThemeProvider } from "@mui/material";
import { Description, Canvas, Subtitle, Title } from "@storybook/blocks";
import { BasicTheme } from "../components/Theme";

export function Block(props: {
  title?: string;
  subTitle?: string;
  story: any;
  code?: string;
}) {
  const { title, subTitle, story, code } = props;

  return (
    <ThemeProvider theme={BasicTheme}>
      {!!title && <Title>{title}</Title>}
      {!!subTitle && <Subtitle>{subTitle}</Subtitle>}
      <Description of={story} />
      <Canvas
        of={story}
        layout="padded"
        withToolbar={true}
        source={{
          code,
        }}
      />
    </ThemeProvider>
  );
}
