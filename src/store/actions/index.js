import spotify from "../../api/spotify-web-api";

const spotifyApi = new spotify();


export const tokenAction = () => {

    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Basic YzRmMmQ5ZTA3MjA1NGEyZTgyNzI0NDc3YWY0YjI0NDQ6MTE4MGI4YzNkZDVhNDU5ZGI0YTEyOTJmYmVlYzdiYzg="
    );

    return (dispatch) => {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: myHeaders,
            body: new URLSearchParams({
                grant_type: "client_credentials",
            }),
        })
            .then((data) => data.json())
            .then(data => {
                spotifyApi.setAccessToken(data.access_token)
                dispatch({ type: 'GET_TOKEN', payload: spotifyApi })
            })
    }
}