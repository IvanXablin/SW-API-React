import React from 'react';
import {IPlanet} from "../../../types/IPlanet";
import PlanetItem from "../PlanetItem/PlanetItem";
import styles from './PlanetList.module.css';

interface PlanetListProps {
    arrayPlanets: IPlanet[];
}

function PlanetList ({arrayPlanets} : PlanetListProps) {
    return (
        <div className={styles.content}>
            {arrayPlanets.map(planet =>
                <PlanetItem key={planet.name} planet={planet}/>
            )}
        </div>
    );
}

export default PlanetList