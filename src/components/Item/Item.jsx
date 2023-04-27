import './Item.scss'

function Item ( { id, name, image, symbol, price, cap } ) {

    return (
        <tr>
            <td className='d-none'>{id}</td>
            <td className='coin'>
                <h2>{name}</h2>
                <img src={image} alt="coin image" />
                <h3 className='d-none'>{symbol}</h3>
            </td>
            <td className='value-price'>${price}</td>
            <td className='d-none'>${cap}</td>
        </tr>
    )

}

export default Item