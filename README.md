# music-downloader
Multiple or single music downloader for YouTube. Works with Node.js

# Installation
`yarn` or `npm install`

# Requirements
[Node.js](https://nodejs.org) >= 14.0.0 (because of ?. statements)
[npm](https://npmjs.com) (shipped with Node.js)

# Examples
```js
// Download songs by names
downloadSongsByNames(require('./songs.json'), path.join(__dirname, 'songs'));

// Download a song from url
downloadSong('https://www.youtube.com/watch?v=dQw4w9WgXcQ', path.join(__dirname, 'songs'))

// Download songs from a playlist
downloadSongsByPlaylist('https://www.youtube.com/watch?v=bcvsE4C1JnU&list=OLAK5uy_mfK2qSpeFQVXAGuKwBCIg49bd-jCvNoSY', path.join(__dirname, 'songs'));
```