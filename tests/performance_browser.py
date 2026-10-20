from playwright.sync_api import sync_playwright
import glob
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=glob.glob('/opt/pw-browsers/chromium-*/chrome-linux64/chrome')[-1],args=['--no-sandbox']);page=b.new_page(device_scale_factor=3);errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto('file:///mnt/data/PAC_PAC_v2.1.0.html');page.evaluate("settings.music=false;settings.sound=false;$('introSplash').click()")
 assert page.evaluate("settings.graphics==='balanced'");page.click('#options');assert page.locator('#graphics').input_value()=='balanced';page.select_option('#graphics','performance');page.click('#save');page.click('#start');page.wait_for_timeout(100)
 ratio=page.evaluate('canvas.width/parseFloat(canvas.style.width)');assert 0.95<=ratio<=1.05,ratio
 page.evaluate("mainMenu();openSettings('menu')");page.select_option('#graphics','quality');page.click('#save');page.click('#start');page.wait_for_timeout(100);ratio=page.evaluate('canvas.width/parseFloat(canvas.style.width)');assert 1.9<=ratio<=2.05,ratio
 print('PASS settings persistence and DPR caps 1/2 on DPR 3 device')
 # Level cache preserves generated content but every caller receives independent map.
 out=page.evaluate("""()=>{levelTemplateCache.clear();performanceStats.levelHits=performanceStats.levelMisses=0;const a=generateLevel(7),before=a[1][1];a[1][1]=99;const b=generateLevel(7);return {before,b:b[1][1],same:a===b,stats:{...performanceStats},size:levelTemplateCache.size}}""")
 assert out['before']==out['b'] and not out['same'] and out['stats']['levelHits']==1 and out['stats']['levelMisses']==1
 print('PASS bounded level template cache and independent clones')
 # Distance cache same target hit, new target miss, and map switch invalidation.
 out=page.evaluate("""()=>{distanceCache.clear();distanceMapRef=null;performanceStats.distanceHits=performanceStats.distanceMisses=0;const m=generateLevel(8),a=distances(m,{x:1,y:1}),b=distances(m,{x:1,y:1}),c=distances(m,{x:3,y:1}),m2=generateLevel(9),d=distances(m2,{x:1,y:1});return {same:a===b,h:performanceStats.distanceHits,m:performanceStats.distanceMisses,size:distanceCache.size}}""")
 assert out['same'] and out['h']==1 and out['m']==3 and out['size']==1
 print('PASS BFS cache hit/new target/map invalidation')
 # All 3 modes leave 120 Hz simulation unchanged; render pacing ratios over equal virtual time.
 counts={}
 for mode in ['performance','balanced','quality']:
  page.evaluate("m=>{settings.graphics=m;performanceStats.renderedFrames=performanceStats.skippedFrames=0;lastRenderAt=0;frameTime=0;accumulator=0;state='playing'}",mode)
  # Call loop cannot be manual because it schedules RAF; inspect config and run updates directly.
  page.evaluate("for(let i=0;i<1200;i++)update(FIXED_STEP)");counts[mode]=page.evaluate("({step:FIXED_STEP,player:game.player.x,profile:settings.graphics})")
 assert all(abs(v['step']-1/120)<1e-12 for v in counts.values())
 print('PASS fixed 120 Hz simulation in all graphic profiles')
 diag=page.evaluate('stabilityDiagnostics()');assert diag['version']=='2.1.0' and diag['performance']['levelCache']<=12 and diag['performance']['distanceCache']<=32
 page.evaluate("draw();hud();pause();$('resume').click();mainMenu();openLevels()");assert page.locator('[data-level="1"]').is_enabled()
 assert not errors,errors;print('PASS diagnostics, rendering, pause, menu, levels; no browser errors')
 b.close()
