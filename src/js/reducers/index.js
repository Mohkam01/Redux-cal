import {
  SET_OPERATOR,
  SET_INT1,
  SET_INT2,
  SET_INT1CHECK,
  SET_INT2CHECK,
  CALCULATE,
  SETDOT1,
  SETDOT2,
  SETINT1NEG,
  SETINT2NEG,
  SETINT1NEG_DOT_VALUE,
  SETINT2NEG_DOT_VALUE,
  RESET,
  SET_AGAIN_VALUES,
  BTN1,
  BTN2,
  BTN3,
  BTN4
} from "../constants/action-types";
const initialState = {
  integer1: 0,
  integer2: 0,
  operator: "",
  int1_check: false,
  int2_check: false,
  int2_value_check: false,
  int1_dot: false,
  int2_dot: false,
  int1_divide: 10,
  int2_divide: 10,
  screen: "",
  number: 20,
  result: [],
  int1_neg: false,
  int2_neg: false,
  int2_dot_val_check: false,
  zero: "",
  again_operator: "",
  again_calculate: 0,
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
  active: "btn btn-secondary upper-btn cal-btn clr changeColor",
  nonActive: "btn btn-secondary upper-btn cal-btn clr"
};
function rootReducer(state = initialState, action) {
  if (action.type === SET_INT1) {
    return Object.assign({}, state, {
      integer1: action.payload.int1Updated,
      screen: action.payload.screen,
      int1_check: action.payload.int1_check
    });
  } else if (action.type === SET_INT2) {
    return Object.assign({}, state, {
      integer2: action.payload.int2Updated,
      screen: action.payload.screen,
      int2_value_check: action.payload.int2_value_check
    });
  } else if (action.type === SET_OPERATOR) {
    return Object.assign({}, state, {
      operator: action.payload
    });
  } else if (action.type === SET_INT1CHECK) {
    return Object.assign({}, state, {
      int1_check: action.payload
    });
  } else if (action.type === SET_INT2CHECK) {
    return Object.assign({}, state, {
      int2_check: action.payload
    });
  } else if (action.type === CALCULATE) {
    return Object.assign({}, state, {
      integer2: 0,
      integer1: action.payload,
      result: [...state.result, action.payload],
      screen: action.payload,
      int2_dot: false,
      int2_value_check: false
    });
  } else if (action.type === SETDOT1) {
    return Object.assign({}, state, {
      int1_dot: action.payload,
      screen: state.screen + "."
    });
  } else if (action.type === SETDOT2) {
    return Object.assign({}, state, {
      int2_dot: action.payload,
      screen: state.screen + "."
    });
  } else if (action.type === SETINT1NEG) {
    return Object.assign({}, state, {
      int1_neg: action.payload.neg_check,
      integer1: action.payload.int,
      screen: action.payload.screen
    });
  } else if (action.type === SETINT2NEG) {
    return Object.assign({}, state, {
      int2_neg: action.payload.neg_check,
      integer2: action.payload.int,
      screen: action.payload.screen
    });
  } else if (action.type === SETINT1NEG_DOT_VALUE) {
    return Object.assign({}, state, {
      integer1: action.payload.int1_dot_updated,
      screen: action.payload.screen,
      int1_divide: state.int1_divide * 10,
      int1_check: action.payload.int1_check
    });
  } else if (action.type === SETINT2NEG_DOT_VALUE) {
    return Object.assign({}, state, {
      integer2: action.payload.int2_dot_updated,
      screen: action.payload.screen,
      int2_divide: state.int2_divide * 10,
      int2_value_check: action.payload.int2_value_check
    });
  } else if (action.type === RESET) {
    return Object.assign({}, state, initialState);
  } else if (action.type === SET_AGAIN_VALUES) {
    return Object.assign({}, state, {
      again_operator: action.payload.operator,

      again_calculate: action.payload.int
    });
  } else if (action.type === BTN1) {
    return Object.assign({}, state, {
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: false
    });
  } else if (action.type === BTN2) {
    return Object.assign({}, state, {
      btn1: false,
      btn2: true,
      btn3: false,
      btn4: false
    });
  } else if (action.type === BTN3) {
    return Object.assign({}, state, {
      btn1: false,
      btn2: false,
      btn3: true,
      btn4: false
    });
  } else if (action.type === BTN4) {
    return Object.assign({}, state, {
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: true
    });
  }

  return state;
}
export default rootReducer;
