import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoItem } from "../model/TodoItem"
import axios from "axios"

type TodoState = {
    items: TodoItem[],
    status: "pending" | "completed" | "rejected"
}

const initialState: TodoState = {
    items: [],
    status: "pending"
    
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


// action creator => return an action which will be handled by the middleware
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, thunkAPI) => {

    try {
        const response = await axios.get<TodoItem[]>("http://localhost:9000/todoItems");
        return response.data;

    } catch (error) {
        console.log("Error fetching todos: ", error);
        return thunkAPI.rejectWithValue("Error fetching todos");
    }
})



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
        updateItem: (state, action: PayloadAction<TodoItem>) => {

            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index] = action.payload;

        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "completed";
          
        });
        
        builder.addCase(fetchTodos.rejected, (state) => {
            state.status = "rejected";
           
        });
        
        builder.addCase(fetchTodos.pending, (state) => {
            state.status = "pending";
        })

    }
})
//action creators
export const {addItem, deleteItem, updateItem} = slice.actions;
//reducer
export const todoReducer =  slice.reducer;

