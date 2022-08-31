import { DELETE_USER,DATABASE} from '../types'
import axios from 'axios'

export const deleteUser= (id) => {
    return async function(dispatch) {
        try {
            let result = await axios.delete(`${DATABASE}/users/${id}`);
            return dispatch({
                type: DELETE_USER ,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
