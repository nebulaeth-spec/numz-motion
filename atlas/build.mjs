import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const localDeps=process.env.ATLAS_NODE_MODULES;
const {build}=await import(localDeps?pathToFileURL(path.join(localDeps,'esbuild/lib/main.js')).href:'esbuild');
const result=await build({absWorkingDir:root,entryPoints:['src/App.tsx'],bundle:true,format:'iife',platform:'browser',target:['es2020'],jsx:'automatic',minify:true,write:false,loader:{'.css':'text'},nodePaths:localDeps?[localDeps]:[],define:{'process.env.NODE_ENV':'"production"'},metafile:true,legalComments:'eof'});
if(Object.values(result.metafile.outputs).flatMap(x=>x.imports).some(x=>x.external))throw Error('External runtime dependency');
await fs.writeFile(path.join(root,'app.js'),result.outputFiles[0].text);
const notices=new Map();
for(const input of Object.keys(result.metafile.inputs)){
 if(!input.includes('node_modules'))continue;
 let dir=path.dirname(path.resolve(root,input));
 while(dir!==path.dirname(dir)){
  try{const pkg=JSON.parse(await fs.readFile(path.join(dir,'package.json'),'utf8'));if(pkg.name){if(!notices.has(pkg.name)){const names=await fs.readdir(dir);const file=names.find(n=>/^licen[sc]e(\.|$)/i.test(n));if(file)notices.set(pkg.name,pkg.name+' '+pkg.version+'\n'+await fs.readFile(path.join(dir,file),'utf8'));}break}}catch{}
  dir=path.dirname(dir);
 }
}
await fs.writeFile(path.join(root,'LIBRARY_NOTICES.txt'),[...notices.values()].join('\n\n========================================\n\n'));
await fs.writeFile(path.join(root,'build-receipt.json'),JSON.stringify({bytes:result.outputFiles[0].contents.length,externalImports:0,inputs:Object.keys(result.metafile.inputs).filter(x=>!x.includes('node_modules')),reference:'numz-motion@b6301fb0a05a5191c0961c6eda380733f18b5d9e',cases:8},null,2));
console.log('Built eight-case atlas with no external runtime imports.');
