import React, {useEffect, useState} from 'react';
import {IPlanet} from "../../../types/IPlanet";
import {useParams} from "react-router-dom";
import AxiosService from "../../../api/AxiosService";
import {IPeople} from "../../../types/IPeople";

type PlanetItemPageParams = {
    id: string;
}

export default function PlanetItemPage() {

    const [planet, setPlanet] = useState<IPlanet | null >(null);
    const [people, setPeople] = useState<IPeople[]>([]);
    const params = useParams<PlanetItemPageParams>();
    const as = new AxiosService();

    useEffect(() => {
        fetchPlanet();
        fetchPeople();
    }, []);

    async function fetchPlanet() {
        const res = await as.getPlanet(params.id);
        setPlanet(res.data);
    }


    async function fetchPeople() {
        if (planet !== null) {
            const res = await as.getPeople(planet.residents);
            setPeople(res);
        }
    }

    return (
        <div>
            <div>
                <h3>{planet?.name}</h3>
                <p>Climate: {planet?.climate}</p>
                <p>Diameter: {planet?.diameter}</p>
                <p>Gravity: {planet?.gravity}</p>
                <p>Terrain: {planet?.terrain}</p>
                <p>Population: {planet?.population}</p>
                <p>Population: {planet?.residents?.length}</p>

                {people.map(p =>
                    <p>{p.name}</p>
                )}

            </div>
        </div>
    );
}