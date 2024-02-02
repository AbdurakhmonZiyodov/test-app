import React from 'react';
import {withProviders} from './providers';
import {HomeScreen} from 'screens';

const Main = () => <HomeScreen />;

const App = () => {
  return <Main />;
};

export default withProviders(App);
