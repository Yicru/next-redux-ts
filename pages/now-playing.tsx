import * as React from 'react'
import { NextPage } from 'next'

import Navigation from '../components/Navigation'
import NowPlaying from '../components/NowPlaying'
import Ticker from '../components/Ticker'

const NowPlayingPage: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Ticker />
      <NowPlaying />
    </div>
  )
}

export default NowPlayingPage
