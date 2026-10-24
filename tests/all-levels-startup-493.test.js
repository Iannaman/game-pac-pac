const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8'),mod=fs.readFileSync('src/levels/maze-families-490.js','utf8');
function pick(start,end){const a=html.indexOf(start),b=html.indexOf(end,a);assert(a>=0&&b>a,start);return html.slice(a,b)}
const core=`const N=23,T=30,DIRS=[[0,-1],[1,0],[0,1],[-1,0]],HOME={x:11,y:11},SPAWN={x:11,y:21};\n`+pick('function seeded(','function nearest(');
const sandbox={console,window:{},document:{getElementById:()=>null},game:null,Math,Map,Int16Array};sandbox.window=sandbox;sandbox.loadLevel=()=>{};sandbox.hudSolo=()=>{};sandbox.spawnActors=()=>{};vm.createContext(sandbox);vm.runInContext(core,sandbox);vm.runInContext(mod,sandbox);
let counts=Array(10).fill(0);for(let level=1;level<=100;level++){const map=sandbox.generateLevel(level);assert(Array.isArray(map)&&map.length===23,`shape L${level}`);assert(map.every(r=>Array.isArray(r)&&r.length===23),`rows L${level}`);const check=sandbox.validateMapRaw(map);assert(check.valid,`invalid L${level}: ${JSON.stringify(check)}`);assert(map[21][11]!==1,`spawn L${level}`);assert(map[11][11]!==1,`home L${level}`);counts[sandbox.PacPacMazeFamily490.familyOf(level).index]++}assert(counts.every(x=>x===10),counts);console.log('PASS levels 1-100 generate and validate');console.log('PASS player spawn and ghost home levels 1-100');console.log('PASS ten complete family cycles');



