// <Login/>

import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        usernameRef.current?.focus();
    }, [])

    function handleUserName(evt: ChangeEvent<HTMLInputElement>){
        
        
        setUsername(evt.target.value);
    }

    async function login(evt: MouseEvent){

        evt.preventDefault();

        if(username && password){
            
            const url = "http://localhost:9000/login";
            // Success status codes: 100(information), 200(success), 300(redirect)
            //Failure: 400(client error), 500(server error)
            // axios
            //     .post(url, {name: username, password})
            //     .then((resp) => { console.log("success", resp)})
            //     .catch((errResp) => {console.log("error", errResp)});

            //async-await works with Promise

            try {
                
                const resp = await axios.post(url, {name: username, password});
                console.log("success", resp);
                navigate("/");

            } catch (errResp) {

                console.log("error", errResp);
                setMessage("Invalid credentials");
            }

            
        }
        else{
            setMessage("Enter the credentials");
        }

    }

    return (
        <div>
            <h4>Login</h4>

            {message? <div className="alert alert-info">{message}</div> : null}

            <form>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" 
                                    value={username} onChange={handleUserName} ref={usernameRef}/>    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" 
                            id="password" value={password} onChange={evt => setPassword(evt.target.value)}/>    
                </div>
                <br />
                <div>
                    <button className="btn btn-success" onClick={login}>Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login;