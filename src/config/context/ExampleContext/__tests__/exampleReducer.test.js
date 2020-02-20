import exampleReducer from '../exampleReducer';
import exampleInitialState from '../exampleInitialState';
import exampleActionList from '../exampleActionList';

const goodValues = [
  {
    entry: {
      state: exampleInitialState,
      action: {
        type: exampleActionList.EXAMPLE_ACTION,
        payload: { value: 'test' },
      },
    },
    output: {},
  },
];

const badValues = [
  {
    entry: {
      state: exampleInitialState,
      action: {
        type: exampleActionList.EXAMPLE_ACTION,
        payload: {},
      },
    },
    error: Error,
  },
  {
    entry: {
      state: exampleInitialState,
      action: {
        type: exampleActionList.EXAMPLE_ACTION,
        payload: { value: 2 },
      },
    },
    error: TypeError,
  },
];

describe('exampleReducer input test', () => {
  goodValues.forEach(({ entry, output }) => {
    test(`${entry.action.type} action`, () =>
      expect(exampleReducer(entry.state, entry.action)).toEqual(output));
  });

  badValues.forEach(({ entry, error }) => {
    test(`${entry.action.type} action (${error})`, () =>
      expect(() => exampleReducer(entry.state, entry.action)).toThrow(error));
  });
});
