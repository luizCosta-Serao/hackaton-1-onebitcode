import styles from './Programacao.module.css'
import ArtistaOne from '../../assets/artista-1.png'
import ArtistaTwo from '../../assets/artista-2.png'
import ArtistaThree from '../../assets/artista-3.png'
import ArtistaFour from '../../assets/artista-4.png'
import ArtistaFive from '../../assets/artista-5.png'
import Play from '../../assets/play-artista.svg'
import AoVivo from '../../assets/ao-vivo.svg'
import EmBreve from '../../assets/em-breve.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const Programacao = () => {
  const [dayActive, setDayActive] = React.useState(1)
  const [showVideo, setShowVideo] = React.useState(false)

  function toggleVideo() {
    setShowVideo((showVideo) => !showVideo);
    console.log(showVideo)
  }

  function leaveVideo(e: React.MouseEvent) {
    console.log('ok')
    if (e.target === e.currentTarget) {
      setShowVideo(false)
    }
  }

  function leaveVideoBtn() {
    setShowVideo(false)
  }

  return (
    <section className={styles.containerProgramacao}>
      {showVideo ? (
        <div onClick={leaveVideo} className={styles.showVideo}>
          <span onClick={leaveVideoBtn} className={styles.leaveVideoBtn}>X</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/j0lSpNtjPM8?si=LkWjf2ESAjlJyaEF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      ) : ('')}
      <div className={styles.programacao}>
        <h2>Nossa programação</h2>
        <ul className={styles.days}>
          <li onClick={() => setDayActive(1)} className={dayActive === 1 ? styles.dayActive : ''}>
            <h3>Dia 01</h3>
            <span>26 Junho</span>
          </li>
          <li onClick={() => setDayActive(2)} className={dayActive === 2 ? styles.dayActive : ''}>
            <h3>Dia 02</h3>
            <span>27 Junho</span>
          </li>
          <li onClick={() => setDayActive(3)} className={dayActive === 3 ? styles.dayActive : ''}>
            <h3>Dia 03</h3>
            <span>28 Junho</span>
          </li>
        </ul>

        <table className={`${styles.programacaoDoDia} ${dayActive === 1 ? styles.programacaoActive : ''}`}>
          <thead>
            <th>Hora</th>
            <th>Conteúdo</th>
            <th>Artistas</th>
            <th></th>
          </thead>
          <tbody>

            <tr>
              <td className={styles.hour}>11:00 AM to 12:00 PM</td>
              <td className={styles.descricao}>Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes. </td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaOne} alt="Yui Ronald" />
                  <div>
                    <h4>Yui Ronald</h4>
                    <span>Booth: <b>2F12</b></span>
                  </div>
                </div>
              </td>
              <td onClick={toggleVideo} className={styles.previa}>Previa <img src={Play} alt="Play" /></td>
            </tr>

            <tr>
              <td className={styles.hour}>12:00 AM to 03:00 PM</td>
              <td className={styles.descricao}>O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.</td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaTwo} alt="Bob John" />
                  <div>
                    <h4>Bob John</h4>
                    <span>Booth: <b>2G12</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaOne} alt="Yui Ronald" />
                  <div>
                    <h4>Yui Ronald</h4>
                    <span>Booth: <b>2F12</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaThree} alt="Emma Satoshi" />
                  <div>
                    <h4>Emma Satoshi</h4>
                    <span>Booth: <b>2A35</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.aoVivo}>
                <Link to="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig" target='_blank'>
                  Ao Vivo
                  <img src={AoVivo} alt="Ao Vivo" />
                </Link>
              </td>
            </tr>

            <tr>
              <td className={styles.hour}>03:00 AM to 04:00 PM</td>
              <td className={styles.descricao}>A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.</td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaFour} alt="Sasha Jackson" />
                  <div>
                    <h4>Sasha Jackson</h4>
                    <span>Booth: <b>2F18</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaFive} alt="Diana Brock" />
                  <div>
                    <h4>Diana Brock</h4>
                    <span>Booth: <b>2F24</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaThree} alt="Emma Satoshi" />
                  <div>
                    <h4>Emma Satoshi</h4>
                    <span>Booth: <b>2A35</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.emBreve}>Em Breve <img src={EmBreve} alt="Em Breve" /></td>
            </tr>
          </tbody>
        </table>

        <table className={`${styles.programacaoDoDia} ${dayActive === 2 ? styles.programacaoActive : ''}`}>
          <thead>
            <th>Hora</th>
            <th>Conteúdo</th>
            <th>Artistas</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td className={styles.hour}>12:00 AM to 03:00 PM</td>
              <td className={styles.descricao}>O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.</td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaOne} alt="Yui Ronald" />
                  <div>
                    <h4>Yui Ronald</h4>
                    <span>Booth: <b>2F12</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaThree} alt="Emma Satoshi" />
                  <div>
                    <h4>Emma Satoshi</h4>
                    <span>Booth: <b>2A35</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.aoVivo}>
                <Link to='https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig' target='_blank'>
                  Ao Vivo <img src={AoVivo} alt="Ao Vivo" />
                </Link>
              </td>
            </tr>

            <tr>
              <td className={styles.hour}>03:00 AM to 04:00 PM</td>
              <td className={styles.descricao}>A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.</td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaFour} alt="Sasha Jackson" />
                  <div>
                    <h4>Sasha Jackson</h4>
                    <span>Booth: <b>2F18</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.emBreve}>Em Breve <img src={EmBreve} alt="Em Breve" /></td>
            </tr>
          </tbody>
        </table>

        <table className={`${styles.programacaoDoDia} ${dayActive === 3 ? styles.programacaoActive : ''}`}>
          <thead>
            <th>Hora</th>
            <th>Conteúdo</th>
            <th>Artistas</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td className={styles.hour}>12:00 AM to 03:00 PM</td>
              <td className={styles.descricao}>O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.</td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaTwo} alt="Bob John" />
                  <div>
                    <h4>Bob John</h4>
                    <span>Booth: <b>2G12</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaOne} alt="Yui Ronald" />
                  <div>
                    <h4>Yui Ronald</h4>
                    <span>Booth: <b>2F12</b></span>
                  </div>
                </div>
                <div className={styles.itemArtista}>
                  <img src={ArtistaThree} alt="Emma Satoshi" />
                  <div>
                    <h4>Emma Satoshi</h4>
                    <span>Booth: <b>2A35</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.aoVivo}>
                <Link to="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig" target='_blank'>
                  Ao Vivo <img src={AoVivo} alt="Ao Vivo" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.hour}>11:00 AM to 12:00 PM</td>
              <td className={styles.descricao}>Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes. </td>
              <td className={styles.artistas}>
                <div className={styles.itemArtista}>
                  <img src={ArtistaOne} alt="Yui Ronald" />
                  <div>
                    <h4>Yui Ronald</h4>
                    <span>Booth: <b>2F12</b></span>
                  </div>
                </div>
              </td>
              <td className={styles.previa}>Previa <img src={Play} alt="Play" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Programacao