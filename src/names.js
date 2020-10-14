const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const videoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g;
/**
 * @param {String} tracks An array of song names.
 * @param {String} dir Output folder for downloaded songs.
 */

 async function downloadSongsByNames(tracks, dir) {
    const ytsr = require('ytsr');
    for (song of tracks) {
        let track;
        if (videoRegex.test(song)) track = song;
        else track = (await ytsr(song, { limit: 1 }))?.items[0]?.link;
        if (!track) {
            console.error('An error occured, please try again.')
            continue;
        }
        ytdl(track, { filter: 'audioonly' }).pipe(fs.createWriteStream(path.join(dir, song.replace(videoRegex, `Track ${fs.readdirSync(dir).filter(x => x.endsWith('.mp3')).length+1}`) + '.mp3')));
    }
};

module.exports = downloadSongsByNames;