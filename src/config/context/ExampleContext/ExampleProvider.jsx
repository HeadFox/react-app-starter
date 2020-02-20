import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import ExampleContext from './ExampleContext';
import ExampleDispatchContext from './ExampleDispatchContext';
import exampleReducer from './exampleReducer';
import exampleInitialState from './exampleInitialState';

const ExampleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(exampleReducer, exampleInitialState);

  return (
    <ExampleContext.Provider value={state}>
      <ExampleDispatchContext.Provider value={dispatch}>
        {children}
      </ExampleDispatchContext.Provider>
    </ExampleContext.Provider>
  );
};

ExampleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExampleProvider;
