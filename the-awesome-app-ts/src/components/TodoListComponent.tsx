import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { useRef, MouseEvent } from "react";
import { addItem as createAddItemAction, updateItem as createUpdateItemAction } from "../redux/todoReducer"; 
import { TodoItem } from "../model/TodoItem";

function TodoListComponent() {

    const todos = useSelector((state: AppState) => state.todo);
    const itemIdRef = useRef<HTMLInputElement>(null);
    const itemTextRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function saveItem(evt: MouseEvent) {

        evt.preventDefault();
        const itemId = itemIdRef.current?.value;
        //console.log(itemIdRef.current?.validity);

        const itemText = itemTextRef.current?.value;
        if(itemId && itemText) {
            const item = new TodoItem(Number(itemId), itemText, false);
            const action = createAddItemAction(item);
            dispatch(action);

            if(itemIdRef.current)
                itemIdRef.current.value = "";
            if(itemTextRef.current)
                itemTextRef.current.value = "";
        }
        else{
            alert("Enter the values");
        }
        

    }
    function handleIsCompleted(evt: React.ChangeEvent<HTMLInputElement>, item: TodoItem) {

        //item.isCompleted = evt.target.checked;

        dispatch(createUpdateItemAction({...item, isCompleted: evt.target.checked}));

    }


    return (
        <div>
            <h3>Todo List</h3>

            {todos.items.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Text</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.items.map(item => (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.text}</td>
                                <td>
                                    <input type="checkbox" checked={item.isCompleted} onChange={e => handleIsCompleted(e, item)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <div className="alert alert-info">No items</div>}


            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="id">Item ID</label>
                        <input type="number" name="" id="id" className="form-control" ref={itemIdRef} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input type="text" name="" id="text" className="form-control" ref={itemTextRef} />
                    </div>
                    <br />
                    <button onClick={saveItem} className="btn btn-primary">Add Item</button>
                </form>
            </div>

        </div>
    )
}

export default TodoListComponent;