import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

import { loginUser } from "../../redux/actions/loginUser";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { userLogged } = useSelector((state) => state);
  console.log(userLogged);
  const [values, setValues] = useState({
    mail: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(event) {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMsg) {
      dispatch(loginUser(values));
    } else {
      alert(errorMsg);
    }
  }

  function updateErrorMsg() {
    if (!values.mail) {
      setErrorMsg("You need to specify a valid email.");
    } else if (!values.password) {
      setErrorMsg("You need to specify a password");
    } else {
      setErrorMsg("");
    }
  }

  useEffect(() => {
    updateErrorMsg();
    if (cookies.get("rol") === "admin") {
      navigate("/admin");
    } else if (cookies.get("rol") === "client") {
      navigate("/");
    }
  }, [values, userLogged]);

  return (
    <div class="w-100  d-flex justify-content-center">
      <form onSubmit={handleSubmit} class="">
        <h1>Iniciar sesión</h1>
        <div class="form-group ">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            value={values.mail}
          />
        </div>
        <div class="form-group ">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div>
          {typeof userLogged === "string" ? (
            <p>Wrong password or Email</p>
          ) : (
            <></>
          )}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
