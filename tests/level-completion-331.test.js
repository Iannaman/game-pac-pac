const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const world=fs.readFileSync(path.join(root,'legacy-320.js'),'utf8');
const checks={
 'collectible counter helper':'function countCollectibles',
 'counter synchronization helper':'function syncRemaining',
 'clear uses real map count':'if(syncRemaining()<=0)',
 'dynamic configure synchronizes':'syncRemaining();game.initial=game.remaining',
 'automatic passage synchronizes':"if(typeof syncRemaining==='function')syncRemaining()",
 'diagnostic version 4.7.4':"version:'4.7.4'"
};
let bad=0;for(const [name,needle] of Object.entries(checks)){const ok=(index+'\n'+world).includes(needle);console.log((ok?'PASS':'FAIL')+' '+name);bad+=!ok}process.exit(bad?1:0);
