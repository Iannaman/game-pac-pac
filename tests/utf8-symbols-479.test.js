const fs=require('fs'),path=require('path'),assert=require('assert');const root=path.resolve(__dirname,'..'),ext=/\.(html|js|css|md|txt|json)$/;let bad=[];function scan(d){for(const n of fs.readdirSync(d)){const p=path.join(d,n),s=fs.statSync(p);if(s.isDirectory())scan(p);else if(ext.test(n)&&n!=='utf8-symbols-479.test.js'){const t=fs.readFileSync(p,'utf8');if(/[ÃƒÆ’Ãƒâ€šÃƒÂ¢]|ÃƒÂ°Ã…Â¸|Ã¯Â¿Â½|ÃˆÃ¢â€žÂ¢/.test(t))bad.push(path.relative(root,p));}}}scan(root);assert.deepStrictEqual(bad,[]);const index=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const symbol of ['â†‘','â†’','â†“','â†','â–²','â—€','â–¶','â–¼','âœ“','â˜…','âš¡','ðŸŒˆ','ðŸš€','ðŸ”¥','ðŸ’Ž'])assert(index.includes(symbol),symbol);console.log('PASS 4.7.9 UTF-8 symbols');



