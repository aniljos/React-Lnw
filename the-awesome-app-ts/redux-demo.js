import {createStore} from 'redux';

//initialState
const initialState = {
    counter : 10,
    message: "hello redux"
}

//reducer
const reducer = function(currentState=initialState, action){

    //return the updated state
    if(action.type === "inc_ctr"){
        return {
            ...currentState,
            counter : currentState.counter + 1
        }
    }
    if(action.type === "decr_ctr"){
        return {
            ...currentState,
            counter : currentState.counter - 1
        }
    }
    if(action.type === "set_ctr"){
        return {
            ...currentState,
            counter : action.value
        }
    }
    return currentState;

}
//store
const store = createStore(reducer)
//console.log("state", store.getState());

//subscribe
store.subscribe(() => {
    console.log("state updated", store.getState());
})

// dispatch actions

store.dispatch({type: "inc_ctr"});
store.dispatch({type: "set_ctr", value: 25});
store.dispatch({type: "decr_ctr"});