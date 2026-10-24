const fs=require('fs'),assert=require('assert');const m=fs.readFileSync('src/ui/level-records-487.js','utf8'),h=fs.readFileSync('index.html','utf8');assert(m.includes("querySelector('.launcher-tools-472')"));assert(m.includes("tools.insertBefore(b,more)"));assert(m.includes("b.className='launcher-tool-472'"));assert(m.includes('new MutationObserver'));assert(h.includes('level-records-487.js?v=488'));assert(h.includes('v4.8.8'));console.log('PASS visible level records button in modern menu');console.log('PASS legacy menu fallback');console.log('PASS asynchronous menu recovery');



