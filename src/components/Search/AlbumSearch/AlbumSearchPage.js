import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchAlbumElement from './SearchAlbumElement';

function AlbumSearchPage() {

    const [albums, setAlbums] = useState([]);
    const { query } = useParams();

    const spotifyApi = useSelector(state => state.token)

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.searchAlbums(query)
                .then(data => {
                    console.log(data.albums.items)
                    setAlbums(data.albums.items)
                })
        }
    }, [spotifyApi])

    return (
        <div className="max-w-screen-3xl full-height m-auto py-8 px-4">
            <h1 className="text-4xl font-semibold ml-8">Albums: {query}</h1>
            <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 py-8">

                {albums.map((album, index) => <SearchAlbumElement key={index} album={album}></SearchAlbumElement>)}
            </div>
        </div >
    )

}

export default AlbumSearchPage
