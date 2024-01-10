import { useEffect, useState } from 'react'; 
import { CarteleraPelicula } from "../movie/CarteleraPelicula";
export function LandingPage() { const [search, setSearch] = useState("");
useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchParam = queryParams.get("search");
    setSearch(searchParam || "");
}, []);

return (
    <>
        <CarteleraPelicula key={search} search={search}/>
    </>
);
}