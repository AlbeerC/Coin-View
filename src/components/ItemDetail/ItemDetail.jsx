import './ItemDetail.scss'

function ItemDetail ( {coin} ) {

    return (
        <div className="detail">
            
            <div className="detail-left">
                <div className="left-main-info">
                    <h2>#{coin.market_cap_rank}</h2>
                    <img src={coin.image.small} alt={coin.name} />
                    <h1>{coin.name.toUpperCase()}</h1>
                    <h3>{coin.symbol}</h3>
                </div>
                <div className="left-other-info">
                    <h4>Ath Change percentage</h4>
                    <p>{coin.market_data.ath_change_percentage.usd}%</p>
                </div>
                <div className="left-other-info">
                    <h4>Market Cap</h4>
                    <p>${coin.market_data.market_cap.usd}</p>
                </div>
                <div className="left-other-info">
                    <h4>Total Volume</h4>
                    <p>${coin.market_data.total_volume.usd}</p>
                </div>
            </div>

            <div className="detail-right">
                <div className="right-main-info">
                    <h2>Price</h2>
                    <div className="prices">
                        <p>${coin.market_data.current_price.usd} USD</p>
                        <p>${coin.market_data.current_price.ars} ARS</p>
                    </div>
                </div>  
                <div className="right-other-info">
                    <h4>Price Change 24h</h4>
                    <p className={coin.market_data.price_change_percentage_24h >= 0 ? 'green' : 'red'}>{coin.market_data.price_change_percentage_24h}%</p>
                </div>
                <div className="right-other-info">
                    <h4>Price Change 7d</h4>
                    <p className={coin.market_data.price_change_percentage_7d >= 0 ? 'green' : 'red'}>{coin.market_data.price_change_percentage_7d}%</p>
                </div>
                <div className="right-other-info">
                    <h4>Price Change 30d</h4>
                    <p className={coin.market_data.price_change_percentage_30d >= 0 ? 'green' : 'red'}>{coin.market_data.price_change_percentage_30d}%</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail