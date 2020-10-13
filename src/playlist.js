const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

/**
 * @param {String} playlist A playlist code, or url.
 * @param {String} dir Output folder for downloaded songs.
 */

async function downloadSongsByPlaylist(playlist, dir) {
    const ytpl = require('ytpl');
    ytpl(playlist).then(playlist => {
      for (song of playlist.items) {
        const songName = song.title //.replace(/ \[.+\]/g, '');
        ytdl(song.url_simple, { filter: 'audioonly' }).pipe(fs.createWriteStream(path.join(dir, songName+'.mp3')))
      }
    }).catch(err => {
      console.error(err);
    });
}

module.exports = downloadSongsByPlaylist;