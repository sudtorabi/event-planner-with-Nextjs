import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlays">for react portal purposes</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
