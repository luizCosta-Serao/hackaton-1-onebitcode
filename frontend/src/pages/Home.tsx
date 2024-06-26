import React from 'react'
import HeroHome from '../components/HeroHome/HeroHome'
import Sobre from '../components/Sobre/Sobre'
import Artistas from '../components/Artistas/Artistas'
import Programacao from '../components/Programacao/Programacao'
import Ingressos from '../components/Ingressos/Ingressos'
import Investidores from '../components/Investidores/Investidores'

const Home = () => {
  return (
    <React.Fragment>
      <HeroHome />
      <Sobre />
      <Artistas />
      <Programacao />
      <Ingressos />
      <Investidores />
    </React.Fragment>
  )
}

export default Home