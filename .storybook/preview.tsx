import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BasicTheme } from "../src/components/Theme";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    // toc: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={BasicTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
