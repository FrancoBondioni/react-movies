import { useLocation } from 'react-router';
import { CarteleraPelicula } from "../movie/CarteleraPelicula";
export function LandingPage() {

    const query =  new URLSearchParams(useLocation().search);
    const search = query.get("search");

    return (
        <>
            <CarteleraPelicula key={search} search={search}/>
        </>
    );
}