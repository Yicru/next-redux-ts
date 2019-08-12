import * as React from "react";
import { connect } from "react-redux";

import {
  decrement,
  increment,
  reset
} from "../../store/reducers/counter/actions";
import { TickerProps } from "./Ticker.type";
import { getNumber } from "../../store/reducers/counter/selectors";
import { AppState } from "../../store/store.type";

class Ticker extends React.Component<TickerProps> {
  render() {
    return (
      <div>
        <h2>The NUMBER is: {this.props.number} </h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  number: getNumber(state)
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticker);
