import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { checkUserName } from '../Redux/action';

class AssetExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      isSuccess: false,
      myName: '',
      myPassword: '',
    };
  }

  successActionPopUp(isSuccess) {
    if (isSuccess == true) {
      Alert.alert('Success', 'Please Click OK to Continue', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Button Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('EmployeeList'),
        },
      ]);
    } else {
      Alert.alert('Please Enter Valid Details');
    }
  }

  componentWillReceiveProps(nextProps, prevState) {
    console.log('New Props Called ');

    console.log(nextProps.userInfo);

    if (nextProps.userInfo != undefined) {
    

      this.successActionPopUp(nextProps.userInfo);
    } else {
      Alert.alert('Invalid Credentials');
    }
  }

  onSubmitAction(isValid, values, resetForm) {
    if (isValid) {
      this.props.checkTask(values);
    } else {
      Alert.alert('Please Enter Valid Details');
      resetForm({ name: '', password: '' });
    }
  }
static navigationOptions = { header: null };
  render() {
    

    return (

        
      <Formik
        initialValues={{
          name: this.state.myName,
          password: this.state.myPassword,
        }}
        onSubmit={this.onSubmitAction}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .min(3)
            .required(),
          password: yup
            .string()
            .min(5)
            .max(10)
            .required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
          resetForm,
        }) => (
       <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image
              style={styles.imageStyle}
              source={require('../assets/logo.png')}
            />
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 20,
                padding: 20,
                fontWeight:"bold"
              }}>
              {' '}
              Welcome to Appiness
            </Text>
            <TextInput
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Please Enter Name"
              maxLength={10}
              style={styles.textStyle}
            />

            {touched.name && errors.name && (
              <Text style={{ fontSize: 10, color: 'red', alignSelf: 'center' }}>
                {' '}
                {errors.name}
              </Text>
            )}
            <TextInput
              value={values.mobilenumber}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder="Please Enter Password"
              maxLength={10}
              style={styles.textStyle}
            />
            {touched.password && errors.password && (
              <Text style={{ fontSize: 10, color: 'red', alignSelf: 'center' }}>
                {' '}
                {errors.password}
              </Text>
            )}
            <Text> {this.state.isSuccess} </Text>
            <TouchableOpacity
              // disabled={!isValid}
              onPress={() => this.onSubmitAction(isValid, values, resetForm)}
              type="submit"
              style={styles.buttonStyle}>
              <Text style={{ color: 'white' }}> SUBMIT </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </Formik>
     
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkTask: item => dispatch(checkUserName(item)),
  };
}

function mapStateToProps(state) {
  return {
    userInfo: state.usernameList,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetExample);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  textStyle: {
    margin: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.6,
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonStyle: {
    marginTop: 10,
    height: 50,
    width: 240,
    backgroundColor: '#1e1b15',
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});


