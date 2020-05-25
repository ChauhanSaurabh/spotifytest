const initialState = {
  loading: false,
  loginData: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        loginData: action.payload,
      });
    case 'LOGIN_USER_FAIL':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
}
