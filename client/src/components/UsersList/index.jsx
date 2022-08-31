import style from "./style.module.css";
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/getUsers";
import { deleteUser } from "../../redux/actions/deleteUser";
import {resetUser} from '../../redux/actions/resetUser'
import swal from "sweetalert";
import { Pagination } from "../Pagination";
import { PutForm } from "../PutForm";
import { CreateForm } from "../CreateForm";

export const UserList = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [putUser, setPutUser] = useState({});

  const { paginatedResults } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = async (user) => {

    await swal({
      title: "Confirmar accion",
      text: "El elemento se borrara",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {

        await dispatch(deleteUser(user.id));
        //dispatch(deleteModel(e.target.value, model));
        
        swal( {
          title:"Elemento borrado con éxito",
          icon: "success",
        });
  
      } else {
        swal( {
          title:"El elemento no ha sido borrado",
          icon: "success",
        });
      }
    }).then( (e) =>  dispatch(getUsers()))
    
  }

  let setUpdate = (user) => {
    setPutUser(user);
    setEdit((edit) => !edit);
  };

  let setCreate = () => {
    setAdd((add) => !add);
  };

  let handleReset = (e) => {
    dispatch(getUsers());
    dispatch(resetUser());
    setAdd(false);
    setPutUser(false);
    setEdit(false);
  };
console.log(paginatedResults,"asdasd")
  useEffect(() => {
    dispatch(getUsers())
    dispatch(resetUser());
    
  }, [paginatedResults]);
  
  return (
    <div class=" h-100">
      {edit ? (
        <>
        <div class="d-flex justify-content-center align-items-center h-100">
        <PutForm user={putUser} />
        </div>
        <div class="h-50 d-flex justify-content-center align-items-end ">
          <div>
        <button class="btn btn-primary mt-3" onClick={handleReset}> Volver </button>
        </div>
        </div>
        </>
      ) : add ? (<>
        <div class="d-flex justify-content-center align-items-center h-100">
        <CreateForm/>
        </div>
          <div class="h-50 d-flex justify-content-center align-items-end ">
          <div>
        <button class="btn btn-primary mt-3" onClick={handleReset}> Volver </button>
        </div>
        </div>
        </>
      ) : typeof paginatedResults === "string" ? (
        <div  class=" d-flex flex-column  justify-content-center align-items-center ">
          {" "}
          <div>
          <button class="btn btn-primary ms-3 " onClick={setCreate}> Create User </button> 
          </div>
          <div>{paginatedResults}</div>
         
          </div>
      ) : (
        <>
        <div  class=" d-flex  w-100 justify-content-center  ">
         <div class="w-75 d-flex justify-content-end ">
          <button class="btn btn-primary ms-3 " onClick={setCreate}> Create User </button>
          </div>
          </div>
          <div class="list-group">
          {paginatedResults.map((user, index) => {
            return (
              <div  class=" d-flex  w-100 justify-content-center">
              <div key={user.id}  class="list-group-item  list-group-item-dark  d-flex  w-75 justify-content-between " >
                <div class="text-dark">
                {user.mail}
                </div>
                <div className="d-flex justify-content-end  flex-wrap">
                  <div >
                    <button class="btn btn-primary"
                      onClick={() => {    
                        setUpdate(user);
                      }}
                    >
                    edit
                    </button>
                  </div>
                  <div >
               
                      <button class="btn btn-primary ms-3 " value={user.id} onClick={() => {
                        handleDelete(user)}}>
                        delete
                      </button>
                   
                  </div>
                </div>
              </div>
              </div>)
           
          })}
          <div  class=" d-flex  w-100 justify-content-center  mt-4 ">
          <div >
          <Pagination/>
          </div>
          </div>
          </div>
          
        </>
      )}
    
    </div>
  );
};
