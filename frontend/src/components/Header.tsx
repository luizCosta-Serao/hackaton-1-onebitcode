import styles from './Header.module.css'
import OneBitCode from '../assets/onebitcode.svg'
import IconOneBitCode from '../assets/icon-onebitcode.svg'
import IconMenu from '../assets/icon-menu.svg'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function toggleMenu() {
    setMenuMobile((menuMobile) => !menuMobile);
  }

  React.useEffect(() => {
    function setFalseMenu() {
      setMenuMobile(false);
    }
    window.addEventListener('resize', setFalseMenu);
    window.addEventListener('scroll', setFalseMenu);

    return () => {
      window.removeEventListener('resize', setFalseMenu);
      window.removeEventListener('scroll', setFalseMenu);
    }
  })

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <img src={OneBitCode} alt="OneBitMusic" />
          <img src={IconOneBitCode} alt="" />
        </Link>
      </div>

      <button onClick={toggleMenu} className={styles.btnMenu}><img src={IconMenu} alt="Menu" /></button>
      <nav className={`${styles.menu} ${menuMobile ? styles.menuActive : ''}`}>
        <ul>
          <li><Link to={'/'}>Início</Link></li>
          <li><a href="#artistas">Artistas</a></li>
          <li><a href="#programacao">Programação</a></li>
          <li><a href="#contato">Contato</a></li>
          <li className={styles.comprarIngressos}><a href="#comprarIngressos">Comprar Ingressos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header