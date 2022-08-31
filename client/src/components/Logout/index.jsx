/* import style from './style.module.css'; */
import Cookies from 'universal-cookie'
import { useNavigate } from "react-router-dom";
 
export const Logout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies()
  const email = cookies.get('email')
  const cerrarSesion = () => {
    cookies.remove('id')
    cookies.remove('email')
    cookies.remove('password')
    cookies.remove('rol')
    navigate('/login')
  }
  return (
      <div class=" p-1">
       {email}
        {email && <button class="btn btn-primary m-2" onClick={cerrarSesion}>cerrar sesion</button>}
      </div>
  );
}
