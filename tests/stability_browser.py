from playwright.sync_api import sync_playwright
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
import threading,glob
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory='/mnt/data/test201'))
threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{server.server_port}'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=glob.glob('/opt/pw-browsers/chromium-*/chrome-linux64/chrome')[-1],args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
 host=b.new_context().new_page();guest=b.new_context().new_page();errors=[]
 for page in [host,guest]:
  page.on('pageerror',lambda e:errors.append(str(e)));page.goto(url);page.evaluate("settings.music=false;settings.sound=false;$('introSplash').click();openMultiplayer()")
 host.evaluate("$('mpOffer').click()");host.wait_for_function("$('mpLocal').value.length>0",timeout=20000);offer=host.locator('#mpLocal').input_value()
 guest.locator('#mpRemote').fill(offer);guest.evaluate("$('mpAnswer').click()");guest.wait_for_function("$('mpLocal').value.length>0",timeout=20000);answer=guest.locator('#mpLocal').input_value()
 host.locator('#mpRemote').fill(answer);host.evaluate("$('mpAccept').click()");host.wait_for_function("net.dc.readyState==='open'",timeout=20000);guest.wait_for_function("net.dc.readyState==='open'",timeout=20000)
 host.evaluate("$('mpStart').click()");guest.wait_for_function('net.active',timeout=10000)
 host.wait_for_timeout(2600);guest.wait_for_timeout(300)
 assert host.evaluate('net.rtt>=0&&performance.now()-net.lastSeen<4500');assert guest.evaluate('performance.now()-net.lastSeen<4500')
 print('PASS WebRTC heartbeat/pong and connection freshness')
 # Invalid and excessive messages do not mutate remote sequence beyond valid input.
 before=host.evaluate('net.remoteSeq');guest.evaluate("net.dc.send(JSON.stringify({type:'input',seq:'bad',dir:99,fire:'yes'}));net.dc.send(JSON.stringify({type:'unknown',payload:'x'}))");host.wait_for_timeout(100);assert host.evaluate('net.remoteSeq')==before
 print('PASS invalid message rejection')
 # Backpressure guard.
 assert host.evaluate("Object.defineProperty(net.dc,'bufferedAmount',{value:200000,configurable:true});const n=net.backpressure||0;const ok=netSend({type:'ping',at:performance.now()});!ok&&net.backpressure===n+1")
 print('PASS backpressure drop accounting')
 # Fixed step diagnostics and solo regression.
 host.evaluate('mainMenu();startGame();state="playing";for(let i=0;i<1000;i++)update(FIXED_STEP);draw();hud()');d=host.evaluate('stabilityDiagnostics()');assert d['version']=='2.0.1' and d['fixedStepHz']==120
 host.evaluate('pause();$("resume").click();mainMenu();openLevels()');assert host.locator('[data-level="1"]').is_enabled()
 print('PASS 1000 fixed updates, rendering, pause/menu/levels and diagnostics')
 assert not errors,errors;print('PASS no JavaScript page errors')
 b.close()
server.shutdown()
