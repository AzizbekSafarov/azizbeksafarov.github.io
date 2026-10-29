// Verify the original downloaded snapshot before editing. No network or packages.
import {readFile,realpath,readdir} from 'node:fs/promises';
import {resolve,relative,isAbsolute,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=await realpath(fileURLToPath(new URL('.',import.meta.url)));
try {
 const manifest=JSON.parse(await readFile(resolve(root,'PACKAGE-MANIFEST.json'),'utf8'));
 if(manifest.schema_version!==1||!Array.isArray(manifest.files)||!manifest.files.length)throw Error('Unsupported or empty package manifest');
 const seen=new Set();
 for(const entry of manifest.files){
  if(typeof entry.path!=='string'||!entry.path||entry.path==='PACKAGE-MANIFEST.json'||entry.path.includes('\\')||isAbsolute(entry.path)||entry.path.split('/').includes('..')||seen.has(entry.path.toLowerCase()))throw Error('Invalid or duplicate package path');
  if(!Number.isSafeInteger(entry.bytes)||entry.bytes<0||!/^[a-f0-9]{64}$/.test(entry.sha256))throw Error('Invalid package hash record');
  seen.add(entry.path.toLowerCase());
  const file=await realpath(resolve(root,entry.path)),rel=relative(root,file);
  if(rel==='..'||rel.startsWith('..'+sep)||isAbsolute(rel))throw Error('Package path escapes root');
  const bytes=await readFile(file);
  if(bytes.length!==entry.bytes||createHash('sha256').update(bytes).digest('hex')!==entry.sha256)throw Error('Missing, changed or damaged file: '+entry.path);
 }
 // Extracting over an old folder can leave unrelated instructions or code behind.
 // This command checks the pristine download, before installing or editing it.
 async function inventory(directory, prefix='') {
  for(const entry of await readdir(directory,{withFileTypes:true})) {
   const name=prefix+entry.name;
   if(entry.isSymbolicLink())throw Error('Linked entry is not part of the original package: '+name);
   if(entry.isDirectory()){await inventory(resolve(directory,entry.name),name+'/');continue;}
   if(!entry.isFile()||name!=='PACKAGE-MANIFEST.json'&&!seen.has(name.toLowerCase()))throw Error('Unexpected file in package folder: '+name);
  }
 }
 await inventory(root);
 console.log(`PASS: ${manifest.files.length} original package files match SHA-256. No network used.`);
} catch(error) {
 console.error('Package verification failed:',error.message);
 console.error('Verify a fresh, empty-folder extraction before edits or npm install. Preserve existing work; do not delete it to make this check pass.');
 process.exitCode=1;
}
