import { useRoutes } from "react-router-dom";
import RequireAuth from "../auth";
import HomePage from '../pages/home';
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import UserPage from "../pages/user";
import EditPage from "../pages/edit";
import NotFoundPage from "../pages/404";
import UserProvider from "../context/userContext";


const Routes = () => {

    return(
        useRoutes([
            {path:"/",element:<LoginPage/>},
            {path:"/register",element:<RegisterPage/>},
            {path:"/profile",element:
            <RequireAuth>
                <HomePage/>
            </RequireAuth>},
            {path:"/profile/:name",element:
            <RequireAuth>
                <UserPage/>
            </RequireAuth>},
            {path:"/edit",element:<RequireAuth>
                <EditPage/>
            </RequireAuth>},
            {path:"*",element:<NotFoundPage/>}
        ])
    )

}

export default Routes;