import React from 'react'
import styles from './Accueil.module.css'



const Accueil= () => {
    
    return (
<div className={styles.accueil}>
       <div className={styles.accueil__title}>
     Keren Or Yossef Ytshak 
        </div>
         <div className={styles.accueil__text}>
         <p>En participant à cette action, vous allez donner la possibilité aux Bahourim de tom’hei temimim en ISRAEL d’étudier la thora dans de meilleures conditions matérielles en nous aidant à rénover leurs chambres, à construire d’autres chambres et en leurs donnant l’accès à un mikvé au sein de leur lieu de vie (leur yechiva tom’hei temimim).<br/><br/>

Le Rabbi à tellement oeuvré pour le bien de chacun, il est temps à nous de lui montrer que nous savons être reconnaissant en devenant des acteurs pour que ses enfants les bahourim de tom’hei temimim puissent étudier la thora et vivre dans de bonnes conditions materielles. Que la promesse du Rabbi puisse s’accomplir de Facon concrète et dévoilée “D.ieu accorde aux Juifs des biens matériels, afin qu’ils en fassent de la spiritualité”.<br/><br/>

La Tsédaka qui est offerte par les donateurs de la Yechiva permettra de renforcer et de développer ces  institutions ; de transformer, de la meilleure façon, le matériel en spirituel, d’être soi-même béni, de façon concrète, en obtenant de l’argent à la place du bronze, de l’or à la place de l’argent, de s’en servir pour ce qui est judicieux, en bonne santé et dans la joie, de concevoir de ses enfants une véritable satisfaction juive.
        </p>

        
        <div className={styles.accueil__video}>
        <iframe width="600" height="355" src="https://www.youtube.com/embed/ltOTUjH9NqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={styles.accueil__vidinfo}>
            <div className={styles.accueil__vidinfo1}>
            <b>Permettre aux Bahourim l'étude de la Torah dans les meilleures conditions.</b><br/>
Apporter du confort afin de garantir une étude de la Torah en toute sérenité, c'est s'investir pour une cause juste et louable pour laquelle Keren Or agit quotidiennement.
            </div>
            <div className={styles.accueil__vidinfo2}>
            <b> L'inscription de votre bébé à la Yechiva, dès maintenant et en toute simplicité.</b>
Garantissez une place à votre enfant le moment venu en l'inscrivant dès sa naissance via le formulaire mis à votre disposition sur notre site internet.
            </div>
        </div>
        </div>
   
</div>
        
        

    )
}

export default Accueil
