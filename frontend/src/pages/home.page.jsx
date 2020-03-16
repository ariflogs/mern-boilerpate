import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const home = () => {
	return <h1>Hello World</h1>
};

export default home;
