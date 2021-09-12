import React from 'react';
import Head from 'next/head';

type Props = { title: string; keywords: string; description: string };

const Meta = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/images/logo.png" />
      <link rel="apple-touch-icon" href="/assets/images/logo.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ben Shua's Portfolio",
  keywords: '',
  description: '',
};

export default Meta;
