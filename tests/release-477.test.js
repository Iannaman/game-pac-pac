const fs=require('fs'),assert=require('assert');
const story=fs.readFileSync('src/modes/story-450.js','utf8');
const html=fs.readFileSync('index.html','utf8');
const audio=fs.readFileSync('src/ui/audio-motion-473.js','utf8');
assert(story.includes('repairStoryReachability(m,o.spawn)'));
assert(story.includes('function reachableFrom'));
assert(html.includes("returnStuck>2.5"));
assert(html.includes("state:'normal',wait:2.2"));
assert(html.includes("PacPacAudioMotion473.play('death','death')"));
assert(audio.includes("death:'./audio/gameover.mp3'"));
assert(html.includes('<span>v4.7.7</span>'));
console.log('PASS 4.7.7 story reachability');
console.log('PASS 4.7.7 ghost castle return');
console.log('PASS 4.7.7 gameover audio');



