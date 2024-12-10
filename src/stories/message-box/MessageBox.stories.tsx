import type { Meta, StoryObj } from "@storybook/react";
import Demo from "./Demo";
import demoString from "./Demo?raw";
import { Block } from "../Block";

const meta = {
  title: "Component/MessageBox",
  parameters: {
    layout: "fullscreen",
    docs: {
      page() {
        return (
          <>
            <Block
              title="MessageBox"
              subTitle="OpenMessageApi"
              story={Default}
              code={demoString}
            />
            <Block subTitle="OpenMessageApi2" story={Secondary} code="nihao" />
          </>
        );
      },
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return <Demo />;
  },
  parameters: {
    docs: {
      description: {
        story: "Another description on the story, overriding the comments",
      },
    },
  },
};

export const Secondary: Story = {
  render() {
    return <Demo />;
  },
  parameters: {
    docs: {
      description: {
        story: "Another description on the story, overriding the comments2",
      },
    },
  },
};
