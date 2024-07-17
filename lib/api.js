const client_id = "b7d044fc471148b59dde1ae6dd9d2439";
const client_secret = "a95ed8a97fd345fbaeb9467c2a4a26ad";
let access_token;
async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  access_token = data.access_token;
}
getAccessToken();

 export default async function searchTracks(query) {
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    });
    const data = await response.json();
    return data.tracks.items;
  }
