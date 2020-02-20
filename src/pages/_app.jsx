import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider, withStyles } from '@material-ui/styles';

import { ExampleProvider } from '@context/ExampleContext';
import reset from '@styles/reset';

const styles = {
  '@global': {
    ...reset,
    fontFamily: 'Roboto',
  },
};

const theme = {
  palette: {
    mainColor: '#f5f5f5',
  },
};

class CustomApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
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

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

export default withStyles(styles)(CustomApp);
