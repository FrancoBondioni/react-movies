import { TarjetaPelicula } from './TarjetaPelicula';
import styles from './CarteleraPelicula.module.css';
import { useState, useEffect } from 'react';
import { Spinner } from '../spinner/Spinner';
// import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';
import { get } from '../../utils/httpClient';

export function CarteleraPelicula({search}) {

    //estado > steState
    const [peliculas, setPeliculas] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true);

    useEffect( ()=> {
      setIsLoading(true);
      const urlSerch = search 
        ? '/search/movie?query='+search
        : '/discover/movie?page='+page;

       get(urlSerch)
       .then(data => {
          if(page > 1) {
            setPeliculas( (prevMovies) => prevMovies.concat(data?.results || []))//.sort
          }else {
            setPeliculas( data.results)//.sort
          }

          setIsLoading(false);
          setHasMore(data.page < data.total_pages);
      });
    },[search,page]);

    return (

    <InfiniteScroll
        dataLength={peliculas.length} 
        hasMore={hasMore}
        next={() => setPage( (prevPage) => prevPage + 1)}
        loader={<Spinner/>}
        >
        <ul className={styles.CarteleraPelicula}>
            {
              peliculas.map((movie) =>{
                return <TarjetaPelicula key={movie.id} movie={movie}></TarjetaPelicula>
              })
            }
        </ul>
    </InfiniteScroll>
    );
}