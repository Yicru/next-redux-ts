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
      <div className="card">
        <div className="card-content">
          <p className="title">The NUMBER is: {this.props.number} </p>
        </div>
        <footer className="card-footer">
          <a onClick={this.props.increment} className="card-footer-item">
            Increment
          </a>
          <a onClick={this.props.decrement} className="card-footer-item">
            Decrement
          </a>
          <a onClick={this.props.reset} className="card-footer-item">
            Reset
          </a>
        </footer>
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
