import PlanetListPage from "./components/Pages/PlanetListPage/PlanetListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import PlanetAboutPage from "./components/Pages/PlanetAboutPage/PlanetAboutPage";

function App() {
  return (
       <BrowserRouter>
           <Routes>
               <Route path={'/'} element={<PlanetListPage/>}/>
               <Route path={'/planets/:id'} element={<PlanetAboutPage/>}/>
           </Routes>
       </BrowserRouter>
  );
}

export default App;
