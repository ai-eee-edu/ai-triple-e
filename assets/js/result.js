(function(){
 const $=id=>document.getElementById(id);
 let data;try{data=JSON.parse(sessionStorage.getItem('tripleE-v2-result')||'null')}catch{data=null}
 if(!data||!data.prompt||!data.form){$('result-content').hidden=true;$('result-empty').hidden=false;return}
 const mod=getModule(data.form.module);$('result-module-back').textContent=mod.bn;$('result-module-back').href='module.html?module='+encodeURIComponent(mod.id);$('edit-inputs').href='module.html?module='+encodeURIComponent(mod.id);$('prompt-editor').value=data.prompt;
 let decision='revise';const help={accept:'শিক্ষক নিজে যাচাই করে উপকরণটি ব্যবহারযোগ্য মনে করেছেন। কেবল চেকবক্সে টিক দেওয়া যথেষ্ট নয়।',revise:'যে অংশগুলো সংশোধন প্রয়োজন, তা ঠিক করে পুনরায় যাচাই করুন।',reject:'এই AI আউটপুট ব্যবহার করবেন না। প্রয়োজনে নতুন প্রম্পট বা অন্য পদ্ধতি নিন।'};
 function choose(v){decision=v;document.querySelectorAll('[data-decision]').forEach(el=>{let yes=el.dataset.decision===v;el.classList.toggle('is-selected',yes);el.setAttribute('aria-pressed',yes?'true':'false')});$('decision-help').textContent=help[v];$('decision-help').className='decision-help'+(v==='accept'?' decision-help--accept':v==='reject'?' decision-help--reject':'')}
 document.querySelectorAll('[data-decision]').forEach(el=>el.addEventListener('click',()=>choose(el.dataset.decision)));choose('revise');
 $('copy-btn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('prompt-editor').value);$('copy-status').textContent='প্রম্পট কপি হয়েছে।'}catch{try{$('prompt-editor').focus();$('prompt-editor').select();document.execCommand('copy');$('copy-status').textContent='প্রম্পট কপি করার চেষ্টা করা হয়েছে।'}catch{$('copy-status').textContent='কপি করা যায়নি। লেখাটি নির্বাচন করে কপি করুন।'}}});
 $('download-btn').addEventListener('click',()=>{let str=$('prompt-editor').value;const a=document.createElement('a'),blob=new Blob([str],{type:'text/plain;charset=utf-8'});const u=URL.createObjectURL(blob);a.href=u;a.download='ai-triple-e-'+mod.id+'-prompt.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)});
})();
