import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {deleteUser} from '../../redux/actions/deleteUser'
import { getUsers } from '../../redux/actions/getUsers';
import style from './style.module.css';

export const CardUser= ({user}) => {
 
  const [newuser, setNewUser] = useState({
    rol: user.rol,
    usuario: user.usuarioDB,
  });
  const dispatch = useDispatch();
 




  return (
    {/* <div className={style.container}>
      <div>
    {user.mail}
    </div>
  
 
    </div> */}
  );
}
