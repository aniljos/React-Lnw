'use server';

export async function validateUser(name: string, password: string){

    console.log("Invoking validateUser");
    //connect to the database/ api / any system
    if(name === "abc" && password === "abc@123"){
        console.log("User is valid");
        return true;
    }
    return false;
       
}