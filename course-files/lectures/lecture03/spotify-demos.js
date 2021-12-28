const axios = require("axios");
const proxyUrl = 'https://www.apitutor.org/spotify/v1';
const beyonceId = '6vWDO969PvNqNYHIOW5v0m';

/**
 * Example #1
 *  Search API
 *     Documentation:
 *        https://developer.spotify.com/documentation/web-api/reference/#category-search
 *     Query String Parameters:
 *        q:       (string) any search term
 *        type:    (string) one of the following:
 *                    album, artist, playlist, track, show, episode
 * 
 *   Example: /search?q=beyonce&type=track
 */
const searchTerm = 'Beyonce';
const resourceType = 'track';
const queryUrl = `${proxyUrl}/search?q=${searchTerm}&type=${resourceType}`;
console.log('Proxy URL:', queryUrl);
axios.get(queryUrl)
    .then(response => {
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });


/**
 * EXAMPLE #2
 *  Detail Resource:
 * 
 *   Documentation:
 *      https://developer.spotify.com/documentation/web-api/

 *   Example: 
 *      /spotify/v1/artists/6vWDO969PvNqNYHIOW5v0m
 */

const artistUrl = `${proxyUrl}/artists/${beyonceId}`;
console.log('Proxy URL:', artistUrl);
axios.get(artistUrl)
    .then(response => {
        console.log(response.status);
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });


    
/** EXAMPLE #3
 *  List Resource:
 *    Example: /spotify/v1/artists/6vWDO969PvNqNYHIOW5v0m/albums
 */

const albumsUrl = `${proxyUrl}/artists/${beyonceId}/albums`;
console.log('Proxy URL:', albumsUrl);
axios.get(albumsUrl)
    .then(response => {
        console.log(response.status);
        console.log(response.data);
        // console.log(response.data.tracks.items[0])
    })
    .catch(err => {
        console.log(err);
    });