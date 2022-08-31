import style from './style.module.css';
import {Landing} from '../../components/Landing';
import { Logout } from '../../components/Logout';
export const LandingView= () => {

    return (
      <div className={style.container}>  
      <div class="vh-10 d-flex justify-content-end p-3">
        <Logout/>
      </div><div>
        <Landing/>
        </div>
      </div>
    );
  }
  