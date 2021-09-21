/* eslint-disable */

import React from 'react';
import { AppProps } from 'next/app';

// components
import Meta from '../components/Meta';

// styles
import '../styles/globals.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../themes/theme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Theme>
        <Meta />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </Theme>
    </React.Fragment>
  );
}
