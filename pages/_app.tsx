import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";

import GlobalStyles from "@src/styles/GlobalStyles";
import theme from "@src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
