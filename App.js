import * as React from 'react';
import { Text, View, StyleSheet,Alert,TextInput,Fragment,Button } from 'react-native';
import { Constants } from 'expo';
import * as yup from 'yup'
import { Formik } from 'formik'
import { Provider } from 'react-redux';

import AssetExample from './Screens/AssetExample';
import EmployeeList from './Screens/EmployeeList'


import store from './Redux/store'


import { createStackNavigator, createAppContainer } from "react-navigation";


export default class App extends React.Component {
  render() {
    return (
  <Provider store={store}>
           <AppContainer />
</Provider>

    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: AssetExample
  },
    EmployeeList: {
    screen: EmployeeList
  }},
{

initialRouteName : "Home"

  },
  
);

const AppContainer =  createAppContainer(AppNavigator);


