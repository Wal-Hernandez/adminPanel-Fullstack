import {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import style from './style.module.css';
import {createUser} from '../../redux/actions/createUser'

export const CreateForm= () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    surname: "",
    age:0,
    mail:"",
    rol: "client",
    password:"",
  });
  const { newUser } = useSelector((state) => state);
console.log(newUser)
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  

   function handleSubmit(e) {
    e.preventDefault();
    dispatch(createUser(user));
    setMessage(newUser)
  }

  useEffect(() => {
    setMessage(newUser)

  }, [newUser]);

  return (
    
    <div class="w-50 h-75 ">
    <form class="m-2">
    <div class="row">
      <div class="form-group col-md-6">
        <label for="nameCreate">Name</label>
        <input type="text" class="form-control" name="name" id="nameCreate" value={user.name} onChange={handleChange} />
      </div>
      <div class="form-group col-md-6">
       <label for="surnameCreate">Surname</label>
       <input type="text" name="surname" id="surnameCreate" class="form-control" value={user.surname} onChange={handleChange} />
      </div>
      </div>
      <div class="form-group ">
        <label for="emailCreate">Email</label> 
        <input type="email" name="mail"  id="emailCreate" class="form-control" value={user.mail} onChange={handleChange} />
      </div>
      <div class="form-group  ">
        <label for="passwordCreate">Password</label> 
        <input type="password" name="password"   id="passwordCreate" class="form-control" value={user.password} onChange={handleChange} />
      </div>
      <div class="row">
      <div class="form-group col-md-4">
        <label for="ageCreate">Age</label>
        <input type="number" class="form-control"  id="ageCreate" name="age" value={user.age} onChange={handleChange} />
      </div>
      <div class="form-group col-md-6">
        <label for="rolCreate">Rol</label> 
        <select name="rol" class="form-select" id="rolCreate" onChange={handleChange} >
            <option value="client">client</option>
            <option value="admin">admin</option>
        </select>
      </div>
      </div>
      <button type='submit'  class="btn btn-primary mt-3" onClick={handleSubmit}> Crear usuario</button>
      {message}
    </form>
    </div>
    

  );
}
