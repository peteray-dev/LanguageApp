import { GET_CURRENT_USER, SET_CURRENT_USER } from '../Actions/types';
import isEmpty from '../validations/is-empty';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
