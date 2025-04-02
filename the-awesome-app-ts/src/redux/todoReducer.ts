import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoItem } from "../model/TodoItem"

type TodoState = {
    items: TodoItem[]
}

const initialState: TodoState = {
    items: []
}
// {type: "add", payload: TodoItem}
// {type: "delete", id: 1}
// {type: "clear", payload: all|completed}
// export const todoReducer = function(state: TodoState, action){

//     if(action.type === "add" && action.payload){
//         //state.items.push(action.payload);
//         const items = [...state.items];
//         items.push(action.payload);
//         return {
//             items
//         }
//     }

//     return state;
// }

const slice = createSlice({

    name: "todo_slice",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<TodoItem>) => {
            
            state.items.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<number>) => {

            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
        },
    }
})
//action creators
export const {addItem, deleteItem} = slice.actions;
//reducer
export const todoReducer =  slice.reducer;

