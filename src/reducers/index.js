import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import modalReducer from './modal-reducer';

export default history => combineReducers({
  router: connectRouter(history),
  modalReducer,
});