'use client';

import { useRef } from "react";
import { validateUser } from "@/actions/validateUser";
import { useRouter } from "next/navigation";

export default function Login(){

    const nameRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    async function handleLogin() {

        const name = nameRef.current?.value;
        const pwd = pwdRef.current?.value;

        if(name && pwd){
            if(await validateUser(name, pwd)){
                router.push("/");
            }
            else{
                alert("Invalid user name or password");
            }
        }
        


    }

    return (
        <div>
            <h3>Login</h3>

            <div>
                <input className="form-control" type="text" placeholder="Name"  ref={nameRef} />
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Password" ref={pwdRef} />
            </div>

            <br />
            <div>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}