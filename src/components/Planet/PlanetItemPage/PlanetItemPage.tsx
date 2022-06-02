import React from 'react';
import {IPlanet} from "../../../types/IPlanet";
import {IPeople} from "../../../types/IPeople";

interface AboutPlanetProps {
    planet: IPlanet;
    people: IPeople[];
}

export default function PlanetItemPage({planet, people} : AboutPlanetProps) {
    return (
        <div>
            <div>
                <p>Name: {planet.name}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Population: {planet.population}</p>

                {people.map(i =>
                    <div>
                        <p>i.name</p>
                        <p>i.height</p>
                        <p>i.mass</p>
                        <p>i.hairColor</p>
                        <p>i.skinColor</p>
                        <p>i.eyeColor</p>
                        <p>i.gender</p>
                    </div>
                )}
            </div>
        </div>
    );
}