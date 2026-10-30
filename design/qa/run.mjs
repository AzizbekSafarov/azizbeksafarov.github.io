import {readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../../',import.meta.url));
const folders=['assets/hq','design/qa',...['forma','samar','orbita','nashr','meros','ziyo','hisob','si'].map(s=>'design/'+s+'-site'),'design/material-expressive/src','zaxira/skelet'];
const files=folders.flatMap(folder=>readdirSync(path.join(root,folder)).filter(f=>/\.test\.(mjs|js)$/.test(f)).map(f=>folder+'/'+f));
const result=spawnSync(process.execPath,['--test',...files],{cwd:root,stdio:'inherit'});
process.exit(result.status??1);
