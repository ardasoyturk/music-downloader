const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

/**
 * @param {String} url A YouTube video url.
 * @param {String} dir Output folder for downloaded songs.
 */

async function downloadSong(url, dir) {
    const songName = `Track ${fs.readdirSync(dir).filter(x => x.endsWith('.mp3')).length+1}.mp3`;
    ytdl(url, { filter: 'audioonly' }).pipe(fs.createWriteStream(path.join(dir, songName)))
}

module.exports = downloadSong;