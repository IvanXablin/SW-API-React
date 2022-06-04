import React, {useEffect, useMemo, useState} from 'react';
import {IPlanet} from "../../types/IPlanet";
import {useParams} from "react-router-dom";
import AxiosService from "../../api/AxiosService";
import {IPeople} from "../../types/IPeople";
import PeopleList from "../../components/People/PeopleList/PeopleList";
import Select from "../../components/Select/Select";
import styles from './PlanetAbout.module.css';
import Loader from "../../components/Loader/Loader";

type PlanetItemPageParams = {
    id: string;
}

export default function PlanetAboutPage() {

    const [planet, setPlanet] = useState<IPlanet | null >(null);
    const [people, setPeople] = useState<IPeople[]>([]);
    const [filterPeople, setFilterPeople] = useState('');
    const [isPlanetLoading, setIsPlanetLoading] = useState(true);
    const [isPeopleLoading, setIsPeopleLoading] = useState(true);
    const params = useParams<PlanetItemPageParams>();
    const as = new AxiosService();

    useEffect( () => {
        fetchPeople();
        fetchPlanet();
    }, [isPlanetLoading]);

    const filterGenderPeople = useMemo(() => {
        fetchPeople();
        if (filterPeople === 'all') {
            return people;
        }
        if (filterPeople) {
            return [...people].filter(p => p.gender === filterPeople)
        }
            return people;
    }, [filterPeople, people])


    async function fetchPlanet() {
        const res = await as.getPlanet(params.id);
        setPlanet(res.data);
        setIsPlanetLoading(false);
    }

    async function fetchPeople() {
        if (planet !== null) {
            const res = await as.getPeople(planet.residents);
            setPeople(res);
            setIsPeopleLoading(false);
        }
    }

    return (
         <div className={styles.AboutPage}>
            <h1>{planet?.name}</h1>
            <div className={styles.PlanetInfo}>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Climate: </h3>
                    <p>{planet?.climate}</p>
                </div>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Diameter: </h3>
                    <p>{planet?.diameter}</p>
                </div>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Gravity: </h3>
                    <p>{planet?.gravity}</p>
                </div>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Terrain: </h3>
                    <p>{planet?.terrain}</p>
                </div>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Population: </h3>
                    <p>{planet?.population}</p>
                </div>

                <div className={styles.PlanetInfo__Item}>
                    <h3>Resident count: </h3>
                    <p>{planet?.residents?.length}</p>
                </div>
            </div>
            <div className={styles.PeopleInfo}>
                { isPeopleLoading ? <Loader/> : <div className={styles.PeopleInfo__Filter}>
                    <Select filterItem={filterPeople} changeItem={setFilterPeople}/>
                </div> }
                <PeopleList people={filterGenderPeople}/>
            </div>
        </div>
    );
}