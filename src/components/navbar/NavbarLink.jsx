import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
import Styles from './NavbarLink.module.css'
import logoico from '../../assets/popcorn.ico'
import { SearchMovie } from '../search/SearchMovie';
function NavbarLink() {
  return (
    <header className={Styles.header}>
    <Nav classname={Styles.navbar}>
    <div   >
      <Link Link to={'/react-movies'}>
        <img src={logoico} width="80" height="80" alt=""/>
      </Link>
    </div>
    <ul className={Styles.ul}> 
      <li><SearchMovie/></li>
    </ul>
      
  </Nav>
  </header>
  );
}

export default NavbarLink;