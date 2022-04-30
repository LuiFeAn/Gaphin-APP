import { useRoutes } from "react-router-dom"
import LoginPage from "../pages/login";

const Routes = () => {

    return(
        useRoutes([
            {path:"/",element:<LoginPage/>},
        ])
    )

}

export default Routes;