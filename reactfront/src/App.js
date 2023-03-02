
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
//Components
import AdminVecinos from './components/AdminVecinos';
import CreateVecino from './components/CreateVecino';
import EditVecino from './components/EditVecino';
import ShowVecinos from './components/ShowVecinos';
import VecinoCartas from './components/VecinoCartas';
import CreateCarta from './components/CreateCarta';




function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ShowVecinos/>}></Route>
        <Route path='/admin' element={<AdminVecinos/>}></Route>
        <Route path='/create' element={<CreateVecino/>}></Route>
        <Route path='/edit/:id' element={<EditVecino/>}></Route>
        <Route path='/vecinoCartas/:id' element={<VecinoCartas/>}></Route>
        <Route path='/createCarta/:id' element={<CreateCarta/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
