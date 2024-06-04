import styles from './Sobre.module.css'
import ImgSobre from '../../assets/img-sobre.png'
import ImgSobreTwo from '../../assets/img-2-sobre.png'
import ArrowRight from  '../../assets/arrow.svg'

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.imgSobre}>
        <img className={styles.imgOne} src={ImgSobre} alt="" />
        <img className={styles.imgTwo} src={ImgSobreTwo} alt="" />
      </div>
      <div className={styles.conteudoSobre}>
        <h2>Sobre a gente</h2>
        <p>Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical.</p>
        <a className={styles.lerMais} href="">
          Ler mais 
          <img src={ArrowRight} alt="->" />
        </a>
      </div>
    </section>
  )
}

export default Sobre