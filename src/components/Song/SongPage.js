import React from "react";
import { useParams } from "react-router";

function SongPage() {
  const { id } = useParams();

  return (
    <div className='full-height flex justify-center items-center bg-gray-200'>
      <iframe src={`https://open.spotify.com/embed/track/${id}`} width="700" height="780" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
    </div>
  );
}

export default SongPage;
