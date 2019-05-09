import { createStore, applyMiddleware,combineReducers } from 'redux';
import { Provider} from 'react-redux';
import rootReducer from './reducer'



//const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
);



export default store;