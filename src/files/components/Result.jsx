import React, { Component } from "react";
import "../Style.css";
import { connect } from "react-redux";

class Result extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {};
  render() {
    console.log(this.props.info);

    return <h3>{this.props.info}</h3>;
  }
}
const mapStateToProps = (state) => {
  return {
    info: state.screen
  };
};
export default connect(
  mapStateToProps,
  null
)(Result);
