import { getMenu } from '../actions/MenuAction';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;
it.only('test get_menu', () => {
    
    const url = `${API_HOST_URL}/v2/menu`;
  
    fetchMock.getOnce(url, {
      menu: [],
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [{"payload": 
    {"headers": {"content-type": "application/json"},
     "menu": []}, "type": "GET_MENU"}]
    const store = mockStore();
  
    return store
      .dispatch(getMenu())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
