import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashHome from "../components/DashHome/DashHome";
import CreateTODO from "../components/CreateTODO/CreateTODO";
import TodoList from "../components/TodoList/TodoList";
import EditTask from "../components/EditTask/EditTask";
import PrivateRoute from "./PrivateRoute";
import HistoryTodo from "../components/HistoryTodo/HistoryTodo";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<DashHome></DashHome>
            },
            {
                path:"/dashboard/createTODO",
                element:<CreateTODO></CreateTODO>
            },
            {
                path:"/dashboard/todoList",
                element:<TodoList></TodoList>
            },
            {
                path:"/dashboard/previousTODO",
                element:<HistoryTodo></HistoryTodo>
            },
            {
                path:"edit/:id",
                element:<EditTask></EditTask>,
                loader:({params})=> fetch(`https://todo-eta-tawny-36.vercel.app/api/v1/specificTodo/${params.id}`)
                
            }
        ]
    }
])

export default Router;