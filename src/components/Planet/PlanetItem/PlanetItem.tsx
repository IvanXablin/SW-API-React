import React from 'react';
import {IPlanet} from "../../../types/IPlanet";
import styles from './PlanetItem.module.css';
import {useNavigate} from "react-router-dom";
interface PlanetItemProps {
    planet: IPlanet;
}

export default function PlanetItem({planet} : PlanetItemProps) {
    const navigate = useNavigate();
    const url = planet.url;
    return (
        <div className={styles.contentItem}>
            <h1>{planet.name}</h1>
            <button onClick={() => navigate(url.slice(22))} className={styles.btnInfo}>Show Info</button>
        </div>
    );
}

