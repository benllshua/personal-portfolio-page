import React from 'react';
import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';

type Props = { title: string; keywords: string; description: string };

const Meta = (props: Props) => {
  const theme = useTheme();
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ben Shua's Portfolio",
  keywords: '',
  description: '',
};

export default Meta;
