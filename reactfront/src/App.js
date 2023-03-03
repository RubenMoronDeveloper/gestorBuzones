
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
import LoginVecino from './components/LoginVecino';




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
        {/* CARTAS */}
        <Route path='/createCarta/:id' element={<CreateCarta/>}></Route>
        {/* Login /register */}
        <Route path='/login/' element={<LoginVecino/>}></Route>
        <Route path='/register/' element={<CreateVecino/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
