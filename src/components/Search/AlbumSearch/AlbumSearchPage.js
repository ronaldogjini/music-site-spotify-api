import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchAlbumElement from './SearchAlbumElement';
import Loading from '../../Loading';
function AlbumSearchPage() {

    const [albums, setAlbums] = useState([]);
    const { query } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    const spotifyApi = useSelector(state => state.token)

    useEffect(() => {
        if (spotifyApi !== '') {
            spotifyApi.searchAlbums(query)
                .then(data => {
                    setIsLoading(false)
                    setAlbums(data.albums.items)
                })
        }
    }, [spotifyApi])

    if (isLoading) {
        return <Loading />
    }
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
