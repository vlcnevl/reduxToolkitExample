import About from "./Views/About";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Profile from "./Views/Profile";

export const routes = [
    {
        path:'/',
        exact:true,
        component:Home,
        auth:false,
    },
    {
        path:'/about',
        exact:true,
        component:About,
        auth:false,
    },

    {
        path:'/profile',
        exact:true,
        component:Profile,
        auth:true,
    },
    {
        path:'/login',
        exact:true,
        component:Login,
        auth:false,
    },




]