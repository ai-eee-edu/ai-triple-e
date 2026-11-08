/* Short general-purpose RCTC builder, faithful to Toolkit v0.6 page 7. */
(function(){
 'use strict';
 const form=document.getElementById('rctc-form');if(!form)return;
 const $=id=>document.getElementById(id);
 const resources=[['textbook','পাঠ্যবই'],['board','বোর্ড ও চক/মার্কার'],['paper','পুনর্ব্যবহারযোগ্য কাগজ'],['local','স্থানীয় উপকরণ']];
 $('rctc-resource-list').innerHTML=resources.map(([id,label])=>`<label class="chip"><input type="checkbox" value="${id}" ${id==='textbook'||id==='board'?'checked':''}><span class="check-mini">✓</span>${label}</label>`).join('');
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const data={grade:$('rctc-grade').value,subject:$('rctc-subject').value,topic:$('rctc-topic').value,outcome:$('rctc-outcome').value,need:$('rctc-need').value,students:$('rctc-students').value,minutes:$('rctc-minutes').value,task:$('rctc-task').value,resources:[...document.querySelectorAll('#rctc-resource-list input:checked')].map(x=>x.value)};
  try{
   const output=AITripleEPrompt.buildGeneral(data,resources);
   $('rctc-preview').value=output;
   $('rctc-result').hidden=false;
   $('rctc-error').textContent='';
   $('rctc-result').scrollIntoView({behavior:'smooth',block:'start'});
  }catch(err){$('rctc-error').textContent=err.message;}
 });
 $('rctc-copy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText($('rctc-preview').value);$('rctc-copy-status').textContent='প্রম্পট কপি হয়েছে।';}
  catch{$('rctc-preview').focus();$('rctc-preview').select();$('rctc-copy-status').textContent='লেখাটি নির্বাচন করা হয়েছে। কপি করুন।';}
 });
})();
