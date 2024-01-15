import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import Loading from '../Loading/Loading'

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

  if (loading) { return (<Loading />) }

  return (
    <div className="detailContainer">
      <ItemDetail coin={coin}/>
    </div>
  )
}

export default ItemDetailContainer