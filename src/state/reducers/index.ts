import { combineReducers } from 'redux';
import bankReducer from './bankReduce';

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
