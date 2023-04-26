import './Navbar.scss'

function Navbar () {

    return (
        <nav className='navbar'>
            <h1>CoinView</h1>
                <input type="search" placeholder="Search"/>
            <button onClick={ () => {window.location.reload(false)}}>Refresh</button>
        </nav>
    )
}

export default Navbar