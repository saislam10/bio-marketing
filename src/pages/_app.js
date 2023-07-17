import * as React from "react";
import { ChakraProvider, CSSReset, ColorModeScript, extendTheme } from "@chakra-ui/react";
import App from 'next/app';

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;

