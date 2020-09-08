import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import icon from '../../assets/logo-keren.png'

const Footer = () => {
    return (
        <div className={styles.Footer}>

     
    
               <div className={styles.left}>
    
    
        
                <h1>Informations génerales</h1>
    
               <p> Accueil 
                Rénovations
                Koupat <br/>
                Inscriptions
                Contact
                </p>
    
            </div>
      
            <div className={styles.imageContainer}>
                <Image icon={icon} size={100} alt='home'/>                
            </div>
        
         
    
            <div className={styles.right}>
            <p>  <h1>Contact</h1>
                <h4>Association Keren<br/> Or Yossef Itshak
                Laurent Krief</h4>

                France : 01 77 50 06 44 
                <br/>
    
                Israël : 0526029631
                </p>
             </div>
    
                <div className='footer2'>
         
         
                
         
         </div>     
    </div>
    )
}

export default Footer

