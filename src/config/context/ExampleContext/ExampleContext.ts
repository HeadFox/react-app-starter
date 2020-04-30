import { createContext, Dispatch } from 'react';
import initialState, { ExampleState } from './exampleInitialState';
import { ExampleActionListTypes } from './exampleActionList';

const ExampleContext = createContext<{
  state: ExampleState;
  dispatch: Dispatch<ExampleActionListTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default ExampleContext;
