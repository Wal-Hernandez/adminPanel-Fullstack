import React from 'react'
import { LOGIN_USER ,DATABASE} from '../types'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const loginUser= (user) => {
   
    return async function(dispatch) {
   
        try {
            let result = await axios.post(`${DATABASE}/login`,user)
            .then(response => response.data)
            .then(response => {
                    if(typeof response === 'object'){
                        let res = response[0];
                        cookies.set('id',res.id,{path:"/"});
                        cookies.set('email',res.mail,{path:"/"});
                        cookies.set('password',res.password,{path:"/"});
                        cookies.set('rol',res.rol,{path:"/"});
                        alert(`welcome ${res.name}`)
                    
                    }
                    return response
                })
            ;
            console.log(result)
            return dispatch({
                type: LOGIN_USER,
                payload: result
            })

        } catch (err) {
            console.log(err)
        }
    };
};
