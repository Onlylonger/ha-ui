import { messageBox, MessageBoxContainer } from "../../components/MessageBox";

export default function Demo() {
  return (
    <>
      <MessageBoxContainer />
      <button
        onClick={async () => {
          const action = await messageBox.open({
            title: `${Math.random()}`,
            content: `${Math.random()}`,
            type: "info",
          });
          if (action === "OK") {
            messageBox.open({
              title: `${Math.random()}`,
              content: `${Math.random()}`,
              type: "error",
            });
          }
        }}
      >
        open messageBox
      </button>{" "}
    </>
  );
}
