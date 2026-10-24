(()=>{'use strict';
const colors={Vespera:['#7d42da','#ff82d2'],Glacia:['#3aa9ff','#dffaff'],Morvella:['#9d3a8f','#ffb15c'],'Le Tre Castellane':['#6940bc','#ff8ccf'],Dracula:['#8d132d','#ffdf77'],'Caos di Roma':['#d94092','#62efff'],'Arena Spettrale':['#426cff','#d9f7ff'],'Custode della Cupola':['#bf8b22','#fff0a3']};
function emblem(c,x,y,t,name){const q=colors[name]||colors.Dracula;c.save();c.translate(x,y);c.shadowBlur=t*.28;c.shadowColor=q[1];const g=c.createRadialGradient(-t*.12,-t*.2,t*.04,0,0,t*.58);g.addColorStop(0,q[1]);g.addColorStop(.24,q[0]);g.addColorStop(1,'#090813');c.fillStyle=g;c.beginPath();c.arc(0,0,t*.5,0,Math.PI*2);c.fill();c.shadowBlur=0;c.strokeStyle=q[1];c.lineWidth=Math.max(2,t*.07);c.beginPath();c.moveTo(-t*.42,-t*.32);c.lineTo(-t*.15,-t*.62);c.lineTo(0,-t*.4);c.lineTo(t*.15,-t*.62);c.lineTo(t*.42,-t*.32);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(-t*.16,-t*.05,t*.08,0,Math.PI*2);c.arc(t*.16,-t*.05,t*.08,0,Math.PI*2);c.fill();c.fillStyle='#1a0b22';c.beginPath();c.arc(-t*.16,-t*.05,t*.035,0,Math.PI*2);c.arc(t*.16,-t*.05,t*.035,0,Math.PI*2);c.fill();c.strokeStyle=q[1];c.beginPath();c.moveTo(-t*.18,t*.2);c.quadraticCurveTo(0,t*.34,t*.18,t*.2);c.stroke();c.restore()}
window.PacPacBossFallback481={emblem};
})();



