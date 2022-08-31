import { GET_USERS,DATABASE} from '../types'
import axios from 'axios'

export const getUsers= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DATABASE}/users`);
            console.log(result)
            return dispatch({
                type: GET_USERS ,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
