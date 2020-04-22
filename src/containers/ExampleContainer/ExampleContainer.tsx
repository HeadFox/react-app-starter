import React, { useContext, useState } from 'react';

import ExampleContext, {
  ExampleDispatchContext,
  exampleActionList,
} from 'react-app-starter/config/context/ExampleContext';

import ExampleComponent from 'react-app-starter/components/ExampleComponent';

const ExampleContainer = () => {
  const { value } = useContext(ExampleContext);
  const exampleDispatch = useContext(ExampleDispatchContext);
  const [exampleState, setExampleState] = useState('');
  return (
    <div>
      <h3>ExampleContainer with ExampleComponent: </h3>
      <ExampleComponent appName="ExampleApp" />
      <h4>ExampleContainer with ExampleContext: {value}</h4>
      <div>
        <input
          name="example-input"
          value={exampleState}
          onChange={e => setExampleState(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            exampleDispatch({
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
