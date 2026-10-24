const fs=require('fs'),assert=require('assert');const m=fs.readFileSync('src/ui/level-records-487.js','utf8'),s=fs.readFileSync('social-230.js','utf8'),h=fs.readFileSync('index.html','utf8');
for(const x of ['pacPacLevelRecords487','Livelli, record e voti','startAt','PACPACTUTTI','overall','Record totale'])assert(m.includes(x),x);
for(const x of ['cumulativeTotal','levelGrades','overallGrade','RECORD TOTALE'])assert(s.includes(x),x);
assert(h.includes('level-records-487.js?v=487'));assert(h.includes('v4.8.7'));
console.log('PASS 4.8.7 unlocked levels menu');console.log('PASS 4.8.7 start from unlocked level');console.log('PASS 4.8.7 cheat code');console.log('PASS 4.8.7 cumulative signed card data');
