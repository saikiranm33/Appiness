import {Alert} from 'react-native'

const checkUserName = item => {

  let isValid = false;

  if (item.name == 'saikiran' && item.password == '123455') {

    isValid = true
    return {
      type: 'CHECK_USERNAME',
      payload: isValid,
    };
  } else {

     isValid = false

     Alert.alert('Please Enter Valid Details');
    return {
      type: 'CHECK_USERNAME',
      payload: isValid,
    };
  }
};

const getItemList = item => {
  return {
    type: 'GET_LIST',
    payload: item,
  };
};

export { checkUserName, getItemList };
