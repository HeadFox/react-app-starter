import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, withStyles } from '@material-ui/styles';

import { ExampleProvider } from 'react-app-starter/config/context/ExampleContext';
import reset from 'react-app-starter/styles/reset';
import theme from 'react-app-starter/styles/theme';

const styles = {
  '@global': {
    ...reset,
    fontFamily: 'Roboto',
  },
};

class CustomApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode?.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <ExampleProvider>
            <Component {...pageProps} />
          </ExampleProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default withStyles(styles)(CustomApp);
