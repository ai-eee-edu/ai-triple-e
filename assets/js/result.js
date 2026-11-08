(function(){
 const $=id=>document.getElementById(id);
 let data;try{data=JSON.parse(sessionStorage.getItem('tripleE-v2-result')||'null')}catch{data=null}
 if(!data||!data.prompt||!data.form){$('result-content').hidden=true;$('result-empty').hidden=false;return}
 const mod=getModule(data.form.module);$('result-module-back').textContent=mod.bn;$('result-module-back').href=mod.id+'.html';$('edit-inputs').href=mod.id+'.html';$('prompt-editor').value=data.prompt;
 let decision=null;const help={accept:'ছয়টি মানদণ্ড পূরণ হয়েছে এবং শিক্ষক পাঠ্যবই ও শিখনফল মিলিয়ে নিয়েছেন। যাচাই ছাড়া গ্রহণ নয়।',revise:'মূল ধারণা নিরাপদ, তবে ভাষা, সময়, স্তর বা উপকরণের সংশোধন দরকার। সংশোধিত উত্তর আবার যাচাই করুন।',reject:'গোপনীয়তা লঙ্ঘন, ক্ষতিকর/বৈষম্যমূলক বিষয় বা গুরুতর ভুল থাকলে এই আউটপুট ব্যবহার করবেন না। প্রয়োজনে নতুনভাবে শুরু করুন।'};
 function choose(v){decision=v;document.querySelectorAll('[data-decision]').forEach(el=>{let yes=el.dataset.decision===v;el.classList.toggle('is-selected',yes);el.setAttribute('aria-pressed',yes?'true':'false')});$('decision-help').textContent=help[v];$('decision-help').className='decision-help'+(v==='accept'?' decision-help--accept':v==='reject'?' decision-help--reject':'');if($('copy-revision'))$('copy-revision').disabled=v!=='revise'}
 document.querySelectorAll('[data-decision]').forEach(el=>el.addEventListener('click',()=>choose(el.dataset.decision)));$('copy-revision').disabled=true;
 $('copy-btn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('prompt-editor').value);$('copy-status').textContent='প্রম্পট কপি হয়েছে।'}catch{try{$('prompt-editor').focus();$('prompt-editor').select();document.execCommand('copy');$('copy-status').textContent='প্রম্পট কপি করার চেষ্টা করা হয়েছে।'}catch{$('copy-status').textContent='কপি করা যায়নি। লেখাটি নির্বাচন করে কপি করুন।'}}});
 $('download-btn').addEventListener('click',()=>{let str=$('prompt-editor').value;const a=document.createElement('a'),blob=new Blob([str],{type:'text/plain;charset=utf-8'});const u=URL.createObjectURL(blob);a.href=u;a.download='ai-triple-e-'+mod.id+'-prompt.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)});
 
 // Accept/Revise/Reject stays a professional decision. Revision text never claims an automatic content review.
 const revisionBtn=$('copy-revision');if(revisionBtn)revisionBtn.addEventListener('click',async()=>{
  const remarks=$('review-notes')?.value.trim()||'';
  const unresolved=[...document.querySelectorAll('#arr-checks input')].map((e,i)=>({checked:e.checked,text:e.closest('label')?.innerText.trim()})).filter(e=>!e.checked).map(e=>e.text);
  const direction=[
   'আগের AI-উত্তরটি সংশোধন করো। শিক্ষকের নির্ধারিত শিখনফল অপরিবর্তিত রাখো।',
   'শিক্ষকের সিদ্ধান্ত: '+({accept:'গ্রহণ',revise:'সংশোধন',reject:'বর্জন'}[decision])+ '।',
   unresolved.length?'শিক্ষককে আরও যাচাই করতে হবে: '+unresolved.join('; ')+'।':'ব্যবহারের আগে শিক্ষক সব মানদণ্ড মিলিয়ে দেখবেন।',
   remarks?'যা পরিবর্তন করতে হবে: '+remarks:'কোন অংশে সংশোধন দরকার তা আগে শিক্ষককে জিজ্ঞেস করো।',
   'পাঠের সময় ও উপকরণ মেনে চলো। পাঠ্যবইয়ের অজানা তথ্য তৈরি করো না; শিশুর পরিচয় প্রকাশ করো না।',
   'কী পরিবর্তন করেছ এবং কোন তথ্য শিক্ষককে যাচাই করতে হবে, সংক্ষেপে জানাও।'
  ].join('\n');
  try{await navigator.clipboard.writeText(direction);$('revision-status').textContent='সংশোধনের নির্দেশনা কপি হয়েছে।'}catch{$('revision-status').textContent='কপি করা যায়নি। আপনি নোট দেখে নিজে নির্দেশনা লিখতে পারেন।'}
 });
})();
