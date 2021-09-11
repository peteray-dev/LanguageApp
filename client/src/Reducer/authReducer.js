import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  GET_LOGIN_ERR,
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERR,
} from '../Actions/types';
import isEmpty from '../validations/is-empty';

const initialState = {
  isAuthenticated: false,
  user: null,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        user: action.payload,
      };
    case GET_LOGIN_ERR:
      return {
        ...state,
        isAuthenticated: false,
        errors: action.payload,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case GET_USER_PROFILE_ERR:
      return {
        ...state,
        isAuthenticated: false,
        errors: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        user: action.payload,
      };
    default:
      return state;
  }
}
