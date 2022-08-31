import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";

export const LoggedRoute = ({component: Component}) => {
    const cookies = new Cookies()
    const rol = cookies.get('rol');
  
return rol === "admin" ? <Component/> : <Navigate to="/login"/>
}