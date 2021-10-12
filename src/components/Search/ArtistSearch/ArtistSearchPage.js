import React, { useState, useEffect } from 'react'
import SearchArtistElement from './SearchArtistElement';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../Loading'

function ArtistSearchPage() {

    const { query } = useParams();
    const [artists, setArtists] = useState([]);
    const spotifyApi = useSelector(state => state.token)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.searchArtists(query)
                .then(data => {
                    setArtists(data.artists.items)
                    setIsLoading(false)
                })
        }
    }, [spotifyApi])

    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <div className="max-w-screen-3xl full-height m-auto py-8 px-4">
                <h1 className="text-4xl font-semibold ml-8">Artists: {query}</h1>
                <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 py-8">
                    {artists.map((artist, index) => <SearchArtistElement key={index} artist={artist}></SearchArtistElement>)}
                </div>
            </div >
        )
    }
}

export default ArtistSearchPage
