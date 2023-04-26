/* import Item from "../Item/Item"
import './ItemList.scss'

function ItemList ( {data} ) {

    return (
        <div className="list">
            <ul>
                <li>#</li>
                <li>Coin</li>
                <li>Price</li>
                <li>Market Cap</li>
            </ul>
            {data.map((prod) => (
                <Item key={prod.market_cap_rank}
                        id={prod.market_cap_rank}
                        name={prod.name}
                        image={prod.image}
                        symbol={prod.symbol}
                        price={prod.current_price}
                        cap={prod.market_cap}
                />))}
        </div>

    )
}

export default ItemList */




import Item from "../Item/Item"
import './ItemList.scss'

function ItemList ( {data} ) {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th className="coin">Coin</th>
                    <th className="price">Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            
            <tbody>
                    {data.map((prod) => (
                    <Item key={prod.market_cap_rank}
                            id={prod.market_cap_rank}
                            name={prod.name}
                            image={prod.image}
                            symbol={prod.symbol}
                            price={prod.current_price}
                            cap={prod.market_cap}
                    />))}
            </tbody>

        </table>

    )
}

export default ItemList