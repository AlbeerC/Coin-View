import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import axios from "axios";

function ItemListContainer () {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response => setData(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) { return ( <h1 className="loading">Loading...</h1> ) }

    return (
        <div>
            <ItemList data={data}/>
        </div>
    )
    
}

export default ItemListContainer