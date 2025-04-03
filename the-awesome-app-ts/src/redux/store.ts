import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { todoReducer } from './todoReducer';

const allReducers = combineReducers({
    auth: authReducer,
    todo: todoReducer
   
})

const logMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.log("Action dispatched: ", action);
            console.log("state before: ", store.getState());
            const result = next(action);
            console.log("state after: ", store.getState());
            return result;
        }
    }
}
export const store = configureStore({
    reducer: allReducers,
    devTools: true,
    middleware:(middlewares) => {
        return middlewares().concat(logMiddleware);
    }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;