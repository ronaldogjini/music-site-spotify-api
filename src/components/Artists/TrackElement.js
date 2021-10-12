import React from 'react'
import { Link } from 'react-router-dom'

function TrackElement({ track }) {
    return (
        <div className="max-w-md bg-gray-900 rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-2xl transform hover:scale-105 duration-500">
            <Link to={`/song/${track.id}`}>
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-20 w-20 object-cover"
                            src={track.album.images[0].url}
                            alt={track.name} />
                    </div>
                    <div className="p-2">
                        <div className="block mt-1 text-md text-gray-200 font-bold">
                            {track.name}
                        </div>
                        <p className="mt-2 text-gray-500" style={{ whiteSpace: "nowrap" }}>
                            {track.artists.map(artist => artist.name).join(', ')}
                        </p>
                    </div>
                </div >
            </Link>
        </div >
    )
}

export default TrackElement
