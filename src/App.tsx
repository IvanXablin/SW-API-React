import React, {useEffect, useState} from 'react';
import './App.css';
import PlanetList from "./components/Planet/PlanetList";
import {IPlanet} from "./types/IPlanet";
import AxiosService from "./api/AxiosService";
import {getPagesArray, getPagesCount} from "./utils/pages";


function App() {

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
        const res:any = await axiosService.getAll(page);
        const totalCount = res.data.count;
        setPlanets(res.data.results);
        setTotalPages(getPagesCount(totalCount));
        setIsLoading(false);
    }

    function changePage(page:number) {
        setPage(page);
    }

  return (
    <div className="App">
        <h1>Star Wars Planet Info</h1>

        {isLoading ? <img src={require('./assets/load.gif')} alt="loading..."/> : <PlanetList arrayPlanets={planets}/>}

        <div style={{textAlign: 'center'}}>
            {pagesArray.map(page =>
                <button
                    style={{fontSize: '24px', marginLeft: '10px'}}
                    key={page}
                    onClick={() => changePage(page)}
                >{page}</button>
            )}
        </div>
    </div>
  );
}

export default App;
