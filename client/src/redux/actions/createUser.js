import { POST_USER,DATABASE} from '../types'
import axios from 'axios'

export const createUser= (user) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DATABASE}/users`, user);
            return dispatch({
                type: POST_USER ,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
