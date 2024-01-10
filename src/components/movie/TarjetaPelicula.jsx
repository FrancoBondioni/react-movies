import styles from './TarjetaPelicula.module.css';
import { Link } from 'react-router-dom';

export function TarjetaPelicula({movie}) {
    return (
        <li key={movie.id} className={styles.TarjetaPelicula}>
            <Link to={`/detail/${movie.id}`}>
                <img 
                    className={styles.movieImg}
                    src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
                    alt={movie.title}>
                </img>
            </Link>
            <div className={styles.title}>
                {movie.title}
            </div>
        </li>
    )
}