import React from 'react'
import { Link } from 'react-router-dom'

function AlbumElement({ album }) {
    return (
        <Link to={`/album/${album.id}`}>
            <div className="w-40 rounded-xl shadow-lg my-2 hover:shadow-2xl transform hover:scale-105 duration-500 cursor-pointer">
                <div className="relative">
                    <img className="w-40 h-40 object-cover rounded-xl"
                        src={album.images[0].url}
                        alt={album.name} />
                    <div className="text-center absolute w-full"
                        style={{ bottom: "-30px" }}>
                        <div className="mb-10">
                            <p
                                className="text-white filter drop-shadow-xl text-md font-bold">
                                {album.name}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AlbumElement
