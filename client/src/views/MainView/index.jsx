import style from './style.module.css';
import { UserList } from '../../components/UsersList';
import { Logout } from '../../components/Logout';

 
export const MainView = () => {
  return (
    
    <div className={style.nav}>
     
      <div class="vh-10 d-flex justify-content-end p-3">
      <Logout/>
      </div>  
      <div class="h-100 w-100 mt-5" >
      <UserList/>
      </div>
    </div>
    
  );
}
