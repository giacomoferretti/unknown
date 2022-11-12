import type { DocumentType } from "next/dist/shared/lib/utils";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument: DocumentType = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
