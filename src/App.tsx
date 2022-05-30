import React, {useState} from 'react';
import './App.css';
import PostService from "./api/PostService";
import PlanetList from "./components/Planet/PlanetList";

interface PlanetLis {
    arrayPlanets: [];
}

function App() {
    const [value, setValue] = useState<PlanetLis>();

    async function fetchPlanets() {
        const ps = new PostService()
        const planets = await ps.getAll();
        setValue(planets);
    }

  return (
    <div className="App">
        <button onClick={fetchPlanets}>GET</button>
        <PlanetList arrayPlanets={value}/>
    </div>
  );
}

export default App;
