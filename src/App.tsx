import Planets from "./components/Pages/Planets";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
       <BrowserRouter>
           <Routes>
               <Route path={'/'} element={<Planets/>}/>
           </Routes>
       </BrowserRouter>
  );
}

export default App;
