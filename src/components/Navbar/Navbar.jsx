import './Navbar.scss'

function Navbar () {


    return (
        <nav className='navbar'>
            <h1>CoinView</h1>
            <button onClick={ () => {window.location.reload(false)}}>Refresh</button>
        </nav>
    )
}

export default Navbar