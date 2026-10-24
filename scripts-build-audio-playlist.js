'use strict';const fs=require('fs'),path=require('path'),dir=path.join(__dirname,'audio');
const effects=new Set(['hee-hee.mp3','gun.wav','giovanni-start.mp3','bruno-start.mp3','pac-pac-start.mp3','missione-compiuta.mp3','grido-battaglia.mp3','gameover.mp3']);
const audio=/\.(mp3|wav|ogg|m4a|aac|flac)$/i;
const tracks=fs.readdirSync(dir,{withFileTypes:true}).filter(x=>x.isFile()&&audio.test(x.name)&&!effects.has(x.name.toLowerCase())).map(x=>({file:x.name,title:x.name.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ')})).sort((a,b)=>a.title.localeCompare(b.title,'it'));
fs.writeFileSync(path.join(dir,'playlist.json'),JSON.stringify({version:1,generatedAt:new Date().toISOString(),tracks},null,2)+'\n');console.log(`Playlist: ${tracks.length} brani musicali; ${effects.size} effetti esclusi.`);
