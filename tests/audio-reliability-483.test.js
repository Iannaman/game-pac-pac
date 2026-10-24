const fs=require('fs'),assert=require('assert');const html=fs.readFileSync('index.html','utf8'),motion=fs.readFileSync('src/ui/audio-motion-473.js','utf8'),chase=fs.readFileSync('src/modes/story-chase-474.js','utf8');
assert(html.includes("settings.musicSource==='project'&&!projectMusicFailed"));
assert(html.includes("settings.musicSource==='file'&&musicFile&&!musicFileFailed"));
assert(html.includes('function effectFallback(path)'));
assert(html.includes('failedEffectPaths.has(path)){effectFallback(path);return'));
assert(html.includes("typeof window.PacPacAudioMotion473?.play==='function'"));
assert(chase.includes("typeof window.PacPacAudioMotion473?.play==='function'"));
assert(motion.includes('Object.assign(window.PacPacAudioMotion473||{}'));
assert(html.includes('audio-motion-473.js?v=483'));
assert(html.includes('audio-visualizer-478.js?v=486'));
assert(html.includes('v4.8.6'));
console.log('PASS 4.8.3 project music fallback');console.log('PASS 4.8.3 personal music fallback');console.log('PASS 4.8.3 gameplay effect fallback');console.log('PASS 4.8.3 safe optional audio API');



