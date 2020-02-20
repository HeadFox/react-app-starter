import exampleActionList from './exampleActionList';

const exampleReducer = (state, action) => {
  switch (action.type) {
    case exampleActionList.EXAMPLE_ACTION: {
      const { value } = action.payload;
      if (!value) throw new Error('value payload is mandatory');
      if (typeof value !== 'string')
        throw new TypeError(
          `value needs to be a string, ${typeof value} received`,
        );

      return {
        ...state,
        value,
      };
    }

    default:
      throw new Error(
        `${action.type} is not an valid action for exampleReducer`,
      );
  }
};

export default exampleReducer;
