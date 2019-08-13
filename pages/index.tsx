import * as React from "react";
import { NextPage } from "next";

import Navigation from "../components/Navigation";
import Ticker from "../components/Ticker";

const Index: NextPage = () => {
  return (
    <div className="m-5">
      <div className="columns">
        <div className="column is-2">
          <Navigation />
        </div>
        <div className="column">
          <h1 className="title">HOME</h1>
          <div className="level-left">
            <div className="level-item">
              <Ticker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
