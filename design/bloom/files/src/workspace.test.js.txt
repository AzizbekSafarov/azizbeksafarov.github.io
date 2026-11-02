import test from 'node:test';
import assert from 'node:assert/strict';
import {readRoute,routeHash} from './routes.js';
import {initialProjects,updateProjectDetails} from './model.js';

test('project link preserves origin view and Unicode/escaped IDs',()=>{
 for(const id of ['kasb','o‘z loyiha','a/b?x=#','<tag>'])assert.deepEqual(readRoute(routeHash('saved',id)),{view:'saved',projectId:id,invalid:false});
 assert.deepEqual(readRoute('#done'),{view:'done',projectId:null,invalid:false});
 assert.equal(readRoute('#all/%ZZ').invalid,true);
 assert.equal(readRoute('#not-a-route').invalid,true);
 assert.equal(readRoute('#main').view,'all');
});
test('editing details preserves identity, completed tasks and original data',()=>{
 const original=structuredClone(initialProjects[0]);
 const next=updateProjectDetails(original,{title:'  Yangi nom  ',description:'Izoh',tasks:['Bir','Ikki','Uch']});
 assert.equal(next.title,'Yangi nom');assert.equal(next.id,original.id);assert.equal(next.tasks[0].done,true);
 assert.equal(next.category,original.category);assert.equal(next.saved,original.saved);
 assert.deepEqual(original,initialProjects[0]);
});
test('blank or oversized edits cannot replace a valid project',()=>{
 const draft={title:'Nom',description:'',tasks:['Bir','Ikki','Uch']};
 for(const bad of [{...draft,title:' '},{...draft,title:'x'.repeat(81)},{...draft,description:'x'.repeat(201)},{...draft,tasks:['Bir',' ','Uch']},{...draft,tasks:['Bir']},{...draft,tasks:[null,'Ikki','Uch']}])assert.throws(()=>updateProjectDetails(initialProjects[0],bad));
});
