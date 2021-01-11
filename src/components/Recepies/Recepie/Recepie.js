import React from 'react';
import styles from './Recepie.module.css';

const Recepie = (props) => (
    props.recepies.map( eachRecepie => 
    <div id={eachRecepie.id} className={styles.Recepie}>
        <img src={eachRecepie.url} className={styles.Thumbnail} alt="thumbnail"/>
        <h3>{eachRecepie.title}</h3>
        <p>{eachRecepie.description}</p>
        <p>Author: {eachRecepie.author}</p>
    </div>
    )
);



export default Recepie;