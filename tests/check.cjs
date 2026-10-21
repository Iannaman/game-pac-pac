const fs=require('fs'),vm=require('vm');for(const f of ['mode-hub-260.js','level-engine-v2.js','dynamic-maze-280.js'])new vm.Script(fs.readFileSync(f,'utf8'));console.log('PASS syntax');
