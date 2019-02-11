import { GET_MENU } from './ActionTypes';

const API_HOST_URL = process.env.API_URL;
export const getMenu = () => dispatch => {
  console.log("qwertghjkcvbn");
    return fetch(`${API_HOST_URL}/v2/menu`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(menu => {
        console.log()
        dispatch({
          type: GET_MENU,
          payload: menu
        });
      });
  };
