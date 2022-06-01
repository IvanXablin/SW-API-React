import React from 'react';
import {IPlanet} from "../../../types/IPlanet";
import {IPeople} from "../../../types/IPeople";

interface AboutPlanetProps {
    planet: IPlanet;
    people: IPeople[]
}

export function AboutPlanet({planet} : AboutPlanetProps) {
    return (
        <div>
            <div>
                <p>Name: {planet.name}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Population: {planet.population}</p>
            </div>
        </div>
    )
}