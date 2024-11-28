import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <meta />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>E-Club Polimi</title>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/images/apple-touch-icon.png"
        />
        <meta
          name="description"
          content="Entrepreneurship Club Polimi website"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
