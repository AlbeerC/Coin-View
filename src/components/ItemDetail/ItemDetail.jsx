import { useState } from 'react'
import './ItemDetail.scss'

function ItemDetail ( {coin} ) {

    const [selectedCoin, setSelectedCoin] = useState("usd")

    const handleSelect = (e) => {
        setSelectedCoin(e.target.value)
    }

    return (
        <div className="detail">
            
            <div className="detail-left">
                <div className="left-main-info">
                    <h2 className='rank'>#{coin.market_cap_rank}</h2>
                    <img src={coin.image.small} alt={coin.name} />
                    <h1>{coin.symbol}</h1>
                    <h2>{coin.name.toUpperCase()}</h2>
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
                    <div className="prices">
                        <h2>Price:</h2>
                        <select name="coin" onChange={handleSelect} value={selectedCoin}>
                            <option value="usd">USD</option>
                            <option value="ars">ARS</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="aud">AUD</option>
                            <option value="mxn">MXN</option>
                            <option value="bch">BCH</option>
                            <option value="btc">BTC</option>
                        </select>
                    </div>
                    <p className='price'>${coin.market_data.current_price[selectedCoin]} {selectedCoin.toUpperCase()}</p>   
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