import * as React from "react";
import { NextPage } from "next";

import Navigation from "../components/Navigation";
import Ticker from "../components/Ticker";

const Swapi: NextPage = () => {
  return (
    <>
      <div>
        <Navigation />
        <h1>SWAPI</h1>
        <Ticker />
      </div>
    </>
  );
};

export default Swapi;
