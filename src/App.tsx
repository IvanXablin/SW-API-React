import PlanetListPage from "./pages/PlanetListPage/PlanetListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import PlanetAboutPage from "./pages/PlanetAboutPage/PlanetAboutPage";

function App() {
  return (
       <BrowserRouter>
           <Routes>
               <Route path={'/SW-API-React/'} element={<PlanetListPage/>}/>
               <Route path={'/SW-API-React/planets/:id'} element={<PlanetAboutPage/>}/>
           </Routes>
       </BrowserRouter>
  );
}

export default App;
