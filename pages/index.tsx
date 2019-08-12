import * as React from "react";
import { NextPage } from "next";

import Navigation from "../components/Navigation";
import Ticker from "../components/Ticker";

const Index: NextPage = () => {
  return (
    <div>
      <Navigation />
      <h1>HOME</h1>
      <Ticker />
    </div>
  );
};

export default Index;
