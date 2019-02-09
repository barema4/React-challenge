import { GET_ERRORS } from './ActionTypes';

const API_HOST_URL = process.env.API_URL;
export const registerUser = userData => dispatch => {
 return fetch(`${API_HOST_URL}/v2/auth/signup`, {
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

export const loginUser = (userData, history) => dispatch => {
  return fetch(`${API_HOST_URL}/v2/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.errors
        });
      } else {
        let token = data.access_token;

        localStorage.setItem('access_token', token);
        let userType = data.userType[4];

        if (userType == 'true') {
          history.push('/admin');
        } else if (userType == 'FALSE') {
          history.push('/menu');
        }

        return true;
      }
    });
};
