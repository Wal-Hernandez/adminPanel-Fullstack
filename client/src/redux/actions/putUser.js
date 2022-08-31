import { PUT_USER,DATABASE} from '../types'
import axios from 'axios'

export const putUser= (user) => {
    console.log(user,"maoo")
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DATABASE}/users/${user.id}`, user);
            return dispatch({
                type: PUT_USER ,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
