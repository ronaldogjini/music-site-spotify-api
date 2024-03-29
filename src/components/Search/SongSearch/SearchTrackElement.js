import React from 'react'
import { Link } from 'react-router-dom'

function SearchTrackElement({ track }) {
    return (
        <div className="container w-80 mx-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
            <img
                className="w-full"
                src={`${track.album.images[0].url !== undefined ? track.album.images[0].url : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}`}
                alt={track.name} />
            <div className="text-center relative pt-12 pb-4">
                <Link className="cursor-pointer" to={`/song/${track.id}`}>
                    <span
                        className="cursor-pointer absolute transform -translate-x-10 -translate-y-24 z-50 text-green-500 bg-white rounded-full hover:text-green-400 transition-all duration-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </span>
                </Link>
                <h1 className="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">{track.name}</h1>
                <span className="text-lg text-gray-700 hover:text-gray-900">{track.artists[0].name}</span>
            </div>
        </div>
    )
}

export default SearchTrackElement
