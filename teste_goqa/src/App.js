//Hocks
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//CSS
import './App.css';

//Components
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home/Home'
import PageConstruction from './pages/PageConstruction/PageConstruction'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar className="navbar"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='construcao' element={<PageConstruction/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
