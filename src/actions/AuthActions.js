import { GET_ERRORS } from './ActionTypes';

const API_HOST_URL = process.env.API_URL;
export const registerUser = userData => dispatch => {
  fetch(`${API_HOST_URL}/v2/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
        dispatch({
          type: GET_ERRORS,
          payload: data
        });
    });
};

