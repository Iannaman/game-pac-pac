const fs=require('fs'),assert=require('assert');const html=fs.readFileSync('index.html','utf8'),viz=fs.readFileSync('src/ui/audio-visualizer-478.js','utf8'),campaign=fs.readFileSync('src/ui/campaign-ui.js','utf8');
assert(viz.includes("if(location.protocol==='file:')return ok"));
assert(viz.indexOf("if(location.protocol==='file:')return ok")<viz.indexOf("attachMediaElement(audio,projectMusic)"));
assert(campaign.includes("const back=$('modeBack');if(back)back.onclick=mainMenu"));
assert(html.includes('campaign-ui.js?v=486'));
assert(html.includes('audio-visualizer-478.js?v=486'));
assert(html.includes('v4.8.6'));
console.log('PASS 4.8.6 file protocol never routes media through Web Audio');
console.log('PASS 4.8.6 campaign null guard');
console.log('PASS 4.8.6 cache bust fixed modules');



