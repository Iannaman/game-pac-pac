// Dependency-free logic checks. Run from the repository root: node tests/smoke.cjs
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/);
assert(script,'Inline game script missing');
new vm.Script(script[1]);
const context={assert,console,performance:{now:()=>100},navigator:{vibrate:()=>true},document:{getElementById:()=>({getContext:()=>({})}),addEventListener(){}},localStorage:{getItem:()=>null,setItem(){}}};
vm.createContext(context);
vm.runInContext(script[1].slice(0,script[1].indexOf('function tone(')),context);
vm.runInContext(`
assert.equal(settings.vibration,false);
for(let level=1;level<=1000;level++){
 const a=generateLevel(level);assert(validateMap(a).valid,'Disconnected map '+level);
 assert.equal(JSON.stringify(a),JSON.stringify(generateLevel(level)),'Non-deterministic map');
 assert.equal(a.flat().filter(v=>v===3).length,4);
}
let combos=0;
for(const skill of ['basic','normal','expert'])for(const style of ['classic','chase','ambush','team','patrol'])for(const speed of ['slower','equal','faster']){
 activeGhosts={skill,style,speed};
 assert(Math.abs(ghostNormalSpeed()/PLAYER_SPEED-({slower:.94,equal:1,faster:1.08}[speed]))<1e-10);
 game={map:generateLevel(3),elapsed:0,player:entity(SPAWN.x,SPAWN.y),power:0,mode:'chase'};
 state='playing';
 game.ghosts=[0,1,2,3].map(id=>({...entity(11,11),id,corner:[{x:21,y:1},{x:1,y:1},{x:21,y:21},{x:1,y:21}][id],state:'normal',observed:null,observeAt:0,reverse:false}));
 for(let i=0;i<300;i++){game.elapsed+=1/60;for(const g of game.ghosts){move(g,ghostNormalSpeed()/60,ghostChoice);assert(walk(game.map,Math.round(g.x),Math.round(g.y)));assert(Number.isFinite(g.x)&&Number.isFinite(g.y))}}
 for(const g of game.ghosts){g.x=g.y=1;g.moving=false;g.state='eyes';let steps=0;while((g.x!==HOME.x||g.y!==HOME.y)&&steps++<600)move(g,1,ghostChoice);assert.equal(g.x,HOME.x);assert.equal(g.y,HOME.y)}
 combos++;
}
assert.equal(combos,45);
console.log('PASS: JS syntax, 1000 connected deterministic maps, 45 AI/speed configurations, defeated ghosts return home');
`,context);
