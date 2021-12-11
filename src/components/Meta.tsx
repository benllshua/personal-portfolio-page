import React from 'react';
import { useTheme } from '@mui/material/styles';

type Props = { title: string; keywords: string; description: string };

const Meta = (props: Props) => {
  const theme = useTheme();
  return (
    <>
      <title>{props.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logoIco.png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
    </>
  );
};

Meta.defaultProps = {
  title: "Ben Shua's Portfolio",
  keywords: '',
  description: '',
};

export default Meta;
