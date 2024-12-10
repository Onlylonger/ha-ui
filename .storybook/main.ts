import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: "Overview",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [],
      // plugins: [rawPlugin()],
    });
  },
};
export default config;
