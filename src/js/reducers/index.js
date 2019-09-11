import {
  ADD_ARTICLE,
  SET_VALUE,
  SET_OPERATOR
} from "../constants/action-types";
const initialState = {
  integer1: 0,
  integer2: null,
  operator: "",
  int1_check: false,
  int2_check: false,
  int2_value_check: false
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === SET_VALUE) {
    return Object.assign({}, state, {
      number: state.number + action.payload
    });
  } else if (action.type === SET_OPERATOR) {
    return Object.assign({}, state, {
      operator: action.payload
    });
  }
  return state;
}
export default rootReducer;
