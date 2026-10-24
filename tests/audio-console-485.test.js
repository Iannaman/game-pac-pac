const fs=require('fs'),assert=require('assert'),html=fs.readFileSync('index.html','utf8');
for(const item of ['[PAC PAC AUDIO]','project-created','project-metadata','project-canplay','project-play-request','project-playing','project-play-rejected','project-error','visualizer-link','PacPacAudioDiagnostics'])assert(html.includes(item),item);
assert(html.includes('v4.8.6'));
console.log('PASS 4.8.5 structured audio console log');
console.log('PASS 4.8.5 downloadable diagnostics object');
