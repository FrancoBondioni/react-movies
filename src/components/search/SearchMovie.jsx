import { useState } from 'react';
import styles from './SearchMovie.module.css';
import { useNavigate } from 'react-router-dom';
import logoico from '../../assets/popcorn.ico';

export function SearchMovie() {
    
  const history = useNavigate();
  const [searchKey, setSearchKey] = useState('');
  const handleSubmit = (e) => {
      e.preventDefault();
      history(`react-movies/?search=${searchKey}`);
      setSearchKey(''); 
  }

    return(
        <form onSubmit={handleSubmit} className={styles.busquedaContenedor}>
      <input
      className={styles.busquedaInput}
        type="text" 
        placeholder="Buscar..."
        value={searchKey}   
        onChange={(e) => setSearchKey(e.target.value) }
      />
      <div><button className={styles.botonBusqueda} type="submit"><img className={styles.logoico} src={logoico} alt="" /></button></div>
    </form>
    );
}