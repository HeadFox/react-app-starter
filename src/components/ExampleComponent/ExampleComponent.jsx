import React from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = ({ appName }) => (
  <div>ExampleComponent: {appName}</div>
);

ExampleComponent.defaultProps = {
  appName: 'defaultProps',
};

ExampleComponent.propTypes = {
  appName: PropTypes.string,
};

export default ExampleComponent;
