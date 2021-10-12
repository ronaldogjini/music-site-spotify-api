import React from 'react'

function ArtistElement({ artist }) {
    console.log(artist)
    return (
        <div className="container w-80 mb-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <img
                className="w-full"
                src={`${artist.images[0] !== undefined ? artist.images[0].url : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}`}
                alt={artist.name} />
            <div className="text-center relative pt-12 pb-4">
                <h1 className="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                    {artist.name}
                </h1>
                <span className="text-lg text-gray-700 hover:text-gray-900">
                    {artist.type[0].toUpperCase() + artist.type.slice(1).toLowerCase()}
                </span>
            </div>

            <div className="pt-5 pb-10 px-6 text-center tracking-wide">
                <div >
                    <p className="text-lg">{artist.followers.total.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                </div>

            </div>
        </div>
    )
}

export default ArtistElement
