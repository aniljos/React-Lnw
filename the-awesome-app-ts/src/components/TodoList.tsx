import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import {  useRef, useState } from "react";
import { addItem } from "../redux/todoReducer";


function TodoList() {

    const todos = useSelector((state: AppState) => state.todo);
    const idRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const [hasError, setError] = useState(false);
    const dispatch = useDispatch();

    function saveItem(){
        const id = Number(idRef.current?.value);
        const text = textRef.current?.value;
        if(id && text){
            setError(false);
            const action = addItem({id, text, isCompleted: false});
            console.log(action);
            dispatch(action);
            
            if(idRef.current?.value){
                idRef.current.value = "";
            }
            if(textRef.current?.value){
                textRef.current.value = "";
            }
                
        }
        else{
            setError(true);
        }
    }

 

    return (
        <div>
            <h4>Todo List</h4>

            {todos.items.length > 0 ? <table className="table">
                <thead>
                    <tr>
                        <td>Item Id</td>
                        <td>Text</td>
                        <td>Completed</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>
                                <input className="form-check-input" type="checkbox" checked={item.isCompleted} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> : <div className="alert alert-primary">No items in the list</div>}

            {hasError ?<div className="alert alert-warning">Enter the values to save</div> : null}         
            <div className="form-group">
                <label htmlFor="itemid">Item ID</label>
                <input type="number" className="form-control" id="itemid" 
                    ref={idRef} />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input type="text" className="form-control"
                    id="text" ref={textRef}/>
            </div>
            <br />
            <button className="btn btn-primary" onClick={saveItem}>Add Item</button>
        </div>
    )
}

export default TodoList;