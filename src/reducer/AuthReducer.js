const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
      return { ...state, user: action.payload };
  
}
