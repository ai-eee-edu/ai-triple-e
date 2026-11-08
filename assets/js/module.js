/* Phase 2: teacher-facing, bilingual RCTC guided form. Provisional instructional text pending final approved toolkit comparison. */
(function(){
 'use strict';
 const search=new URLSearchParams(location.search);
 const pageModule=location.pathname.split('/').pop().replace(/\.html$/i,'');
 const mod=getModule(search.get('module')||search.get('template')||(['plan','design','facilitate','assess'].includes(pageModule)?pageModule:'plan'));
 const legacyTask=window.AITripleELegacy?.[search.get('module')||search.get('template')]?.task;
 const $=id=>document.getElementById(id);
 const txt=(bn,en)=>lang==='bn'?bn:en;
 const tr={
  grade:['শ্রেণি','Class / Grade'],subject:['বিষয়','Subject'],topic:['পাঠ বা বিষয়','Lesson or topic'],
  outcome:['শিখনফল','Learning outcome'],students:['শিক্ষার্থী সংখ্যা','Number of students'],
  minutes:['পাঠের সময়','Lesson duration'],task:['কী তৈরি করতে চান?','What do you need?'],
  resources:['আপনার কাছে কোন উপকরণ আছে?','Available classroom resources'],internet:['ইন্টারনেট সুবিধা','Internet access'],
  printing:['প্রিন্ট সুবিধা','Printing facility'],prior:['শিক্ষার্থীদের পূর্বজ্ঞান','Previous knowledge'],
  constraints:['অন্যান্য শর্ত ও শিখন-সহায়তা','Other constraints and broad learning needs'],
  notes:['অতিরিক্ত নির্দেশনা','Additional directions'],outputLanguage:['AI উত্তরের ভাষা','AI response language'],
  outputFormat:['আউটপুটের ধরন','Output format'],textbookRef:['পাঠ্যবই / অধ্যায় (ঐচ্ছিক)','Textbook / chapter (optional)'],
  grouping:['অংশগ্রহণের ধরন','Student participation'],prepTime:['প্রস্তুতির জন্য সময়','Preparation time'],
  classSpace:['শ্রেণিকক্ষের জায়গা','Classroom space'],taskMinutes:['নির্বাচিত কাজের সময় (ঐচ্ছিক)','Task time in minutes (optional)'],
  instructionLanguage:['শ্রেণিকক্ষে ব্যবহৃত ভাষা','Classroom language']
 };
 const labelMap={grade:'label-grade',subject:'label-subject',topic:'label-topic',outcome:'label-outcome',students:'label-students',
  minutes:'label-minutes',task:'label-task',resources:'label-resources',internet:'label-internet',printing:'label-printing',
  prior:'label-prior',constraints:'label-constraints',notes:'label-notes',outputLanguage:'label-output-language',
  outputFormat:'label-output-format',textbookRef:'label-textbook-ref',grouping:'label-grouping',
  prepTime:'label-prep-time',classSpace:'label-class-space',taskMinutes:'label-task-minutes',instructionLanguage:'label-instruction-language'};
 const gradeOptions=[['1','প্রথম শ্রেণি','Class 1'],['2','দ্বিতীয় শ্রেণি','Class 2'],['3','তৃতীয় শ্রেণি','Class 3'],['4','চতুর্থ শ্রেণি','Class 4'],['5','পঞ্চম শ্রেণি','Class 5']];
 const optionSets={
  minutes:[['20','২০ মিনিট','20 minutes'],['30','৩০ মিনিট','30 minutes'],['35','৩৫ মিনিট','35 minutes'],['40','৪০ মিনিট','40 minutes'],['45','৪৫ মিনিট','45 minutes'],['60','৬০ মিনিট','60 minutes']],
  internet:[['none','ক্লাসে ইন্টারনেট নেই','No internet in class'],['teacher','শুধু শিক্ষকের ডিভাইসে','Only teacher device'],['available','ক্লাসে ব্যবহার করা যায়','Available in class']],
  printing:[['no','প্রিন্ট সম্ভব নয়','No printer'],['yes','প্রিন্ট সম্ভব','Printing available']],
  grouping:[['flexible','পরিস্থিতি অনুযায়ী','As appropriate'],['individual','একক কাজ','Individual work'],['pairs','জোড়ায়','Pairs'],['groups','দলগত','Small groups'],['whole','সমগ্র শ্রেণি','Whole class']],
  'prep-time':[['unspecified','নির্দিষ্ট নয়','Not specified'],['10','১০ মিনিটের কম','Under 10 minutes'],['20','১০–২০ মিনিট','10–20 minutes'],['30','২০ মিনিটের বেশি','Over 20 minutes'],['none','অতিরিক্ত সময় নেই','No extra preparation']],
  'class-space':[['unspecified','নির্দিষ্ট নয়','Not specified'],['limited','সীমিত জায়গা','Limited space'],['normal','সাধারণ শ্রেণিকক্ষ','Ordinary classroom'],['flexible','বসার ব্যবস্থা বদলানো সম্ভব','Flexible seating']],
  'instruction-language':[['Bangla','বাংলা','Bangla'],['English','ইংরেজি','English'],['Bangla and English','বাংলা ও ইংরেজি','Bangla and English']],
  'output-language':[['Bangla','বাংলা','Bangla'],['English','ইংরেজি','English'],['Bangla with English headings','বাংলা + ইংরেজি শিরোনাম','Bangla + English headings']],
  'output-format':[['Clear structured sections','ধাপভিত্তিক লেখা','Structured sections'],['A simple table','সহজ টেবিল','Simple table'],['Concise bullets','সংক্ষিপ্ত পয়েন্ট','Concise bullets']]
 };
 const saved=(()=>{try{const s=JSON.parse(sessionStorage.getItem('tripleE-v2-form')||'null');return s?.module===mod.id?s:null}catch{return null}})();
 let lang='bn',step=1,extra=Object.assign({},saved?.extra||{});
 const sel=(v,current,ls)=>`<option value="${safeText(v)}" ${v===current?'selected':''}>${safeText(ls)}</option>`;
 const selectHtml=(choices,current)=>choices.map(x=>sel(x[0],current,txt(x[1],x[2]))).join('');
 function rememberDynamic(){mod.fields.forEach(f=>{const el=$('field-'+f.id);if(el)extra[f.id]=el.value})}
 function setChoices(id,choices){const el=$(id);if(!el)return;const value=el.value;el.innerHTML=selectHtml(choices,value||choices[0][0])}
 function isVisible(f){return (!f.whenTask||f.whenTask.includes($('task').value))&&(!f.whenField||String(extra[f.whenField.id]||'')===f.whenField.equals)}
 function drawDynamic(){rememberDynamic();mod.fields.forEach(f=>{if(f.type==='select'&&extra[f.id]==null)extra[f.id]=f.options[0][0]});const shown=mod.fields.filter(isVisible);
  $('module-fields').innerHTML=shown.map(f=>`<div class="field" style="margin-bottom:17px"><label for="field-${safeText(f.id)}">${safeText(txt(f.label,f.en))}${f.requiredWhenShown?' *':''}</label>${f.type==='select'?`<select id="field-${safeText(f.id)}">${selectHtml(f.options,extra[f.id]||f.options[0][0])}</select>`:`<textarea id="field-${safeText(f.id)}" rows="3" maxlength="3000" placeholder="${safeText(txt(f.placeholder||'',f.enPlaceholder||''))}"></textarea>`}${f.id==='passage'?`<div class="hint">${txt('শিক্ষকের অনুমোদিত পাঠ দিন। শিশুদের ব্যক্তিগত তথ্য নয়।','Use teacher-approved text. No child-identifying data.')}</div>`:''}</div>`).join('');
  shown.forEach(f=>{const el=$('field-'+f.id);if(f.type==='textarea'&&extra[f.id])el.value=extra[f.id];el.addEventListener('input',()=>{extra[f.id]=el.value});if(f.type==='select')el.addEventListener('change',()=>{extra[f.id]=el.value;if(mod.fields.some(x=>x.whenField?.id===f.id))drawDynamic()})});
 }
 function drawResources(){const chosen=[...document.querySelectorAll('#resources-group input:checked')].map(e=>e.value);const fallback=saved?.resources||['textbook','board'];const picked=resourceInit?chosen:fallback;resourceInit=true;
  $('resources-group').innerHTML=TRIPLE_E.resources.filter(x=>mod.id!=='design'||!['printer','projector'].includes(x[0])).map(x=>`<label class="chip"><input type="checkbox" value="${safeText(x[0])}" ${picked.includes(x[0])?'checked':''}><span class="check-mini">✓</span>${safeText(txt(x[1],x[2]))}</label>`).join('');
 }
 let resourceInit=false;
 function drawSidebar(){$('sidebar-modules').innerHTML=TRIPLE_E.modules.map(m=>`<a href="${m.id}.html" class="${m.id===mod.id?'is-active':''}" ${m.id===mod.id?'aria-current="page"':''}><b>${m.no}</b><span>${safeText(txt(m.bn,m.en))}</span></a>`).join('')}
 function updateGuideSteps(){const draft=window.AI_TRIPLE_E_MODULES?.find(x=>x.id===mod.id);const steps=lang==='bn'?(mod.tutorialBn||[]):(mod.tutorialEn||mod.tutorialBn||[]);$('guide-steps').innerHTML=steps.map(x=>`<li>${safeText(x)}</li>`).join('')}
 function drawGuide(){
  updateGuideSteps();
  const cfg = window.AI_TRIPLE_E_CONFIG || {};
  const video = cfg.videos?.[mod.id] || {};
  const frame = $('module-video');
  const message = $('video-message');
  if(!frame || !message) return;
  frame.replaceChildren();
  const isPreview = search.get('video-preview') === '1' && !video.youtubeId;
  const id = (isPreview ? cfg.previewVideoId : video.youtubeId) || '';
  const mp4 = video.mp4 || '';
  message.hidden = false;
  message.textContent = '';
  if(/^[A-Za-z0-9_-]{11}$/.test(id)){
    const box = document.createElement('div');
    box.className = 'video-embed-block' + ((!isPreview && video.portrait) ? ' is-portrait' : '');
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?playsinline=1';
    f.title = (isPreview ? 'Sample video player test' : mod.en + ' tutorial');
    f.loading = 'lazy';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allow = 'accelerometer; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    box.appendChild(f);
    const a = document.createElement('a');
    a.className = 'video-youtube-link';
    a.href = 'https://www.youtube.com/watch?v=' + id;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'YouTube-এ দেখুন ↗';
    box.appendChild(a);
    frame.append(box);
    if(isPreview){
      message.textContent = 'পরীক্ষামূলক নমুনা ভিডিও। এটি AI Triple E-এর টিউটোরিয়াল নয়।';
      message.classList.add('video-sample-label');
    }else{
      message.hidden = true;
      message.classList.remove('video-sample-label');
    }
  }else if(/^media\/videos\/[a-zA-Z0-9_-]+\.mp4$/.test(mp4)){
    const v = document.createElement('video');
    v.controls = true;v.preload = 'none';v.src = mp4;v.playsInline = true;
    frame.append(v);message.hidden = true;
  }else{
    message.textContent = 'ভিডিও টিউটোরিয়াল শিগগির যুক্ত হবে। নিচের লিখিত ধাপগুলো ব্যবহার করুন।';
    message.classList.remove('video-sample-label');
  }
 }
 function adaptFields(){
   // Show by default only brackets required by this printed toolkit prompt.
   const needs={
     plan:['grade','subject','topic','outcome','students','minutes'],
     design:['grade','subject','topic','outcome'],
     facilitate:['grade','outcome','students'],
     assess:['grade','subject','topic','outcome','minutes']
   }[mod.id]||[];
   for(const id of ['grade','subject','topic','outcome','students','minutes']){
     const field=$(id)?.closest('.field');if(field)field.hidden=!needs.includes(id);
   }
   // RCTC fields inside the optional accordion retain the teacher's existing values.
 }
 function renderTranslation(){document.documentElement.lang=lang;
  $('lang-bn').classList.toggle('is-active',lang==='bn');$('lang-en').classList.toggle('is-active',lang==='en');
  $('lang-bn').setAttribute('aria-pressed',String(lang==='bn'));$('lang-en').setAttribute('aria-pressed',String(lang==='en'));
  $('module-title').textContent=txt(mod.bn,mod.en);$('module-desc').textContent=txt(mod.bnDesc,mod.enDesc);$('module-eyebrow').textContent=`MODULE ${mod.no} / 04`;
  const stepTexts=[['পাঠের তথ্য','Classroom context'],['আপনার প্রয়োজন','Teaching task'],['প্রম্পট ও ARR','Prompt and ARR']];
  stepTexts.forEach((t,i)=>{const a=$('step-tab-'+(i+1));a.querySelector('span:last-child').textContent=txt(...t)});
  for(const [key,elId] of Object.entries(labelMap)){const el=$(elId);if(el)el.textContent=txt(...tr[key])+(['topic','outcome'].includes(key)?' *':'')}
  setChoices('grade',gradeOptions);setChoices('subject',TRIPLE_E.subjects);setChoices('task',mod.tasks);
  Object.keys(optionSets).forEach(id=>setChoices(id,optionSets[id]));
  $('topic').placeholder=txt('যেমন: গল্পের মূলভাব বোঝা','e.g. Main idea of a story');
  $('outcome').placeholder=txt('পাঠ শেষে শিক্ষার্থীরা কী শিখবে বা করতে পারবে?','What will students learn or be able to do?');
  $('hint-outcome').textContent=txt('শিক্ষকের নির্ধারিত শিখনফল লিখুন। AI দিয়ে সরকারি শিখনফল বানাবেন না।','Use a teacher-checked outcome; never invent official outcomes.');
  $('textbook-ref').placeholder=txt('যেমন: বইয়ের নাম ও অধ্যায়ের শিরোনাম','e.g. Book and chapter title');
  $('label-internet').textContent=txt(...tr.internet);
  $('advanced-summary').textContent=txt('পাঠ্যবই, অতিরিক্ত নির্দেশনা ও অন্যান্য তথ্য (ঐচ্ছিক)','Other details (optional)');$('conditions-summary').textContent=txt('শ্রেণিকক্ষের আরও শর্ত (ঐচ্ছিক)','More classroom conditions (optional)');
  $('form-caption').textContent=txt('টুলকিটের মূল প্রম্পট সংক্ষিপ্ত রাখা হয়েছে।','The original toolkit prompt stays concise.');
  $('next-step').innerHTML=txt('পরবর্তী ধাপ','Next step')+icon('arrow');$('prev-step').innerHTML=icon('back')+txt('আগের ধাপ','Back');
  $('generate-prompt').innerHTML=txt('প্রম্পট তৈরি করুন','Generate prompt')+icon('arrow');
  $('demo-fill').textContent=txt('ডেমো তথ্য দিন','Fill sample');$('demo-fill-step1').textContent=txt('ডেমো পূরণ করুন','Fill sample');
  $('guide-title').textContent=txt('কীভাবে ব্যবহার করবেন?','How to use this module');$('guide-subtitle').textContent=txt('লিখিত নির্দেশনা ও ভিডিও (প্রকাশিত হলে)','Written guide and video (when published)');
  /* Video message controlled by drawGuide() for live, preview and unpublished states. */
  $('safety-text').textContent=txt('প্রম্পটটি টুলকিটের বাংলা RCTC অনুসারে তৈরি হবে। শিশুদের শনাক্তযোগ্য তথ্য লিখবেন না।','The prompt follows the Bangla toolkit template. Never enter child-identifying information.');
  $('task-minutes').placeholder=txt('যেমন: ১০','e.g. 10');
  $('module-eyebrow').textContent='MODULE '+mod.no+' / 04';
  updateGuideSteps();drawSidebar();drawResources();drawDynamic();adaptFields();renderStep(step,false);
 }
 function renderStep(n,scroll=true){step=n;
  $('wizard-step-1').hidden=n!==1;$('wizard-step-2').hidden=n!==2;
  $('step-tab-1').className='module-step '+(n===1?'is-active':'is-complete');$('step-tab-2').className='module-step '+(n===2?'is-active':'');
  $('step-indicator').textContent=`STEP 0${n} / 02`;
  $('form-heading').textContent=n===1?txt('পাঠ সম্পর্কে বলুন','Tell us about your lesson'):txt('কী ধরনের সহায়তা প্রয়োজন?','What teaching support do you need?');
  $('form-intro').textContent=n===1?txt('টুলকিটের [বন্ধনীর] জায়গায় আপনার তথ্য বসবে।','Your input replaces the bracketed toolkit fields.'):txt('উপকরণ বেছে নিন। অন্য বিকল্পগুলো ঐচ্ছিক।','Select materials. Other options are optional.');
  if(scroll)document.querySelector('.module-steps').scrollIntoView({behavior:'smooth',block:'start'});
 }
 function validateFirst(){let ok=true;for(const id of (mod.id==='facilitate'?['outcome']:['topic','outcome'])){const el=$(id),valid=el.value.trim().length>0;el.closest('.field').classList.toggle('invalid',!valid);el.setAttribute('aria-invalid',String(!valid));if(!valid)ok=false}const n=Number($('students').value);if(!Number.isInteger(n)||n<1||n>300){ok=false;$('students').setAttribute('aria-invalid','true')}else $('students').removeAttribute('aria-invalid');return ok}
 function collect(){rememberDynamic();return {
  module:mod.id,grade:$('grade').value,subject:$('subject').value,topic:$('topic').value.trim(),outcome:$('outcome').value.trim(),
  students:$('students').value,minutes:$('minutes').value,textbookRef:$('textbook-ref').value.trim(),task:$('task').value,
  taskMinutes:$('task-minutes').value,grouping:$('grouping').value,prepTime:$('prep-time').value,classSpace:$('class-space').value,
  resources:[...document.querySelectorAll('#resources-group input:checked')].map(x=>x.value),internet:$('internet').value,printing:$('printing').value,
  prior:$('prior').value.trim(),constraints:$('constraints').value.trim(),notes:$('notes').value.trim(),instructionLanguage:$('instruction-language').value,
  outputLanguage:$('output-language').value,outputFormat:$('output-format').value,extra:Object.assign({},extra)
 }}
 function validateAndShow(d){const issues=AITripleEPrompt.validate(d,mod);const target=$('phase2-errors');target.hidden=issues.length===0;
  target.textContent=issues.map(x=>txt(x.bn,x.en)).join(' ');
  if(issues.length){const first=issues[0].field;if(['topic','outcome','students','minutes'].includes(first)){renderStep(1);setTimeout(()=>$(first)?.focus(),80)}else{$(first)?.focus();target.scrollIntoView({behavior:'smooth',block:'center'})}return false}return true}
 function restore(){if(!saved)return;const fields={grade:'grade',subject:'subject',topic:'topic',outcome:'outcome',students:'students',minutes:'minutes',textbookRef:'textbook-ref',task:'task',
  taskMinutes:'task-minutes',grouping:'grouping',prepTime:'prep-time',classSpace:'class-space',internet:'internet',printing:'printing',prior:'prior',constraints:'constraints',notes:'notes',instructionLanguage:'instruction-language',outputLanguage:'output-language',outputFormat:'output-format'};
  Object.entries(fields).forEach(([key,id])=>{if(saved[key]!=null&&$(id))$(id).value=saved[key]});
 }
 function fillSample(){$('grade').value='3';$('subject').value='Bangla';$('topic').value='ঘাসফড়িং আর পিঁপড়ার গল্প (টুলকিটের উদাহরণ)';$('outcome').value='শিক্ষার্থীরা নির্বাচিত বাক্য পড়ার অনুশীলন, ঘটনাক্রম সাজানো ও গল্পভিত্তিক প্রশ্নের উত্তর দেবে (টুলকিটের প্রদর্শনী লক্ষ্য; সরকারি শিখনফল নয়)।';$('students').value='40';$('minutes').value='40';$('textbook-ref').value='আমার বাংলা বই, তৃতীয় শ্রেণি, পাঠ ৭ (বই দেখে মিলিয়ে নিন)';$('prior').value='শিক্ষার্থীরা ছোট বাক্য পড়ার অনুশীলন করেছে।';$('constraints').value='শিক্ষার্থীদের নিজস্ব ডিভাইস নেই।';$('notes').value='সহজ মৌখিক প্রশ্ন ব্যবহার করুন।';$('task').value=mod.tasks[0][0];extra['reading-levels']='কিছু শিক্ষার্থী সাবলীল পাঠে সহায়তা চায়।';extra['activity-duration']='15';drawDynamic();$('phase2-errors').hidden=true}
 // Init in a safe order; labels and module data are already loaded (all scripts defer).
 document.title=mod.en+' | AI Triple E';drawGuide();
 // Populate select options before restoring persisted values.
 Object.keys(optionSets).forEach(id=>setChoices(id,optionSets[id]));setChoices('grade',gradeOptions);setChoices('subject',TRIPLE_E.subjects);setChoices('task',mod.tasks);
 restore();renderTranslation();if(legacyTask){$('task').value=legacyTask;drawDynamic();}
 $('task').addEventListener('change',()=>{rememberDynamic();drawDynamic()});
 $('lang-bn').addEventListener('click',()=>{rememberDynamic();lang='bn';renderTranslation()});
 $('lang-en').addEventListener('click',()=>{rememberDynamic();lang='en';renderTranslation()});
 $('next-step').addEventListener('click',()=>{if(validateFirst())renderStep(2);else document.querySelector('.field.invalid input,.field.invalid textarea')?.focus()});
 $('prev-step').addEventListener('click',()=>renderStep(1));
 ['topic','outcome'].forEach(id=>$(id).addEventListener('input',()=>$(id).closest('.field').classList.remove('invalid')));
 $('demo-fill').addEventListener('click',fillSample);$('demo-fill-step1').addEventListener('click',fillSample);
 $('wizard-form').addEventListener('submit',e=>{e.preventDefault();const d=collect();if(!validateAndShow(d))return;
  let prompt;try{prompt=AITripleEPrompt.build(d,mod,TRIPLE_E.resources)}catch(e){$('phase2-errors').hidden=false;$('phase2-errors').textContent=e.message;return;}
  try{sessionStorage.setItem('tripleE-v2-form',JSON.stringify(d));sessionStorage.setItem('tripleE-v2-result',JSON.stringify({form:d,prompt}));location.href='result.html'}
  catch(e){$('phase2-errors').hidden=false;$('phase2-errors').textContent=txt('ব্রাউজারের সেশন স্টোরেজে সংরক্ষণ করা যায়নি।','Could not store the draft in this browser session.')}});
 const openGuide=()=>{if(location.hash==='#tutorial-details')$('tutorial-details').open=true};window.addEventListener('hashchange',openGuide);openGuide();
 if(search.get('demo')==='1')fillSample();
})();
