import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, NextScript, Main } from "next/document";
import theme from "../libs/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NextScript />
        <Main />
        </body>
      </Html>
    );
  }
}