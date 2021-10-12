import MenuElement from './MenuElement'
import SearchElement from './SearchElement'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-black py-3 px-8 text-white">

            <Link to="/">
                <span className="text-2xl font-bold">Music</span><span className="text-2xl font-bold gradient">Tube</span>
            </Link>

            <MenuElement />
            <SearchElement />
        </nav >
    )
}

export default Navbar
