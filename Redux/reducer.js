import {getItemList,checkUserName,sendSuccessMessage}  from './action'



const initalState = {
  usernameList : false,
  completedList: null,
  isUserValid:false
};

const rootReducer = (state = initalState,action,props) => {


  switch(action.type)
  {
    
    case 'CHECK_USERNAME':


    console.log(action.payload)

    return{
         ...state,
         usernameList : action.payload,
    }


  }
  return state;
};


export default rootReducer