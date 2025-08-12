import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/theme.ts";
import { AppRouter } from "./AppRouter.tsx";

export const AppProvider = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};
