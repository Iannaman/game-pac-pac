from playwright.sync_api import sync_playwright
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
import threading,glob,json
from pathlib import Path
import os
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(Path(__file__).resolve().parents[1])))
threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{server.server_port}'
with sync_playwright() as p:
 b=p.chromium.launch(**({'executable_path':os.environ['CHROMIUM_PATH']} if os.environ.get('CHROMIUM_PATH') else {}),args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
 a=b.new_context().new_page();g=b.new_context().new_page();errors=[]
 for page in [a,g]:
  page.on('pageerror',lambda e:errors.append(str(e)));page.goto(url);page.evaluate("settings.music=false;settings.sound=false;$('introSplash').click();")
 # Levels and single player regression
 a.evaluate('openLevels()');assert a.locator('[data-level="1"]').is_enabled();assert a.locator('[data-level="2"]').is_disabled()
 a.evaluate('unlockLevel(1);openLevels()');assert a.locator('[data-level="2"]').is_enabled();a.evaluate('mainMenu();startGame();game.remaining=0;clearLevel()');assert a.evaluate('progress.completed.includes(1)');a.reload();a.evaluate("settings.music=false;settings.sound=false;$('introSplash').click();");assert a.evaluate('progress.max')==2
 print('PASS levels: initial locks, unlock, single-player completion, persistence')
 for page in [a,g]:page.evaluate('openMultiplayer()')
 a.evaluate("$('mpOffer').click()");a.wait_for_function("$('mpLocal').value.length>0",timeout=20000);offer=a.locator('#mpLocal').input_value()
 g.locator('#mpRemote').fill(offer);g.evaluate("$('mpAnswer').click()");g.wait_for_function("$('mpLocal').value.length>0",timeout=20000);answer=g.locator('#mpLocal').input_value()
 a.locator('#mpRemote').fill(answer);a.evaluate("$('mpAccept').click()");a.wait_for_function("net.dc.readyState==='open'",timeout=20000);g.wait_for_function("net.dc.readyState==='open'",timeout=20000)
 a.evaluate("$('mpStart').click()");g.wait_for_function("net.active&&game.players.length===2",timeout=10000)
 print('PASS real WebRTC connection between two isolated browser contexts')
 # Stop ghosts and countdown for deterministic movement test.
 a.evaluate("state='playing';game.ghosts=[];game.players.forEach(p=>p.invuln=999);sendSnapshot()")
 g.wait_for_function("state==='playing'");g.evaluate('requestDir(0)');a.wait_for_function('game.players[1].y<20.8');g.wait_for_function('game.players[1].y<20.8')
 print('PASS guest input -> host movement -> guest snapshot')
 g.evaluate('shoot()');a.wait_for_function('game.players[1].ammo===5');g.wait_for_function('game.players[1].ammo===5')
 print('PASS guest fire, host ammo validation and replication')
 g.evaluate('pause()');a.wait_for_function("net.paused&&state==='paused'");g.wait_for_function("net.paused&&state==='paused'");a.evaluate("$('netResume').click()");g.wait_for_function("!net.paused&&state==='playing'")
 print('PASS guest pause and host resume synchronized')
 # Coop result and both browsers unlock.
 a.evaluate("game.players[0].points=100;game.players[1].points=200;finishNetwork(true)");g.wait_for_function('net.result!==null');assert g.evaluate('progress.max')==2
 a.evaluate("$('netNext').click()");g.wait_for_function("game.level===2&&net.result===null");assert g.locator('#modal').evaluate("e=>e.classList.contains('hidden')")
 print('PASS coop result, both progress saves and next round without reconnect')
 # Competitive rule unit tests on live connection.
 a.evaluate("net.mode='versus';startNetworkRound(1);state='playing';game.ghosts=[];game.players[1].points=200;game.players[1].invuln=0;networkHit(1,true)");assert a.evaluate('game.players[1].points')==150
 a.evaluate("game.players[0].points=500;game.players[1].points=100;game.elapsed=180;updateNetwork(1/120)");g.wait_for_function("net.result==='Vince Giovanni!'");assert a.evaluate("net.result==='Vince Giovanni!'")
 print('PASS versus hit penalty, timer and winner replicated')
 a.evaluate('mainMenu()');g.wait_for_function("state==='networkLost'");print('PASS disconnect screen')
 assert not errors,errors
 print('PASS no JavaScript page errors')
 b.close()
server.shutdown()
