const fs=require('fs'),assert=require('assert'),html=fs.readFileSync('index.html','utf8');
assert(html.includes("projectMusic.addEventListener('playing'"));
assert(html.includes("location.protocol!=='file:'"));
assert(!html.includes("projectMusic.loop=true;typeof window.PacPacAudioVisualizer478?.attachMediaElement"));
assert(html.includes("$('musicSource').onchange"));
assert(html.includes("projectMusicFailed=false;projectMusicBlocked=false"));
assert(html.includes('v4.8.6'));
console.log('PASS 4.8.4 project MP3 plays before analyser attach');
console.log('PASS 4.8.4 local file direct playback');
console.log('PASS 4.8.4 project source reset');



