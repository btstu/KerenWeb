import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import icon from '../../assets/logo-keren.png'
import Image from '../Image/Image'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image icon={icon} size={160} alt='home'/>                
            </div>
 <div className={styles.linksContainer} >
<ul> <li> 
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>ACCUEIL</Link> </li>  
                <li>   <Link style={{ textDecoration: 'none', color: 'white' }} to='/b'>RENOVATIONS YECHIVOT</Link> </li>  
                <li>   <Link style={{ textDecoration: 'none', color: 'white'}} to='/c'> KOUPAT BAKHOURIM</Link>   </li>  
                <li>  <Link style={{ textDecoration: 'none', color: 'white'}} to='/d'> INSCRIPTION BÉBÉ YECHIVA</Link>  </li>  
                <li>  <Link style={{ textDecoration: 'none', color: 'white'}} to='/e'> CONTACT </Link> </li>  
                   </ul>
                              </div>
        </div>
    )
}

export default Header