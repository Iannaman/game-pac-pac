const fs=require('fs'),assert=require('assert');const js=fs.readFileSync('src/ui/audio-visualizer-478.js','utf8'),css=fs.readFileSync('ui-470.css','utf8'),html=fs.readFileSync('index.html','utf8');assert(js.includes('createAnalyser'));assert(js.includes("pointer-events:none")||css.includes('pointer-events:none'));assert(js.includes('prefers-reduced-motion'));assert(html.includes('audio-visualizer-478.js'));assert(html.includes('v4.7.9'));console.log('PASS 4.7.8 audio visualizer');



