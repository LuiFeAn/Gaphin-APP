import { Navigate } from "react-router-dom";
import UserProvider from "../context/userContext";

const RequireAuth = ({children,type}) => {

    const token = localStorage.getItem("itoken");

    if(token){
       return (
            <UserProvider>
                {children}
            </UserProvider>
       );
    }else{
        return <Navigate to="/"/>
    }
}

export default RequireAuth