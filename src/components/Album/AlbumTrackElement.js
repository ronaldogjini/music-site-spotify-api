import React from 'react'
import { Link } from 'react-router-dom'

function AlbumTrackElement({ track, thumbnail }) {
    return (
        <Link to={`/song/${track.id}`}>
            <div className="max-w-md bg-gray-900 rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-2xl transform hover:scale-105 duration-300">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-24 w-24 object-cover"
                            style={{ filter: "brightness(50%)" }}
                            src={thumbnail}
                            alt={track.name} />
                    </div>
                    <div className="px-2 pt-2">
                        <div className="block mt-1 text-md text-gray-200 font-bold">
                            {track.name}
                        </div>
                        <p style={{ whiteSpace: "nowrap" }} className="mt-2 text-gray-500">
                            {track.artists.map(artist => artist.name).join(', ')}
                        </p>
                    </div>
                </div >
            </div >
        </Link>
    )
}

export default AlbumTrackElement
