import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { putUser } from "../../redux/actions/putUser";
export const PutForm = ({ user }) => {
  const dispatch = useDispatch();
  const [newPutUser, setNewPutUser] = useState({
    id: user.id,
    name: user.name,
    surname: user.surname,
    age: user.age,
    mail: user.mail,
  });

  function handleChange(event) {
    setNewPutUser({ ...newPutUser, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(putUser(newPutUser));
    alert("user updated successfully");
  }

  return (
    <div class="w-50 h-75 ">
      <form class="m-2" className={style.container}>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={newPutUser.name}
              onChange={handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label>Surname</label>
            <input
              type="text"
              class="form-control"
              name="surname"
              value={newPutUser.surname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group ">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            class="form-control"
            value={newPutUser.mail}
            onChange={handleChange}
          />
        </div>
        <div class="form-group  col-md-4">
          <label>Age</label>
          <input
            type="number"
            name="age"
            class="form-control"
            value={newPutUser.age}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          {" "}
          Actualizar usuario
        </button>
      </form>
    </div>
  );
};
