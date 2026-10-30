// Dependency-free preview server. Bind only to this computer.
import http from 'node:http';
import {readFile,stat,realpath} from 'node:fs/promises';
import {resolve,relative,extname,sep,isAbsolute} from 'node:path';
import {fileURLToPath} from 'node:url';
const folder = fileURLToPath(new URL('.',import.meta.url));
const kit = JSON.parse(await readFile(resolve(folder,'kit.json'),'utf8'));
const root = await realpath(resolve(folder,kit.serve_root));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.md':'text/plain; charset=utf-8'};
const port = Number(process.env.PORT || 8080);
const server = http.createServer(async(req,res)=>{
  try{
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end('Method not allowed');return;}
    let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(path.split(/[\\/]/).some(part=>part.startsWith('.')||part==='node_modules')||path.includes(':')){res.writeHead(403);res.end('Forbidden');return;}
    if(path==='/')path='/'+kit.entry;
    let target=resolve(root,'.'+path);
    let rel=relative(root,target);
    if(rel==='..'||rel.startsWith('..'+sep)||resolve(target)===resolve(root)&&path!=='/'){res.writeHead(403);res.end('Forbidden');return;}
    if((await stat(target)).isDirectory())target=resolve(target,'index.html');
    target=await realpath(target);rel=relative(root,target);
    if(rel==='..'||rel.startsWith('..'+sep)||isAbsolute(rel)){res.writeHead(403);res.end('Forbidden');return;}
    const bytes=await readFile(target);
    res.writeHead(200,{'Content-Type':mime[extname(target)]||'application/octet-stream','Content-Length':bytes.length,'Cache-Control':'no-store'});
    res.end(req.method==='HEAD'?undefined:bytes);
  }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?`Port ${port} band. Boshqa PORT qiymatini tanlang.`:error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`${kit.name}: http://127.0.0.1:${port}/ — Ctrl+C to stop`));
