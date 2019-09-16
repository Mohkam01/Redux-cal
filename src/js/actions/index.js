import {
  ADD_ARTICLE,
  SET_OPERATOR,
  SET_INT1,
  SET_INT2,
  SET_INT1CHECK,
  SET_INT2CHECK,
  CALCULATE,
  SETDOT2,
  SETDOT1,
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
import Calculation from "../../files/utils/Calculation";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
  // console.log("in action");
}
export function setInt1(payload) {
  console.log("in action");
  console.log(payload);
  return { type: SET_INT1, payload };
}
export function setInt2(payload) {
  console.log("in action int2");
  console.log(payload);
  return { type: SET_INT2, payload };
}
export function setOperator(payload) {
  console.log("in action");
  console.log(payload);
  return { type: SET_OPERATOR, payload };
}
export function setInt1Check(payload) {
  console.log(payload);
  return { type: SET_INT1CHECK, payload };
}
export function setInt2Check(payload) {
  console.log(payload);
  return { type: SET_INT2CHECK, payload };
}
export function calulateValues(data) {
  console.log("in calculate action");
  var payload = Calculation(data);
  console.log(payload);
  return { type: CALCULATE, payload };
}
export function setInt1Dot(payload) {
  return { type: SETDOT1, payload };
}
export function setInt2Dot(payload) {
  return { type: SETDOT2, payload };
}
export function setInt1Neg(payload) {
  return { type: SETINT1NEG, payload };
}
export function setInt2Neg(payload) {
  return { type: SETINT2NEG, payload };
}
export function setInt1NegDotValue(payload) {
  return { type: SETINT1NEG_DOT_VALUE, payload };
}
export function setInt2NegDotValue(payload) {
  return { type: SETINT2NEG_DOT_VALUE, payload };
}
export function resetValues() {
  return { type: RESET };
}
export function setAgainValues(payload) {
  return { type: SET_AGAIN_VALUES, payload };
}
export function set_btn1() {
  return { type: BTN1 };
}
export function set_btn2() {
  return { type: BTN2 };
}
export function set_btn3() {
  return { type: BTN3 };
}
export function set_btn4() {
  return { type: BTN4 };
}
