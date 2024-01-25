import React from 'react';
import {withProviders} from './providers';
import RN from 'components/RN';

const App = () => {
  return (
    <RN.View>
      <RN.Text>Hello</RN.Text>
    </RN.View>
  );
};

export default withProviders(App);
