/* AI Triple E · Toolkit v0.6 faithful RCTC templates.
 * Sources: Toolkit.pdf pp.7,10,11,13,14. No AI API or network requests.
 * Default output preserves the four printed blocks. Teacher-selected additions
 * appear only when supplied, and never replace core module tasks.
 */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.AITripleEPrompt=api;})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 const clean=x=>String(x??'').trim();
 const bnNum=n=>String(n).replace(/[0-9]/g,x=>'০১২৩৪৫৬৭৮৯'[Number(x)]);
 const grades={'1':'প্রথম','2':'দ্বিতীয়','3':'তৃতীয়','4':'চতুর্থ','5':'পঞ্চম'};
 const subjects={'Bangla':'বাংলা','English':'ইংরেজি','Mathematics':'গণিত','Primary Science':'প্রাথমিক বিজ্ঞান','Bangladesh and Global Studies':'বাংলাদেশ ও বিশ্বপরিচয়','Other (teacher specified)':'অন্যান্য'};
 const taskLabels={
  plan:{standard:null,'reading-plan':'জোড়ায় পড়ার অনুশীলনকে গুরুত্ব দাও',micro:'শিখনফল, কাজ, উপকরণ ও যাচাই নিয়ে চার বাক্যের একটি মাইক্রো-প্ল্যানও দাও'},
  design:{reusable:null,'word-cards':'শব্দকার্ডের উপযোগী করো','event-cards':'ঘটনাক্রম সাজানোর কার্ডের উপযোগী করো',board:'বোর্ডে করা যায় এমন উপকরণকে গুরুত্ব দাও','two-level':'দুই স্তরের অনুশীলনের ব্যবহার বুঝিয়ে দাও'},
  facilitate:{'pair-reading':null,'group-discussion':'ছোট দলের আলোচনা রাখতে পারো','word-search':'শব্দ খোঁজার কাজকে গুরুত্ব দাও','peer-explain':'সহপাঠীকে বোঝানোর কাজ রাখতে পারো',mixed:'শিক্ষার্থীদের অংশগ্রহণের উপযোগী অন্য একটি কাজ বেছে নাও'},
  assess:{standard:null,reading:'স্বাধীনভাবে পড়া ও গল্প বোঝা আলাদা করে যাচাইয়ের উপায় যোগ করো',comprehension:'গল্প অনুধাবনকে গুরুত্ব দাও',sequence:'ঘটনাক্রম সাজানোর দক্ষতা যাচাইকে গুরুত্ব দাও'}
 };
 function validate(d,mod){
  const errors=[];const extra=d.extra||{};const is=mod?.id;
  if(!['plan','design','facilitate','assess'].includes(is))errors.push({field:'task',bn:'সঠিক মডিউল খুলুন।',en:'Choose a module.'});
  if(is!=='facilitate'&&!clean(d.topic))errors.push({field:'topic',bn:'পাঠের নাম লিখুন।',en:'Enter a topic.'});
  if(!clean(d.outcome))errors.push({field:'outcome',bn:'শিখনফল লিখুন।',en:'Enter the learning outcome.'});
  if((is==='plan'||is==='facilitate')&&(!Number.isInteger(Number(d.students))||Number(d.students)<1||Number(d.students)>300))errors.push({field:'students',bn:'শিক্ষার্থী সংখ্যা ১–৩০০ এর মধ্যে দিন।',en:'Enter a valid class size.'});
  if((is==='plan'||is==='assess')&&(!Number.isInteger(Number(d.minutes))||Number(d.minutes)<5||Number(d.minutes)>180))errors.push({field:'minutes',bn:'পাঠের সময় সঠিকভাবে দিন।',en:'Enter a valid duration.'});
  if(is==='facilitate'&&Number(d.minutes)<10)errors.push({field:'minutes',bn:'জোড়া বা দলীয় কাজের জন্য মোট সময় কমপক্ষে ১০ মিনিট হতে হবে।',en:'Enter at least 10 minutes.'});
  if(!mod?.tasks?.some(t=>t[0]===d.task))errors.push({field:'task',bn:'সঠিক কাজ নির্বাচন করুন।',en:'Select a task.'});
  const taskTime=clean(d.taskMinutes);
  if(taskTime&&(!Number.isInteger(Number(taskTime))||Number(taskTime)<1||Number(taskTime)>Number(d.minutes)))errors.push({field:'task-minutes',bn:'নির্বাচিত কাজের সময় পাঠের মোট সময়ের মধ্যে রাখুন।',en:'Task time exceeds lesson time.'});
  if(is==='design'&&(d.resources||[]).some(r=>['printer','projector'].includes(r)))errors.push({field:'resources-group',bn:'DESIGN প্রম্পটে প্রিন্টার বা প্রজেক্টরের প্রয়োজন নেই। সেগুলো বাদ দিন।',en:'DESIGN uses no printer or projector.'});
  if(is==='facilitate'&&clean(extra['activity-duration'])&&Number(extra['activity-duration'])>Number(d.minutes))errors.push({field:'field-activity-duration',bn:'কার্যক্রমের সময় পাঠের মোট সময়ের মধ্যে রাখুন।',en:'Activity time exceeds lesson time.'});
  return errors;
 }
 function build(d,mod,resources){
  const errors=validate(d,mod);if(errors.length)throw Error(errors.map(x=>x.bn).join(' '));
  const x=d.extra||{},id=mod.id,grade=grades[String(d.grade)]||clean(d.grade),subject=subjects[clean(d.subject)]||clean(d.subject),topic=clean(d.topic),outcome=clean(d.outcome);
  const count=bnNum(d.students),minutes=bnNum(d.minutes);
  const selected=(d.resources||[]).map(k=>resources?.find(row=>row[0]===k)?.[1]).filter(Boolean);
  const materials=selected.join(', ')||'উপকরণ উল্লেখ করা হয়নি';
  const parts=[];
  const add=(header,text)=>parts.push(header+' '+text);
  if(id==='plan'){
   add('R | ROLE · ভূমিকা:', 'তুমি বাংলাদেশের প্রাথমিক বিদ্যালয়ের একজন পাঠ পরিকল্পনা সহায়ক।');
   add('C | CONTEXT · প্রেক্ষাপট:',`আমার শ্রেণি ${grade}, বিষয় ${subject}, পাঠ ${topic} এবং নির্দিষ্ট শিখনফল ${outcome}। শিক্ষার্থী ${count} জন${clean(x.difficulty)?`; কিছু শিক্ষার্থী ${clean(x.difficulty)} অনুভব করে`:''}।`);
   add('T | TASK · কাজ:',`একটি সংক্ষিপ্ত ${minutes}-মিনিটের পাঠ পরিকল্পনা তৈরি করো: শুরু, শিক্ষার্থীর অনুশীলন, শিক্ষকের পর্যবেক্ষণ ও শেষ মূল্যায়ন।`);
   add('C | CONDITIONS · শর্ত:',`ব্যবহার করা যাবে শুধু ${materials}। প্রতিটি ধাপের সময় ও শিক্ষক/শিক্ষার্থীর কাজ টেবিলে দাও। পরিকল্পনা সহজ ও বয়সোপযোগী রাখো; পাঠ্যবইয়ের সঙ্গে যাচাই করতে হবে এমন বিষয় চিহ্নিত করো।`);
  } else if(id==='design'){
   add('R | ROLE · ভূমিকা:','তুমি স্বল্প ব্যয়ের প্রাথমিক শিক্ষণ উপকরণ নকশায় অভিজ্ঞ সহায়ক।');
   let context=`আমি ${grade} শ্রেণিতে ${subject}/${topic} পড়াচ্ছি। শিখনফল ${outcome}।`;
   if(clean(x.gap)||clean(x.advanced))context+=' '+[clean(x.gap)?`কিছু শিক্ষার্থী ${clean(x.gap)}`:'',clean(x.advanced)?`অন্যরা ${clean(x.advanced)} দেখায়`:''].filter(Boolean).join('; ' )+'।';
   add('C | CONTEXT · প্রেক্ষাপট:',context);
   add('T | TASK · কাজ:','একটি পুনর্ব্যবহারযোগ্য উপকরণ এবং একই উদ্দেশ্যের একটি সহজ ও একটি চ্যালেঞ্জিং অনুশীলন তৈরি করো।');
   add('C | CONDITIONS · শর্ত:',`শুধু ${materials} ব্যবহার করা যাবে। তৈরির ধাপ, ৫টি নমুনা, উত্তর এবং বাস্তবায়নে সম্ভাব্য সমস্যা দাও। ছবি বা প্রিন্টার প্রয়োজন হবে না।`);
  } else if(id==='facilitate'){
   add('R | ROLE · ভূমিকা:','তুমি বড় ও সীমিত সম্পদের প্রাথমিক শ্রেণিতে শিক্ষার্থী-কেন্দ্রিক কার্যক্রম পরিকল্পনায় অভিজ্ঞ সহায়ক।');
   add('C | CONTEXT · প্রেক্ষাপট:',`আমি ${grade} শ্রেণিতে ${outcome} শেখাচ্ছি। মোট ${count} জন${clean(x['reading-levels'])?`, শিক্ষার্থীদের পড়ার স্তর ${clean(x['reading-levels'])}`:''}।`);
   add('T | TASK · কাজ:','১০–১৫ মিনিটের একটি জোড়া বা ছোট দলের কার্যক্রম বানাও যাতে প্রত্যেকে কিছু পড়বে, বলবে বা লিখবে। শিক্ষক কী দেখবেন সেটিও দাও।');
   add('C | CONDITIONS · শর্ত:',`শুধু ${materials} থাকবে। দল গঠনের নিয়ম, শব্দ বেশি হলে বিকল্প, অংশগ্রহণ বোঝার তিনটি লক্ষণ ও শেষের ২ মিনিটের যাচাই দাও। কোনো শিশুকে অপমান বা বাদ দেওয়া যাবে না।`);
  } else if(id==='assess'){
   add('R | ROLE · ভূমিকা:','তুমি বাংলাদেশের প্রাথমিক শ্রেণির গঠনমূলক মূল্যায়ন নকশায় সহায়ক।');
   add('C | CONTEXT · প্রেক্ষাপট:',`শ্রেণি ${grade}, বিষয় ${subject}, পাঠ ${topic}, নির্দিষ্ট শিখনফল ${outcome}।`);
   add('T | TASK · কাজ:','একটি সহজ, একটি মাঝারি ও একটি ব্যাখ্যামূলক প্রশ্ন; প্রত্যেকটির যাচাইযোগ্য উত্তর; ০–২ পর্যবেক্ষণ রুব্রিক এবং পরের দিনের ৫ মিনিটের সহায়তা তৈরি করো।');
   add('C | CONDITIONS · শর্ত:',`মোট ${minutes} মিনিটে করা যাবে। কেবল ${materials} আছে। প্রশ্ন যেন শিখনফলের সঙ্গে মেলে, ভাষা সহজ হয়, কোনো ব্যক্তিগত শিক্ষার্থী তথ্য না লাগে।`);
  }
  // Additions are deliberately limited to requests the teacher actively supplied.
  const options=[];
  if(d.task&&mod.tasks?.[0]?.[0]!==d.task&&taskLabels[id]?.[d.task])options.push(taskLabels[id][d.task]);
  if(id==='design'&&clean(x['sample-content']))options.push('নমুনায় এই শব্দ/উদাহরণ ব্যবহার করো: '+clean(x['sample-content']));
  if(id==='plan'&&clean(x['teacher-focus'])&&mod.fields?.find(f=>f.id==='teacher-focus')?.options?.[0]?.[0]!==x['teacher-focus']){
   const option=mod.fields.find(f=>f.id==='teacher-focus').options.find(a=>a[0]===x['teacher-focus']);if(option)options.push('বিশেষ পর্যবেক্ষণের বিষয়: '+option[1]);
  }
  if(id==='facilitate'&&clean(x['reading-source']))options.push('নির্বাচিত পাঠের অংশ: '+clean(x['reading-source']));
  if(id==='assess'&&clean(x.misconception))options.push('শিক্ষার্থীদের সাধারণ ভুল ধারণা: '+clean(x.misconception));
  if(id==='assess'&&clean(x.evidence)&&x.evidence!=='oral'){const ev=mod.fields.find(f=>f.id==='evidence')?.options?.find(o=>o[0]===x.evidence);if(ev)options.push('শিখনের প্রমাণ হিসেবে দেখো: '+ev[1]);}
  if(clean(d.notes))options.push(clean(d.notes));
  if(options.length)parts[2]+=' অতিরিক্ত অনুরোধ: '+options.join('। ')+'।';
  let conditionsExtra=[];
  if(clean(d.prior))conditionsExtra.push('পূর্বজ্ঞান: '+clean(d.prior));
  if(clean(d.textbookRef))conditionsExtra.push('পাঠ্যবই/অধ্যায়: '+clean(d.textbookRef));
  if(clean(d.constraints))conditionsExtra.push(clean(d.constraints));
  if(clean(d.taskMinutes))conditionsExtra.push('নির্বাচিত কাজের জন্য '+bnNum(d.taskMinutes)+' মিনিট');
  if(d.grouping&&d.grouping!=='flexible')conditionsExtra.push('অংশগ্রহণ: '+({individual:'একক',pairs:'জোড়া',groups:'দল',whole:'সমগ্র শ্রেণি'}[d.grouping]||d.grouping));
  if(d.classSpace==='limited')conditionsExtra.push('শ্রেণিকক্ষের জায়গা সীমিত');
  if(d.prepTime==='none')conditionsExtra.push('প্রস্তুতির বাড়তি সময় নেই');
  if(d.printing==='yes'&&id!=='design')conditionsExtra.push('প্রিন্টার পাওয়া যাবে');
  if(d.internet==='available')conditionsExtra.push('শ্রেণিকক্ষে ইন্টারনেট রয়েছে');
  if(id==='facilitate'&&clean(x['activity-duration'])&&x['activity-duration']!=='15')conditionsExtra.push('কার্যক্রমের সময় '+bnNum(x['activity-duration'])+' মিনিট');
  if(id==='facilitate'&&clean(x.noise)&&x.noise!=='seated'){const nv=mod.fields.find(f=>f.id==='noise')?.options?.find(o=>o[0]===x.noise);if(nv)conditionsExtra.push('শব্দ বেড়ে গেলে বিকল্প: '+nv[1]);}
  if(d.prepTime==='10')conditionsExtra.push('প্রস্তুতির সময় ১০ মিনিটের কম');
  if(d.prepTime==='20')conditionsExtra.push('প্রস্তুতির সময় ১০–২০ মিনিট');
  if(d.prepTime==='30')conditionsExtra.push('প্রস্তুতির সময় ২০ মিনিটের বেশি');
  if(d.internet==='teacher')conditionsExtra.push('শুধু শিক্ষকের ডিভাইসে ইন্টারনেট আছে');
  if(d.instructionLanguage&&d.instructionLanguage!=='Bangla')conditionsExtra.push('শ্রেণিকক্ষের ভাষা: '+(d.instructionLanguage==='English'?'ইংরেজি':'বাংলা ও ইংরেজি'));
  if(d.outputLanguage&&d.outputLanguage!=='Bangla')conditionsExtra.push('AI-এর উত্তর '+(d.outputLanguage==='English'?'ইংরেজিতে':'বাংলায়, ইংরেজি শিরোনামসহ')+' দাও');
  if(d.outputFormat==='A simple table')conditionsExtra.push('মূল নির্দেশনা বজায় রেখে সম্ভব হলে টেবিলে উপস্থাপন করো');
  if(d.outputFormat==='Concise bullets')conditionsExtra.push('বাধ্যতামূলক টেবিল/রুব্রিক রেখে অন্য অংশ সংক্ষিপ্ত পয়েন্টে দাও');
  if(conditionsExtra.length)parts[3]+=' অতিরিক্ত তথ্য: '+conditionsExtra.join('; ')+'।';
  return parts.join('\n\n');
 }
 function buildGeneral(d,resources){
  const grade=grades[String(d.grade)]||clean(d.grade);const subject=subjects[clean(d.subject)]||clean(d.subject);
  if(!clean(d.topic)||!clean(d.outcome))throw Error('পাঠ ও শিখনফল লিখুন।');
  const picked=(d.resources||[]).map(k=>resources?.find(r=>r[0]===k)?.[1]).filter(Boolean).join(', ')||'উপকরণ উল্লেখ করা হয়নি';
  const role='R | ROLE · ভূমিকা: তুমি একজন অভিজ্ঞ প্রাথমিক শিক্ষণ-সহায়ক।';
  const context=`C | CONTEXT · প্রেক্ষাপট: আমি বাংলাদেশের ${grade} শ্রেণিতে ${subject}/${clean(d.topic)} পড়াই। আজকের শিখনফল ${clean(d.outcome)}। শিক্ষার্থীর সংখ্যা ${bnNum(d.students||40)}${clean(d.need)?`; কারও ${clean(d.need)} আছে`:''}।`;
  const task=`T | TASK · কাজ: আমাকে ${clean(d.task||'পাঠ পরিকল্পনা')} তৈরি করে দাও।`;
  const cond=`C | CONDITIONS · শর্ত: সময় ${bnNum(d.minutes||40)} মিনিট। যা আছে ${picked}। সহজ ও বয়সোপযোগী বাংলা ব্যবহার করো; শিক্ষার্থীর কাজ, শিক্ষকের সহায়তা ও শেখা যাচাই আলাদা করে দাও।`;
  return [role,context,task,cond].join('\n\n');
 }
 return {validate,build,buildGeneral};
});
