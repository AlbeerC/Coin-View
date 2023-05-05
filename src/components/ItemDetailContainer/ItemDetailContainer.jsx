import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"

function ItemDetailContainer() {

  const {id} = useParams()
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => response.json())
      .then(data => setCoin(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) { return (<h1 className="loading">Loading...</h1>) }

  return (
    <div className="detailContainer">
      <ItemDetail coin={coin}/>
    </div>
  )
}

export default ItemDetailContainer