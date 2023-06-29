import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
function PrivateRoute({isLogin,children}){
    if(isLogin){
        return children;
    }
    else{
        return <Navigate to='/login'/>
    }

}
export default PrivateRoute;