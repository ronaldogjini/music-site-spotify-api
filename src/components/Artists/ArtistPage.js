import React, { useEffect, useState } from "react";
import ArtistElement from "./ArtistElement";
import TrackElement from "./TrackElement";
import AlbumElement from "./AlbumElement";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

function ArtistPage() {

  const [artist, setArtist] = useState();
  const [artistTracks, setArtistTracks] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const { id } = useParams();


  const spotifyApi = useSelector(state => state.token)

  useEffect(() => {
    if (spotifyApi !== '') {
      spotifyApi.getArtist(id)
        .then(data => setArtist(data))
        .catch(err => console.log(err))

      spotifyApi.getArtistTopTracks(id, "US")
        .then(data => {
          setArtistTracks(data.tracks)
        })

      spotifyApi.getArtistAlbums(id)
        .then(data => {
          console.log(data.items)
          setArtistAlbums(data.items)
        })
    }
  }, [spotifyApi])

  return (
    <div className="max-w-screen-2xl full-height grid grid-cols-1 md:grid-cols-8 gap-8 m-auto py-8 px-2">

      <div className="col-span-2">
        {artist ? <ArtistElement artist={artist} /> : ''}
      </div>

      <div className="col-span-3 mx-auto">
        <h3 className="text-4xl font-bold mb-4">Tracks</h3>
        {artistTracks.map((track, index) => <TrackElement key={index} track={track}></TrackElement>)}
      </div>

      <div className="col-span-3">
        <h3 className="text-4xl font-bold mb-4 ">Albums</h3>
        <div className="grid grid-cols-3">
          {artistAlbums.map((album, index) => <AlbumElement key={index} album={album}></AlbumElement>)}
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
