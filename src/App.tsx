import Planets from "./components/Pages/Planets";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import PlanetItemPage from "./components/Planet/PlanetItemPage/PlanetItemPage";

function App() {
  return (
       <BrowserRouter>
           <Routes>
               <Route path={'/'} element={<Planets/>}/>
               <Route path={'/planets/:id'} element={<PlanetItemPage/>}/>
           </Routes>
       </BrowserRouter>
  );
}

export default App;
