import React from 'react';
import styles from "./Loader.module.css"

export default function Loader () {
    return <img src={require('../../assets/load.gif')} alt="loading..." className={styles.loader}/>
}