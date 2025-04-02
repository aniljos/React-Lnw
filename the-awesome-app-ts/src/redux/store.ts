import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

const allReducers = combineReducers({
    auth: authReducer
   
})

export const store = configureStore({
    reducer: allReducers,
    devTools: false
});