import React from 'react'
import { Link } from 'react-router-dom'

function MenuElement() {
    return (
        <ul className="flex space-x-4 text-xl">
            <li>
                <Link to="/latest-songs">Latest Hits</Link>
            </li>
        </ul>

    )
}

export default MenuElement
