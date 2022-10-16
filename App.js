import * as React from 'react';
import AppNavigationContainer from './src/navigation/AppContainer';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';


const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigationContainer/>
    </SafeAreaView>
  );
};


export default App;
