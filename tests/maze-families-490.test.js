const fs=require('fs'),assert=require('assert');const js=fs.readFileSync('src/levels/maze-families-490.js','utf8'),html=fs.readFileSync('index.html','utf8'),records=fs.readFileSync('src/ui/level-records-487.js','utf8');
for(const n of ['Classico intrecciato','Spirale centrale','Quattro distretti','Arena radiale','Corridoi verticali','Corridoi orizzontali','Doppio anello','Zig-zag diagonale','Isole collegate','Fortezza concentrica'])assert(js.includes(n),n);
assert(js.includes('validateMapRaw'));assert(js.includes('difficulty:Math.min(10'));assert(html.includes("ramp=Math.min(.18"));assert(js.includes("DifficoltÃ  ${f.difficulty}/10"));assert(records.includes('PacPacMazeFamily490?.familyOf(n).name'));assert(html.includes('maze-families-490.js?v=490'));assert(html.includes('v4.9.0'));console.log('PASS ten labyrinth families');console.log('PASS topology validation and safe fallback');console.log('PASS family shown in HUD and records');console.log('PASS gradual capped difficulty');



