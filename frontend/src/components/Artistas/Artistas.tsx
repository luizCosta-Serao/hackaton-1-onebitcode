import styles from './Artistas.module.css'
import ArrowRight from '../../assets/arrow.svg'
import ImgArtistas from '../../assets/artistas.png'

const Artistas = () => {
  return (
    <section className={styles.artistas}>
      <div className={styles.conteudoArtistas}>
        <h2>Artistas</h2>
        <p>No evento da OneBitMusic, você terá a oportunidade de desfrutar de uma incrível variedade de artistas talentosos. Nossa seleção musical abrange diferentes gêneros e estilos, garantindo uma experiência musical diversificada e emocionante. De DJs renomados a bandas cativantes, cada artista traz sua paixão e habilidade para criar performances envolventes. Prepare-se para se surpreender com músicas cativantes, ritmos vibrantes e momentos emocionantes durante todo o evento. Os artistas da OneBitMusic estão prontos para levar você a uma jornada musical única e inesquecível.</p>
        <a className={styles.listaCompleta} href="/">Veja a lista completa <img src={ArrowRight} alt="->" /></a>
      </div>

      <div className={styles.imgArtistas}>
        <img src={ImgArtistas} alt="Fotos dos artistas" />
      </div>
    </section>
  )
}

export default Artistas