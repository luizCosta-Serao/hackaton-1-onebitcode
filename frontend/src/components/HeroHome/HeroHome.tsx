import styles from './HeroHome.module.css'
import Play from '../../assets/play.png'
import React from 'react';

const HeroHome = () => {
  const [viewVideo, setViewVideo] = React.useState(false)

  function setVideo() {
    setViewVideo(true);
  }

  function leaveVideo(e: React.MouseEvent) {
    console.log('ok')
    if (e.target === e.currentTarget) {
      setViewVideo(false)
    }
  }

  function leaveVideoBtn() {
    setViewVideo(false)
  }

  let date = new Date();
  const targetDate = new Date('2024/06/25 23:59:59')  
  let diasRestantes = targetDate.getDate() - date.getDate()
  let horasRestantes = targetDate.getHours() - date.getHours();
  let minutosRestantes = targetDate.getMinutes() - date.getMinutes();
  let segundosRestantes = targetDate.getSeconds() - date.getSeconds();
  
  const [days, setDays] = React.useState(`${diasRestantes}`);
  const [hours, setHours] = React.useState(`${horasRestantes}`);
  const [minutes, setMinutes] = React.useState(`${minutosRestantes}`);
  const [seconds, setSeconds] = React.useState(`${segundosRestantes}`);

  setInterval(() => {
    date =  new Date();
    diasRestantes = targetDate.getDate() - date.getDate()
    horasRestantes = targetDate.getHours() - date.getHours();
    minutosRestantes = targetDate.getMinutes() - date.getMinutes();
    segundosRestantes = targetDate.getSeconds() - date.getSeconds();
    setDays(`${diasRestantes}`)
    setHours(`${horasRestantes}`)
    setMinutes(`${minutosRestantes}`)
    setSeconds(`${segundosRestantes}`)
    if (diasRestantes <= 9) {
      setDays(`0${diasRestantes}`)
    }
    if (horasRestantes <= 9) {
      setHours(`0${horasRestantes}`)
    }
    if(minutosRestantes <= 9) {
      setMinutes(`0${minutosRestantes}`)
    }
    if(segundosRestantes <= 9) {
      setSeconds(`0${segundosRestantes}`)
    }
  }, 1000)

  return (
    <section className={styles.heroHome}>
      {viewVideo ? (
        <div onClick={leaveVideo} className={styles.containerVideo}>
          <span onClick={leaveVideoBtn} className={styles.leaveVideo}>X</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pcHf7Vdeu18?si=kBsji75p-aoZ4lRa" title="YouTube video player"></iframe>
        </div>
      ) : ''}
      <h1  className={styles.titleHero}>
        A Sua Melhor experiência
        <br />
        <span>Musical Digital</span>
      </h1>
      <p>Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.</p>
      <div className={styles.actionsHero}>
        <button className={styles.start}>Começar</button>
        <button onClick={setVideo} className={styles.video}>
          <img src={Play} alt="Play" title='Play' />
          Assistir Vídeo
        </button>
      </div>
      <div className={styles.countDate}>
        <span>{days}d {hours}h {minutes}m {seconds}s</span>
      </div>
    </section>
  )
}

export default HeroHome 