import React, {useEffect, useState} from 'react';
import {IPlanet} from "../../types/IPlanet";
import {useParams} from "react-router-dom";
import AxiosService from "../../api/AxiosService";
import {IPeople} from "../../types/IPeople";
import PeopleList from "../../components/People/PeopleList/PeopleList";
import useFetching from "../../utils/useFetch";
import Loader from "../../components/Loader/Loader";

type PlanetItemPageParams = {
    id: string;
}

export default function PlanetAboutPage() {

    const [planet, setPlanet] = useState<IPlanet | null >(null);
    const [people, setPeople] = useState<IPeople[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams<PlanetItemPageParams>();
    const as = new AxiosService();

    useEffect( () => {
        fetchPeople()
        fetchPlanet();
    }, [isLoading]);

    async function fetchPlanet() {
        const res = await as.getPlanet(params.id);
        setPlanet(res.data);
        setIsLoading(false);
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
                <br/>
                <PeopleList people={people}/>
            </div>
        </div>
    );
}