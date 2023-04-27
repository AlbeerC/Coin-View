import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar () {


    return (
        <nav className='navbar'>
            <Link to='/'> <h1>CoinView</h1> </Link>
            <button onClick={ () => {window.location.reload(false)}}>Refresh</button>
        </nav>
    )
}

export default Navbar