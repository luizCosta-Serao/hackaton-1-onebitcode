import { Link } from 'react-router-dom'
import styles from './Ingressos.module.css'

const Ingressos = () => {
  return (
    <section className={styles.ingressos}>
      <h1>Escolha o tipo de ingresso</h1>
      <div className={styles.ingressoBasico}>
        <h2>Básico</h2>
        <h1>R$100</h1>
        <p>Acesso aos shows digitais</p>
        <p>Experiência musical imersiva</p>
        <p>Preço acessível</p>
        <Link to='/'>Saber mais</Link>
      </div>

      <div className={styles.ingressoPadrao}>
        <h2>Padrão</h2>
        <h1>R$150</h1>
        <p>Acesso aos shows digitais</p>
        <p>Benefícios extras</p>
        <p>Possibilidade de interagir com os artistas</p>
        <Link to='/'>Saber mais</Link>
      </div>

      <div className={styles.ingressoVip}>
        <h2>VIP</h2>
        <h1>R$200</h1>
        <p>Acesso aos shows digitais</p>
        <p>Vantagens adicionais</p>
        <p>Experiência VIP</p>
        <Link to='/'>Saber mais</Link>
      </div>
    </section>
  )
}

export default Ingressos