import React from 'react';
import { makeStyles } from '@material-ui/styles';

import ExampleContainer from '@containers/ExampleContainer';

const styles = ({ palette }) => ({
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
