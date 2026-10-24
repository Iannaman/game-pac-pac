'use strict';const fs=require('fs'),path=require('path'),dir=path.join(__dirname,'music'),start='smoot-criminal.mp3',audio=/\.(mp3|wav|ogg|m4a|aac|flac)$/i;
const names=fs.readdirSync(dir,{withFileTypes:true}).filter(x=>x.isFile()&&audio.test(x.name)).map(x=>x.name);
if(!names.some(x=>x.toLowerCase()===start))console.warn(`ATTENZIONE: manca music/${start}`);
names.sort((a,b)=>a.localeCompare(b,'it',{sensitivity:'base'}));const first=names.findIndex(x=>x.toLowerCase()===start);if(first>0)names.unshift(names.splice(first,1)[0]);
const tracks=names.map(file=>({file,title:file.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ')}));fs.writeFileSync(path.join(dir,'playlist.json'),JSON.stringify({version:1,start,generatedAt:new Date().toISOString(),tracks},null,2)+'\n');console.log(`Playlist music: ${tracks.length} brani; primo: ${tracks[0]?.file||'nessuno'}.`);
