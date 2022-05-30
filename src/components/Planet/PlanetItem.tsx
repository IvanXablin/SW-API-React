import React from 'react';
// @ts-ignore
import classes from './PlanetItem.module.css';

interface PlanetItemProps {
    name: string;
    image?: string;
}

export default function PlanetItem({name, image} : PlanetItemProps) {
    return (
        <div className={classes.content}>
            <p>{name}</p>
        </div>
    )
}

