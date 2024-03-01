import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from '../redux/bookSlice';

const rootReducer = combineReducers({
	books: bookReducer,
});

export default rootReducer;
