from playwright.sync_api import sync_playwright
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import threading,glob,json,re
root=Path('/mnt/data/test220');rooms={}
class H(SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
 def cors(self,status=200):self.send_response(status);self.send_header('content-type','application/json');self.send_header('access-control-allow-origin','*');self.end_headers()
 def body(self):return json.loads(self.rfile.read(int(self.headers.get('content-length','0'))) or b'{}')
 def do_POST(self):
  if self.path=='/api/rooms':rooms['ABC234']={'offer':self.body()['offer'],'answer':None};self.cors(201);self.wfile.write(b'{"code":"ABC234"}')
  else:super().do_POST()
 def do_GET(self):
  if self.path=='/api/rooms/ABC234':self.cors();self.wfile.write(json.dumps(rooms['ABC234']).encode())
  else:super().do_GET()
 def do_PUT(self):
  if self.path=='/api/rooms/ABC234/answer':rooms['ABC234']['answer']=self.body()['answer'];self.cors();self.wfile.write(b'{"ok":true}')
  else:self.cors(404)
server=ThreadingHTTPServer(('127.0.0.1',0),partial(H,directory=str(root)));port=server.server_port
(root/'multiplayer-config.js').write_text(f"window.PAC_PAC_CONFIG={{signalingUrl:'http://127.0.0.1:{port}/api',iceServers:[]}};")
threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{port}'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=glob.glob('/opt/pw-browsers/chromium-*/chrome-linux64/chrome')[-1],args=['--no-sandbox']);h=b.new_context().new_page();g=b.new_context().new_page();errors=[]
 for x in [h,g]:x.on('pageerror',lambda e:errors.append(str(e)));x.goto(url);x.evaluate("settings.music=false;settings.sound=false;$('introSplash').click();openMultiplayer()")
 assert h.locator('#roomCreate').is_enabled();h.click('#roomCreate');h.wait_for_function("currentRoom==='ABC234'",timeout=20000);assert h.locator('#roomResult').inner_text()=='ABC234'
 g.fill('#roomJoinCode','abc234');assert g.locator('#roomJoinCode').input_value()=='ABC234';g.click('#roomJoin');g.wait_for_function("currentRoom==='ABC234'",timeout=20000)
 h.wait_for_function("net.dc.readyState==='open'",timeout=20000);g.wait_for_function("net.dc.readyState==='open'",timeout=20000);assert h.locator('#roomStart').is_enabled()
 print('PASS 6-character room create/join and automatic WebRTC offer/answer')
 h.click('#roomStart');g.wait_for_function('net.active&&game.players.length===2',timeout=10000);before=h.evaluate('net.remoteSeq');g.evaluate('requestDir(0)');h.wait_for_function('(n)=>net.remoteSeq>n',arg=before,timeout=10000)
 print('PASS room game start and guest control')
 # URL prefills room and manual fallback remains accessible.
 h.evaluate('mainMenu();history.replaceState(null,"","?room=abc234");openMultiplayer()');assert h.locator('#roomJoinCode').input_value()=='ABC234';h.evaluate("$('manualPair').click()");assert h.locator('#mpOffer').is_visible()
 print('PASS invite URL prefill and manual fallback')
 assert not errors,errors;print('PASS no JavaScript page errors');b.close()
server.shutdown()
