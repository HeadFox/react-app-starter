import React, { useReducer } from 'react';

import ExampleContext from './ExampleContext';
import exampleReducer from './exampleReducer';
import exampleInitialState from './exampleInitialState';

const ExampleProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(exampleReducer, exampleInitialState);

  return (
    <ExampleContext.Provider value={{ state, dispatch }}>
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleProvider;
