import * as React from "react";
import { NextPage } from "next";

import NowPlaying from "../components/NowPlaying";
import Ticker from "../components/Ticker";
import Layout from "../layouts";

const NowPlayingPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="title">Now Playing</h1>
      <div className="level-left">
        <div className="level-item">
          <Ticker />
        </div>
      </div>
      <NowPlaying />
    </Layout>
  );
};

export default NowPlayingPage;
