const { downloadSong, downloadSongsByPlaylist, downloadSongsByNames } = require('./src');
const path = require('path');

downloadSongsByNames(require('./songs.json'), path.join(__dirname, 'songs'))

process.on('exit', () => console.log('İşlem tamamlandı.'));