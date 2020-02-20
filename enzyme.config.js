import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.React = React;
global.mount = createMount();
