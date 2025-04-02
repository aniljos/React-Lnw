import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { todoReducer } from './todoReducer';

const allReducers = combineReducers({
    auth: authReducer,
    todo: todoReducer
   
})

export const store = configureStore({
    reducer: allReducers,
    devTools: true
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;