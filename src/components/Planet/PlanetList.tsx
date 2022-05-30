import React from 'react';

interface PlanetListProps {
    arrayPlanets: [];
}

export default function PlanetList ({arrayPlanets} : PlanetListProps) {
    return (
        <div>
            {arrayPlanets.map(i =>
                <p>{i}</p>
            )}
        </div>
    )
}