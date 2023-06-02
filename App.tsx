import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import { Navigation } from './src/navigator/Navigation';

// import { FadeScreen } from './src/screens/FadeScreen';


export default function App() {
  return (
    <NavigationContainer>

        <Navigation/>
        {/* <FadeScreen/> */}

    </NavigationContainer>
  );
}

