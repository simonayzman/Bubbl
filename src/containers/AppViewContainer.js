import React from 'react';
import { getTheme } from '@shoutem/ui';
import { StyleProvider } from '@shoutem/theme';
import _ from 'lodash';

import MainTheme from '../themes';
import Navigator from './Navigator';

export default function AppViewContainer() {
  const appTheme = _.merge(getTheme(), MainTheme);
  return (
    <StyleProvider style={appTheme}>
      <Navigator />
    </StyleProvider>
  );
}
