import React, { FunctionComponent } from 'react';

import { SafeAreaView,View ,Text} from 'react-native';
import Home from './src/screens/Home';

const App: FunctionComponent<{}> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
