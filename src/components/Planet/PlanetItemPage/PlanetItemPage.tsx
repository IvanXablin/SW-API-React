import React, {useEffect, useState} from 'react';
import {IPlanet} from "../../../types/IPlanet";
import {useParams} from "react-router-dom";
import AxiosService from "../../../api/AxiosService";

type PlanetItemPageParams = {
    id: string;
}

export default function PlanetItemPage() {

    const [planet, setPlanet] = useState<IPlanet | null >(null);
    const params = useParams<PlanetItemPageParams>();
    const as = new AxiosService();

    useEffect(() => {
        fetchPlanet();
    }, []);

    async function fetchPlanet() {
        const res = await as.getPlanet(params.id);
        setPlanet(res.data);
    }

    return (
        <div>
            <div>
                <h3>{planet?.name}</h3>
                <p>{planet?.climate}</p>
                <p>{planet?.diameter}</p>
                <p>{planet?.gravity}</p>
                <p>{planet?.terrain}</p>
                <p>{planet?.population}</p>
            </div>
        </div>
    );
}