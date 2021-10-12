
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import SongElement from './SongElement';

function SongsPage() {

  const [tracks, setTracks] = useState([]);
  const spotifyApi = useSelector(state => state.token)

  useEffect(() => {
    if (spotifyApi !== '') {
      spotifyApi.getPlaylistTracks("37i9dQZEVXbMDoHDwVN2tF")
        .then(data => setTracks(data.items))
        .catch(err => console.log(err))

    }
  }, [spotifyApi])


  return (
    <div className="max-w-screen-3xl full-height m-auto py-8 px-4">
      <h1 className="text-4xl font-bold uppercase ml-8">Latest Hits</h1>
      <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 py-8">
        {tracks.map((track, index) => <SongElement key={index} track={track.track}></SongElement>)}
      </div>
    </div >
  );

}

export default SongsPage;
