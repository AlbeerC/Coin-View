/* import './Item.scss'

function Item ( { id, name, image, symbol, price, cap } ) {

    return (
        <div className="card">
            <p>{id}</p>
            <div className='item-info'>
                <h2>{name}</h2>
                <img src={image} alt="coin image" />
                <h3 className='symbol'>{symbol}</h3>
            </div>
            <p>${price}</p>
            <p>${cap}</p>
        </div>
    )

}

export default Item */




import './Item.scss'

function Item ( { id, name, image, symbol, price, cap } ) {

    return (
        <tr>
            <td>{id}</td>
            <td className='coin'>
                <h2>{name}</h2>
                <img src={image} alt="coin image" />
                <h3>{symbol}</h3>
            </td>
            <td className='value-price'>${price}</td>
            <td>${cap}</td>
        </tr>
    )

}

export default Item