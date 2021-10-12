import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import AlbumElement from './AlbumElement';
import AlbumTrackElement from './AlbumTrackElement'
import { useSelector } from 'react-redux';
import Loading from '../Loading'

function PlaylistPage() {

    const [album, setAlbum] = useState();
    const [albumTracks, setAlbumTracks] = useState([]);
    const [thumbnail, setThumbnail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const spotifyApi = useSelector(state => state.token)

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.getAlbum(id)
                .then(data => {
                    setAlbum(data)
                    setThumbnail(data.images[0].url)
                    setAlbumTracks(data.tracks.items)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))

        }
    }, [spotifyApi])

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="max-w-screen-xl full-height grid grid-cols-1 md:grid-cols-3 gap-8 m-auto py-8 px-2">

            <div className="col-span-1">
                {album ? <AlbumElement album={album} /> : ''}
            </div>

            <div className="col-span-2">
                <h3 className="text-4xl font-bold mb-4">Tracks</h3>
                <div className="grid grid-cols-2 gap-x-4">
                    {albumTracks.map((track, index) => <AlbumTrackElement key={index} track={track} thumbnail={thumbnail}></AlbumTrackElement>)}
                </div>
            </div>

        </div>
    )
}

export default PlaylistPage

