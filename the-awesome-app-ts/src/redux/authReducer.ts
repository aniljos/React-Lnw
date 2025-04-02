type AuthState = {

    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string
}

type AuthAction = {

    type: string;
    payload?: AuthState
}

//initial State

const initialState: AuthState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    username: ""
}

//actions
// {type: "login", payload: {isAuthenticated: true, accessToken: ""}}
// {type: "logout"}

// reducer
export const authReducer = function(currentState = initialState, action: AuthAction){

    if(action.type === "login" && action.payload){
        return action.payload;
    }
    if(action.type === "logout"){
        
        return initialState;
    }

    return currentState;
}