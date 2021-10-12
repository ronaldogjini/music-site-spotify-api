import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchTrackElement from './SearchTrackElement';
import Loading from '../../Loading';

function SongSearchPage() {
    const { query } = useParams();

    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const spotifyApi = useSelector(state => state.token)

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.searchTracks(query)
                .then(data => {
                    setIsLoading(false)
                    setTracks(data.tracks.items)
                })
        }
    }, [spotifyApi])

    if (isLoading) {
        return <Loading />
    }
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
