/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Importa LoginScreen
import LoginScreen from './views/loginScreen';

AppRegistry.registerComponent(appName, () => LoginScreen);