import React from 'react';
import styles from "./Loader.module.css"

export default function Loader () {
    return (
        <div className={styles.loader__wrapper}>
            <img src={require('../../assets/load.gif')} alt="loading..."/>
        </div>
    );
}