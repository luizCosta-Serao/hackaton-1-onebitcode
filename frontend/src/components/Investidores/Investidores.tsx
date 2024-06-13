import styles from './Investidores.module.css'
import Google from '../../assets/google.png'
import Microsoft from '../../assets/microsoft.png'
import Airbnb from '../../assets/airbnb.png'
import Axure from '../../assets/axure.png'
import Apple from '../../assets/apple.png'
import Facebook from '../../assets/facebook.png'
import Nokia from '../../assets/nokia.png'
import Oracle from '../../assets/oracle.png'

const Investidores = () => {
  return (
    <section className={styles.investidores}>
      <h1>Nossos investidores</h1>
      <div className={styles.investidoresImg}>
        <img title="Google" src={Google} alt="Google" />
        <img title="Microsoft" src={Microsoft} alt="Microsoft" />
        <img title="Airbnb" src={Airbnb} alt="Airbnb" />
        <img title="Axure" src={Axure} alt="Axure" />
        <img title="Apple" src={Apple} alt="Apple" />
        <img title="Facebook" src={Facebook} alt="Facebook" />
        <img title="Nokia" src={Nokia} alt="Nokia" />
        <img title="Oracle" src={Oracle} alt="Oracle" />
      </div>
    </section>
  )
}

export default Investidores