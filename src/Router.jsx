import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import UserInfo from "./components/UserInfo";

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/:id",
                element : <UserInfo></UserInfo>
            },
            {
                path : "*",
                element : <Home></Home>
            }
        ]
    }
])