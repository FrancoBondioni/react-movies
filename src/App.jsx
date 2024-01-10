import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import { ComponentesPelicula } from './components/movie/ComponentesPelicula';
import { LandingPage } from './components/landing/LandingPage';
import NavbarLink from './components/navbar/NavbarLink';

function App() {
  // console.log(styles);

  return (
    <BrowserRouter basename='/'>
      <header>
       <NavbarLink />
      </header>
      <main>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/detail/:movieId' element={<ComponentesPelicula/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;