(()=>{'use strict';let depth=0,box=null;
function ensure(){if(box)return box;box=document.createElement('div');box.id='loadingIndicator494';box.className='loading-indicator-494';box.setAttribute('role','status');box.setAttribute('aria-live','polite');box.setAttribute('aria-busy','true');box.innerHTML='<span class="loading-spinner-494" aria-hidden="true"></span><strong id="loadingText494">Caricamento giocoâ€¦</strong>';document.body.append(box);return box}
function show(text='Caricamentoâ€¦'){depth++;ensure();document.getElementById('loadingText494').textContent=text;box.hidden=false;box.setAttribute('aria-busy','true')}
function hide(){depth=Math.max(0,depth-1);if(!depth&&box){box.hidden=true;box.setAttribute('aria-busy','false')}}
function task(text,fn){show(text);return new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))).then(fn).finally(hide)}
show('Caricamento PAC PACâ€¦');if(document.readyState==='complete')setTimeout(hide,180);else addEventListener('load',()=>setTimeout(hide,180),{once:true});
window.PacPacLoading494={show,hide,task};
})();



