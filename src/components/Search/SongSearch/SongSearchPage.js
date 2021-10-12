import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchTrackElement from './SearchTrackElement';

function SongSearchPage() {

    const [tracks, setTracks] = useState([]);
    const { query } = useParams();

    const spotifyApi = useSelector(state => state.token)

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.searchTracks(query)
                .then(data => {
                    console.log(data.tracks.items)
                    setTracks(data.tracks.items)
                })
        }
    }, [spotifyApi])

    return (
        <div className="max-w-screen-3xl full-height m-auto py-8 px-4">
            <h1 className="text-4xl font-semibold ml-6">Songs: {query}</h1>
            <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 py-8">
                {tracks.map((track, index) => <SearchTrackElement key={index} track={track}></SearchTrackElement>)}
            </div>
        </div >
    )

}

export default SongSearchPage
