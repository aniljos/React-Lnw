// <Login/>

import { ChangeEvent, useState } from "react";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUserName(evt: ChangeEvent<HTMLInputElement>){
        
        setUsername(evt.target.value);
    }

    return (
        <div>
            <h4>Login</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" 
                                    value={username} onChange={handleUserName}/>    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" 
                            id="password" value={password} onChange={evt => setPassword(evt.target.value)}/>    
                </div>
                <br />
                <div>
                    <button className="btn btn-success">Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login;