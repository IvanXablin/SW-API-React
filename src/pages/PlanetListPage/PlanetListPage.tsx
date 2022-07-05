import React, {useEffect, useState} from 'react';
import {IPlanet} from "../../types/IPlanet";
import AxiosService from "../../api/AxiosService";
import {getPagesArray, getPagesCount} from "../../utils/pages";
import PlanetList from "../../components/Planet/PlanetList/PlanetList";
import styles from "./PlanetListPage.module.css"
import Loader from "../../components/Loader/Loader";

export default function PlanetListPage() {

    const [planets, setPlanets] = useState<IPlanet[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const axiosService = new AxiosService();
    const pagesArray = getPagesArray(totalPages);

    useEffect(() => {
        fetchPlanets().catch(e => console.log(e.message));
    },[page]);

    async function fetchPlanets() {
        setIsLoading(true);
        const res:any = await axiosService.getPlanets(page);
        const totalCount = res.data.count;
        setPlanets(res.data.results);
        setTotalPages(getPagesCount(totalCount));
        setIsLoading(false);
    }

    function changePage(page:number) {
        setPage(page);
    }

    return (
        <div className={styles.wrapper}>
            
            <h1 className={styles.header}>Star Wars API</h1>
            
            <div className={styles.contentPage}>
                {pagesArray.map(p =>
                    <button
                        className={page === p ? styles.bntPage__current : styles.bntPage}
                        key={p}
                        onClick={() => changePage(p)}
                    >{p}</button>
                )}
            </div>

            {isLoading ? <Loader/> : <PlanetList arrayPlanets={planets}/>}
        </div>
    );
}

