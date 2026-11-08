/* RCTC tutorial video loader, same configuration as the four modules. */
(function(){
 'use strict';
 const box=document.getElementById('rctc-video-guide');
 const player=document.getElementById('rctc-video-player');
 const status=document.getElementById('rctc-video-status');
 if(!box||!player||!status)return;
 const cfg=window.AI_TRIPLE_E_CONFIG||{};
 const video=cfg.videos?.rctc||{};
 const preview=new URLSearchParams(window.location.search).get('video-preview')==='1'&&!video.youtubeId;
 const id=preview?cfg.previewVideoId:video.youtubeId;
 if(!/^[a-zA-Z0-9_-]{11}$/.test(id||''))return;
 const wrap=document.createElement('div');wrap.className='video-embed-block'+((!preview&&video.portrait)?' is-portrait':'');
 const iframe=document.createElement('iframe');
 iframe.src='https://www.youtube-nocookie.com/embed/'+id+'?playsinline=1';
 iframe.title=preview?'Sample player test':'RCTC tutorial';
 iframe.loading='lazy';iframe.referrerPolicy='strict-origin-when-cross-origin';
 iframe.allow='accelerometer; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;
 wrap.append(iframe);
 const link=document.createElement('a');
 link.href='https://www.youtube.com/watch?v='+id;
 link.target='_blank';link.rel='noopener noreferrer';link.className='video-youtube-link';
 link.textContent='YouTube-এ দেখুন ↗';wrap.append(link);player.append(wrap);
 if(preview){status.textContent='পরীক্ষামূলক নমুনা ভিডিও। এটি AI Triple E-এর টিউটোরিয়াল নয়।';}
 else{status.hidden=true;}
})();
