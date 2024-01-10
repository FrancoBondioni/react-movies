import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { get } from '../../utils/httpClient';
import styles from './ComponentesPelicula.module.css';
import { Spinner } from '../spinner/Spinner';
import returnimg from '../../assets/returnimg.png'
export function ComponentesPelicula() {
    const [movie, setMovie] = useState(null);
    const [isLoading,setLoading] = useState(true)
    const {movieId} = useParams();

    useEffect( () =>{
        setLoading(true);
        get(`/movie/${movieId}`)
        .then(data => {
            setMovie(data); 
            setLoading(false);
        });
    },[movieId]);

    if(isLoading) {
        return <Spinner/>;
    }

    if(!movie) {
        return null;
    }

    const imageURL = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    
    return (
        <>
            <div className={styles.detailsContainer}>
                <img src={imageURL} 
                    alt={movie.title} 
                    width={340} 
                    height={'auto'}
                    className={styles.movieImage}>
                </img>
                <div className={styles.col}>
                    <p><span>Titulo:</span> {movie.title}</p>
                    <p><span>Fecha de lanzamiento:</span> {movie.release_date}</p>
                    <p><span>Sinopsis:</span> {movie.overview}</p>
                    <p><span>Género:</span> {movie.genres.map(gen =>  gen.name).join(', ')}</p>
                    <p><span>Titulo original:</span> {movie.original_title}</p>
                    <p><span>Sitio Web: </span>
                        <a className={styles.movieUrl} 
                            href={movie.homepage} 
                            target="_new">{movie.title}
                        </a>
                    </p>
                </div>
            </div>
            <Link to={'/react-movies'}>
                <p className={styles.volverLink}><img src={returnimg} className={styles.returnlogo} alt="" /></p>
            </Link>         
        </>
    );
}