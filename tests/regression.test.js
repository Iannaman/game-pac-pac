const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const read=n=>fs.readFileSync(path.join(root,n),'utf8');
const checks={
'index loads arcade':'arcade-240.js','index loads retention':'retention-250.js','index loads social':'social-230.js','index loads guard':'regression-310.js',
'combo x1-x8':'MAX_MULTIPLIER=8','combo window':'COMBO_WINDOW=1.25','near miss':'NEAR_DISTANCE=.86','ghost chain':'CHAIN x',
'arcade grade':'grade-S','arcade run':'Arcade Run','missions':'Combo Master','records':'Record e medaglie','team combo':'TEAM COMBO',
'whatsapp':'wa.me/?text=','web share':'navigator.share','clipboard':'clipboard.writeText','qr download':'.svg'
};
const all=['index.html','arcade-240.js','arcade-240.css','retention-250.js','retention-250.css','social-230.js','social-230.css','regression-310.js'].map(read).join('\n');
let failed=0;for(const [name,needle] of Object.entries(checks)){const ok=all.includes(needle);console.log((ok?'PASS':'FAIL')+' '+name);if(!ok)failed++}if(failed)process.exit(1);
