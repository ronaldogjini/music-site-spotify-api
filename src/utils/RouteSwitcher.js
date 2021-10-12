import { Switch, Route } from 'react-router-dom'

import ArtistPage from "../components/Artists/ArtistPage";
import ArtistSearchPage from '../components/Search/ArtistSearch/ArtistSearchPage';
import AlbumPage from "../components/Album/AlbumPage";
import SongPage from "../components/Song/SongPage";
import HomePage from "../components/Homepage/HomePage";
import PageNotFound from "../components/PageNotFound";
import AlbumSearchPage from '../components/Search/AlbumSearch/AlbumSearchPage';
import SongSearchPage from '../components/Search/SongSearch/SongSearchPage'
import SongsPage from '../components/SongHits/SongsPage';

function RouteSwitcher() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/latest-songs">
                <SongsPage />
            </Route>
            <Route path="/search/artist/:query">
                <ArtistSearchPage />
            </Route>
            <Route path="/search/album/:query">
                <AlbumSearchPage />
            </Route>
            <Route path="/search/song/:query">
                <SongSearchPage />
            </Route>
            <Route path="/album/:id">
                <AlbumPage />
            </Route>
            <Route path="/song/:id">
                <SongPage />
            </Route>
            <Route path="/artist/:id">
                <ArtistPage />
            </Route>
            <Route path="/*">
                <PageNotFound />
            </Route>
        </Switch>
    );
}

export default RouteSwitcher;