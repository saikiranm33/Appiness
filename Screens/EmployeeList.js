import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Constants } from 'expo';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Card } from 'react-native-paper';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
  }

  UserInfoList = [
    {
      id: 1,
      name: 'test1',
      age: '11',
      gender: 'male',
      email: 'test1@gmail.com',
      phoneNo: '9738452245',
    },
    {
      id: 2,
      name: 'test2',
      age: '12',
      gender: 'male',
      email: 'test2@gmail.com',
      phoneNo: '9738452245',
    },
    {
      id: 3,
      name: 'test3',
      age: '13',
      gender: 'male',
      email: 'test3@gmail.com',
      phoneNo: '9738452245',
    },
    {
      id: 4,
      name: 'test4',
      age: '14',
      gender: 'male',
      email: 'test4@gmail.com',
      phoneNo: '9738452245',
    },
    {
      id: 5,
      name: 'test5',
      age: '15',
      gender: 'male',
      email: 'test5@gmail.com',
      phoneNo: '9738452245',
    },
    {
      id: 6,
      name: 'test6',
      age: '16',
      gender: 'male',
      email: 'test6@gmail.com',
      phoneNo: '9738452245',
    },
  ];
static navigationOptions = { header: null };
  render() {
    return (
      <View style={{backgroundColor:"black",marginTop:30}}>
        <FlatList
          data={this.UserInfoList}
          
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.textStyle}>ID     : {item.id}</Text>
              <Text style={styles.textStyle}>Name   : {item.name}</Text>
              <Text style={styles.textStyle}>Age    : {item.age}</Text>
              <Text style={styles.textStyle}>Gender : {item.email}</Text>
              <Text style={styles.textStyle}>Phone  : {item.phoneNo}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textStyle: {
    padding: 10,
  },
});
