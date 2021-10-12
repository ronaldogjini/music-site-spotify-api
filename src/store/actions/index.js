import spotify from "../../api/spotify-web-api";
import getToken from '../../api/spotify-token'
const spotifyApi = new spotify();


export const tokenAction = () => {
    return (dispatch) => {
        getToken()
            .then(data => {
                spotifyApi.setAccessToken(data.access_token)
                dispatch({ type: 'GET_TOKEN', payload: spotifyApi })
            })
    }
}