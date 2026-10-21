const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');const required={
'arcade-240-restored.js':['PacPacArcade240','addCombo','breakCombo','nearMiss','ghostChain','nearMisses'],
'historical-retention-281.js':['arcadeRun','arcadeRecords','storeLevel','level-stars'],
'mode-hub-260.js':['coop','versus','hunt','editor'],
'level-engine-v2.js':['PacPacLevelEngineV2'],
'dynamic-maze-280.js':['PacPacDynamicMaze280'],
'level-editor-290.js':['PacPacLevelEditor290','edUndo','edRedo','checksum'],
'hunt-300.js':['PacPacHunt300','runner-giovanni','ghost-orange','safeInput']};
for(const[f,marks]of Object.entries(required)){assert(fs.existsSync(f),f);const s=fs.readFileSync(f,'utf8');new vm.Script(s);for(const m of marks)assert(s.includes(m),`${f}: ${m}`)}const h=fs.readFileSync('index.html','utf8');for(const f of Object.keys(required))assert(h.includes(f),`index: ${f}`);for(const id of ['arcadeComboBox','comboValue','nearMissValue','ghostChainValue'])assert(fs.readFileSync('arcade-240-restored.js','utf8').includes(id),id);console.log('PASS complete feature contract: legacy through 3.0.1');
