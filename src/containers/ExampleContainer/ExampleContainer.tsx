import React, { useContext, useState } from 'react';

import ExampleContext, {
  exampleActionList,
} from 'react-app-starter/config/context/ExampleContext';

import ExampleComponent from 'react-app-starter/components/ExampleComponent';

const ExampleContainer = () => {
  const { state, dispatch } = useContext(ExampleContext);
  const [exampleState, setExampleState] = useState('');
  return (
    <div>
      <h3>ExampleContainer with ExampleComponent: </h3>
      <ExampleComponent appName="ExampleApp" />
      <h4>ExampleContainer with ExampleContext: {state}</h4>
      <div>
        <input
          name="example-input"
          value={exampleState}
          onChange={e => setExampleState(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: exampleActionList.EXAMPLE_ACTION,
              payload: { value: exampleState },
            })
          }
        >
          Update context value
        </button>
      </div>
    </div>
  );
};

export default ExampleContainer;
