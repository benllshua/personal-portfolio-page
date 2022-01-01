import React from 'react';
import { useTheme } from '@mui/material/styles';

const Meta = () => {
  const theme = useTheme();
  return (
    <>
      <title>BenllShua Portfolio | Ben Shua</title>
      <meta
        name="keywords"
        content={'Ben BEN SHUA shua benllshua BenllShua בן שועה portfolio '}
      />
      <meta
        name="description"
        content={
          'I can bring your project from 0 to 100. By offering experience in all product build parts, from identifying & designing to development & deployment, including proper management skills.'
        }
      />

      <meta name="robots" content="index, follow"></meta>

      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logoIco.png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
    </>
  );
};

export default Meta;
