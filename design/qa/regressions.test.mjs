import test from 'node:test';
import assert from 'node:assert/strict';
import {application} from './app-fixture.mjs';
import * as ziyo from '../ziyo-site/model.js';
import * as orbita from '../orbita-site/model.js';
import * as meros from '../meros-site/model.js';
import {report} from '../hisob-site/model.js';

test('Ziyo correct → wrong answer removes stale next-step permission',async()=>{
  const app=await application(new URL('../ziyo-site/app.js',import.meta.url),ziyo);
  app.choose('1');app.submit();assert.equal(app.element('#next').hidden,false);
  app.choose('0');app.submit();assert.equal(app.element('#next').hidden,true);
  assert.equal(app.element('#feedback').dataset.result,'wrong');
  assert.match(app.element('#progress-label').textContent,/1 \/ 3/);
});

test('Orbita resume clears the inline pause left by visibility changes',async()=>{
  const app=await application(new URL('../orbita-site/app.js',import.meta.url),orbita);
  app.click('#motion-toggle');app.visibility(true);app.visibility(false);
  assert.equal(app.element('#satellite').style.animationPlayState,'paused');
  app.click('#motion-toggle');
  assert.equal(app.document.body.classList.contains('paused'),false);
  assert.notEqual(app.element('#satellite').style.animationPlayState,'paused');
});

for(const query of ["farg'ona",'FARG‘ONA','fargʻona','fargʼona','fargona','  Farg`ona  ']) {
  test('Hisob matches keyboard spelling '+JSON.stringify(query),()=>{
    assert.deepEqual(report(7,query).rows.map(p=>p.id),['fargona']);
  });
}

for(const storage of [{readThrows:true,writeThrows:true},{writeThrows:true},{values:{'ziyo-state-v1':'{broken'}},{values:{'ziyo-state-v1':'{"structure":true}'}}]) {
  test('Ziyo survives unavailable/corrupt storage '+JSON.stringify(storage),async()=>{
    const app=await application(new URL('../ziyo-site/app.js',import.meta.url),ziyo,storage);
    assert.match(app.element('#progress-label').textContent,/0 \/ 3/);
    app.choose('1');app.submit();app.submit();
    assert.match(app.element('#progress-label').textContent,/1 \/ 3/);
    assert.equal(app.element('#next').hidden,false);
  });
}

test('Ziyo cross-tab update sanitizes external progress without crashing',async()=>{
  const app=await application(new URL('../ziyo-site/app.js',import.meta.url),ziyo);
  app.external('ziyo-state-v1','["style","style","unknown"]');
  assert.match(app.element('#progress-label').textContent,/1 \/ 3/);
  app.external('ziyo-state-v1',null);
  assert.match(app.element('#progress-label').textContent,/0 \/ 3/);
});

test('Meros filtering keeps the permanent exhibit number',async()=>{
  const app=await application(new URL('../meros-site/app.js',import.meta.url),meros);
  const button=app.element('detail-filter');button.dataset.filter='detail';app.click('detail-filter');
  const markup=app.element('#exhibit-list').innerHTML;
  assert.match(markup,/class="exhibit-number">02<\/span>/);
  assert.doesNotMatch(markup,/class="exhibit-number">01<\/span>/);
});
