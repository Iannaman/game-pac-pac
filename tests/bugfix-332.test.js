const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');const index=fs.readFileSync(path.join(root,'index.html'),'utf8'),legacy=fs.readFileSync(path.join(root,'legacy-320.js'),'utf8'),all=index+'\n'+legacy;const checks={
'no visible Arcade 3.3.0':!all.includes('ARCADE 3.3.0')&&!all.includes('Arcade 3.3.0'),
'visible Arcade 4.7.0':all.includes('v4.7.0'),
'explicit editor save button':all.includes('id="edSave"'),
'editor save binding':all.includes("$('edSave').onclick"),
'editor save error handling':all.includes('Editor save failed'),
'level completion map sync':all.includes('if(syncRemaining()<=0)'),
'dynamic configure sync':all.includes('syncRemaining();game.initial=game.remaining'),
'fire door sync':all.includes("c.open=true;if(typeof syncRemaining==='function')syncRemaining()")};let bad=0;for(const[k,v]of Object.entries(checks)){console.log((v?'PASS':'FAIL')+' '+k);bad+=!v}process.exit(bad?1:0);
