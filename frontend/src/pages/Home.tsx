import React from 'react'
import HeroHome from '../components/HeroHome/HeroHome'
import Sobre from '../components/Sobre/Sobre'
import Artistas from '../components/Artistas/Artistas'

const Home = () => {
  return (
    <React.Fragment>
      <HeroHome />
      <Sobre />
      <Artistas />
    </React.Fragment>
  )
}

export default Home