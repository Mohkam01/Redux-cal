import {
  ADD_ARTICLE,
  SET_VALUE,
  SET_OPERATOR
} from "../constants/action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
  // console.log("in action");
}
export function setValue(payload) {
  console.log("in action");
  console.log(payload);
  return { type: SET_VALUE, payload };
}
export function setOperator(payload) {
  console.log("in action");
  console.log(payload);
  return { type: SET_OPERATOR, payload };
}
