import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.welcome}>
        Welcome to Admin panel
        <p>for ATyGG</p>
        <div>
          <button onClick={() => navigate("/login")} class="btn btn-primary">
            START
          </button>
        </div>
      </div>
    </div>
  );
};
