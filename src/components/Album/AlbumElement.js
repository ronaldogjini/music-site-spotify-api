import React from 'react'

function AlbumElement({ album }) {

    let options = { year: 'numeric', month: 'long' };

    return (
        <div className="container w-80 mb-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <img
                className="w-full"
                src={`${album.images[0] !== undefined ? album.images[0].url : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}`}
                alt={album.name} />
            <div className="text-center relative pt-6 pb-4">
                <h1 className="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">{album.name}</h1>
                <span className="text-lg text-gray-700 hover:text-gray-900">{album.artists[0].name}</span>
            </div>
            <div className="pb-10 pt-4 px-6 text-center tracking-wide grid grid-cols-2 gap-2">
                <div >
                    <p className="text-lg">Label</p>
                    <p className="text-gray-400 text-sm">{album.label}</p>
                </div>
                <div >
                    <p className="text-lg">Release</p>
                    <p className="text-gray-400 text-sm">{new Date(album.release_date).toLocaleDateString("en-US", options)}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumElement
