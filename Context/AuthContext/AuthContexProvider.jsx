import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthContextProvider = (props) => {

    const [token, setToken] = useState("")

    const signUp = async (NewUser) => {
        try {
            const {data} = axios.post("  http://localhost:3000/sign-up", NewUser);
            setToken(data.accessToken)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect (() => {
        if ( token !== "") {
            localStorage.setItem ("accessToken", token);
        } else {
            localStorage.removeItem ("accessToken");
        }
    }, [token]);

    return <AuthContext.Provider value={{
        signUp,
    }}>
        {props.children}
    </AuthContext.Provider>
};



export default AuthContextProvider