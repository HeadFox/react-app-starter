const EXAMPLE_ACTION: string = 'EXAMPLE_ACTION';

export default { EXAMPLE_ACTION };

export interface ExampleAction {
  type: typeof EXAMPLE_ACTION;
  payload: {
    value: string;
  };
}

export type ExampleActionListTypes = ExampleAction;
