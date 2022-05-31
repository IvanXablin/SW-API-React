import React from 'react';
import {IPlanet} from "../../types/IPlanet";
import styles from './PlanetItem.module.css';

interface PlanetItemProps {
    planet: IPlanet;
}

export default function PlanetItem({planet} : PlanetItemProps) {
    return (
        <div className={styles.contentItem}>
            <p>{planet.name}</p>
        </div>
    )
}

