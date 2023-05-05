import './ItemListContainer.scss'
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

function ItemListContainer () {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then((data) => {
                setData(data)
                setOriginalData(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (searchTerm) => {
        const searchResults=originalData.filter((element)=>{
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                element.symbol.toString().toLowerCase().includes(searchTerm.toLowerCase()) ) 
                { return element; }
            })
        setData(searchResults)
    }

    if (loading) { return ( <h1 className="loading">Loading...</h1> ) }

    return (
        <div>
            <input className="search" type="search" value={search} onChange={handleSearch} placeholder="Search by coin name or symbol"/>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer