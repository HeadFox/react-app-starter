import React from 'react';
import { makeStyles } from '@material-ui/styles';

import ExampleContainer from 'react-app-starter/containers/ExampleContainer';

import { Theme } from 'react-app-starter/styles/theme';

const styles = ({ palette }: Theme) => ({
  home: {
    backgroundColor: palette.mainColor,
  },
});

const useStyles = makeStyles(styles);
const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.home}>
      <ExampleContainer />
    </main>
  );
};

export default Home;
