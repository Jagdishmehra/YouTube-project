export const LOGO_URL="https://imgs.search.brave.com/gMuQvnJ0Dvv_J8-xZz-ac46oj73W4FoYk-4hw_adtg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc";
const GOOGLE_API_KEY="AIzaSyBQi7cGSg63LtIlVDs8iU7cLxWFHS0xVnw"
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFjMWI4YzA2ZjUxZTdjZWM0NTQyODI1YzAyMTEyNiIsIm5iZiI6MTcyNzA4OTEyMC4xOTI5NDcsInN1YiI6IjY2YzQ4Mzg0YWE2ZDI0ZDVmNmFkYjg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._K50vAxUfgx0LnTUN4u2npZNw-rkDXQ26XF9X7K8e7o'
    }
}
export const LIVE_CHAT_OFFSET=15;
export const IMG_LIST_URL="https://image.tmdb.org/t/p/w440_and_h660_face/";

export const MOVIE_API_KEY='https://api.themoviedb.org/3/movie/upcoming?'
//use this after now playing for lang pref --language=en-US