const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const ytsr = require('ytsr');
const videoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g;
/**
 * @param {String} url A YouTube video url or search string.
 * @param {String} dir Output folder for downloaded songs.
 */

async function downloadSong(url0rname, dir) {
    if (videoRegex.test(url0rname)) {
        const songName = `Track ${fs.readdirSync(dir).filter(x => x.endsWith('.mp3')).length+1}.mp3`;
        ytdl(url0rname, { filter: 'audioonly' }).pipe(fs.createWriteStream(path.join(dir, songName)))
    } else {
        const track = (await ytsr(url0rname, { limit: 1 }))?.items[0];
        if (!track) {
            console.error('An error occured, please try again.')
            return;
        }
        ytdl(track.link, { filter: 'audioonly' }).pipe(fs.createWriteStream(path.join(dir, track.title+'.mp3')))
    }
}

module.exports = downloadSong;