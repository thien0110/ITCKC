import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './redux/reducers';
import allSagas from './redux/sagas';
import MainNavigator from './navigation';
import SplashScreen from 'react-native-splash-screen'
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

console.disableYellowBox =true;
export default class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
sagaMiddleware.run(allSagas);
