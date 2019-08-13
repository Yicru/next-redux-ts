import * as React from "react";
import { NextPage } from "next";

import Ticker from "../components/Ticker";
import Layout from "../layouts";

const Index: NextPage = () => {
  return (
    <Layout>
      <h1 className="title">HOME</h1>
      <div className="level-left">
        <div className="level-item">
          <Ticker />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
