import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Digit from "./components/Digit";
// import Operator from "./components/Operation";
import { addArticle, setValue, setOperator } from "../js/actions/index";
import Result from "./components/Result";
import Operation from "./components/Operation";
// function mapDispatchToProps(dispatch) {
//   return {
//     setValue: (number) => dispatch(setValue(number))
//   };
// }
// const mapStateToProps = (state) => {
//   return { info: state.number };
// };
function mapDispatchToProps(dispatch) {
  console.log("in dispatch");
  return {
    setValue: (number) => dispatch(setValue(number)),
    addArticle: (article) => dispatch(addArticle(article)),
    setOperator: (number) => dispatch(setOperator(number))
  };
}
class Screen extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     number: 0
  //   };
  // }
  set = (number) => {
    console.log("i am pressed");
    console.log(number);
    this.props.setValue({ number });
    // this.props.addArticle({ title: "mohkam" });
    // this.props.dispatch(setValue(number));
  };
  operation = (oprt) => {
    console.log("i am operator");
    console.log(oprt);
    this.props.setValue({ oprt });
  };
  // show = () => {
  //   console.log(info);
  // };
  render() {
    return (
      <React.Fragment>
        <div className="row error-screen">
          <p id="screen" className="col-md-5">
            "output screen for errors or memory"
          </p>
        </div>
        <div className="container main-screen">
          <div className="screen">
            <Result />
            {/* <Result result={this.state.integer2}></Result> */}
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn upper-btn btn-ac"
              onClick={this.reset}
            >
              AC
            </button>
            <button
              className="btn btn-secondary cal-btn upper-btn btn-minus"
              onClick={this.negate}
            >
              +/-
            </button>
            <Operation
              class="btn btn-secondary upper-btn cal-btn"
              onClick={this.operation}
              oprt="%"
            />
            <Operation
              // class={
              //   this.state.btn1 === true
              //     ? this.state.active
              //     : this.state.nonActive
              // }

              onClick={this.operation}
              oprt="/"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={7}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={8}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={9}
            />
            <Operation
              // class={
              //   this.state.btn2 === true
              //     ? this.state.active
              //     : this.state.nonActive
              // }
              onClick={this.operation}
              oprt="x"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={4}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={5}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={6}
            />
            <Operation
              // class={
              //   this.state.btn3 === true
              //     ? this.state.active
              //     : this.state.nonActive
              // }
              onClick={this.operation}
              oprt="-"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={1}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={2}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={3}
            />
            <Operation
              // class={
              //   this.state.btn4 === true
              //     ? this.state.active
              //     : this.state.nonActive
              // }
              onClick={this.operation}
              oprt="+"
            />
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.show}
            >
              M
            </button>
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={0}
            />
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.dot}
            >
              .
            </button>
            <button
              className="btn btn-secondary cal-btn clr"
              onClick={this.calculate}
            >
              =
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Screen);
