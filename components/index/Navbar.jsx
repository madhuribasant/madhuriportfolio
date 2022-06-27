import styles from '../../styles/Home.module.css'
import Link from 'next/link'
export const Navbar = () => {
  return (
        <nav className={styles.nav}>
            <h1><Link href='/'>Madhuri Basant</Link></h1>
            <ul>
                <li><Link href="#client">Client</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
  )
}
