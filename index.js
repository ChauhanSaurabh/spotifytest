// @ts-nocheck
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './src/config/routes';
import {store} from './src/store/setup';

console.disableYellowBox = true;
Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store, Provider);
});
