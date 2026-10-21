(()=>{'use strict';
const REQUIRED={core:['startGame','loadLevel','consume','eatGhost','die','update','hud','clearLevel','gameOver','showModal'],arcade:['PacPacArcade240'],retention:['PacPacRetention250'],social:['PacPacSocial230']};
function audit(){const missing=[];for(const [group,names] of Object.entries(REQUIRED))for(const name of names)if(typeof window[name]==='undefined')missing.push(group+':'+name);const result={version:'3.1.0',baseline:'2.5.1',ok:missing.length===0,missing,checkedAt:new Date().toISOString()};window.PAC_PAC_REGRESSION=result;if(missing.length)console.error('[PAC PAC regression guard]',result);return result}
window.PacPacRegression310={audit,required:REQUIRED};addEventListener('load',()=>queueMicrotask(audit),{once:true});
})();
// Complete gate: tests/feature-contract.test.js
