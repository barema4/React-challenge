import { registerUser } from '../actions/AuthActions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;

it('test comment  action', () => {
  const url = `${API_HOST_URL}/v2/auth/signup`;

  fetchMock.postOnce(url, 
    {"user_name": "davidrff" ,
    "email":"daccvbb@gmail.com" ,
    "password":"123456789"}
  );
  const expectedActions = 
    [{"payload": 
    {"email": "daccvbb@gmail.com",
     "password": "123456789",
      "user_name": "davidrff"},
       "type": "GET_ERRORS"}]
  ;
  const store = mockStore();

  return store
    .dispatch( registerUser('userData'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});
