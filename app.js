'use strict';
function element(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
const video=document.querySelector('#case-video');
let activeCase;
function selectCase(id){
  const item=(window.NAV_CASES||[]).find(c=>c.id===id);if(!item)return;
  activeCase=item;video.pause();video.poster=item.poster;video.src=item.video;video.setAttribute('aria-label',`${item.title}: complete first-person observation sequence`);video.load();
  document.querySelector('#case-title').textContent=item.title;
  document.querySelector('#case-instruction').textContent=`“${item.instruction}”`;
  document.querySelector('#case-note').textContent=item.note;
  document.querySelector('#frame-label').textContent=`${item.frames} observations · ${item.fps} fps · ${item.environment.toLowerCase()}`;
  document.querySelector('#download-video').href=item.video;
  const segments=document.querySelector('#segments');segments.replaceChildren();
  if(item.segments.length>1)item.segments.forEach((s,i)=>{const b=element('button','',`${i+1}. ${s.label}`);b.type='button';b.dataset.segment=String(i);b.addEventListener('click',()=>{const seek=()=>{video.currentTime=s.start;video.focus();};if(video.readyState>=1)seek();else video.addEventListener('loadedmetadata',seek,{once:true});});segments.append(b);});
  document.querySelectorAll('.case-choice').forEach(b=>{const active=b.dataset.case===id;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}
for(const c of window.NAV_CASES||[]){
  const button=element('button','case-choice');button.type='button';button.dataset.case=c.id;button.setAttribute('aria-pressed','false');
  const img=element('img');img.src=c.poster;img.alt='';img.loading='lazy';img.width=72;img.height=54;
  const text=element('span');text.append(element('strong','',c.title),element('small','',`${c.environment} · ${c.frames} observations`));button.append(img,text);button.addEventListener('click',()=>selectCase(c.id));document.querySelector('#case-list').append(button);
}
video.addEventListener('timeupdate',()=>{if(!activeCase)return;const idx=activeCase.segments.findLastIndex(s=>video.currentTime>=s.start);document.querySelectorAll('[data-segment]').forEach(b=>b.classList.toggle('active',Number(b.dataset.segment)===idx));});
selectCase('case-04');

// Public metadata remains optional until the authors supply the release details.
const pub=window.NAV_PUBLICATION||{};
function safeUrl(value){if(!value)return null;try{const u=new URL(value,location.href);return ['http:','https:'].includes(u.protocol)?u.href:null;}catch{return null;}}
for(const [id,url] of [['paper-link',pub.paperUrl],['code-link',pub.codeUrl]]){const link=document.getElementById(id),valid=safeUrl(url);if(valid){link.href=valid;link.target='_blank';link.rel='noopener';link.hidden=false;}}
if(pub.authors?.length){const authors=document.querySelector('#authors');authors.hidden=false;pub.authors.forEach((a,i)=>{if(i)authors.append(document.createTextNode(' · '));const url=safeUrl(a.url),label=element(url?'a':'span','',a.name);if(url){label.href=url;label.target='_blank';label.rel='noopener';}authors.append(label);if(a.affiliation)authors.append(element('sup','',a.affiliation));});}
if(pub.affiliations?.length){const aff=document.querySelector('#affiliations');aff.textContent=pub.affiliations.join(' · ');aff.hidden=false;}
if(pub.bibtex){document.querySelector('#citation').hidden=false;document.querySelector('#bibtex').textContent=pub.bibtex;}
document.querySelector('#copy-citation').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(pub.bibtex);status.textContent='BibTeX copied.';}catch{status.textContent='Select the citation above and copy it.';const selection=window.getSelection(),range=document.createRange();range.selectNodeContents(document.querySelector('#bibtex'));selection.removeAllRanges();selection.addRange(range);}});
if(pub.simulationCases?.length){
  const gallery=document.querySelector('#simulation-gallery');gallery.hidden=false;
  document.querySelector('.simulation .status-label').hidden=true;
  for(const c of pub.simulationCases){
    const article=element('article','simulation-video'),v=element('video');
    v.controls=true;v.playsInline=true;v.preload='metadata';v.src=c.video;if(c.poster)v.poster=c.poster;
    v.setAttribute('aria-label',`${c.dataset} episode ${c.episode}: ${c.title}`);
    const kicker=element('div','simulation-kicker');
    kicker.append(element('span','dataset-badge',c.dataset),element('span','',`Episode ${c.episode} · ${c.model}`));
    const metrics=element('div','simulation-metrics');
    metrics.append(element('span','','Success  ✓'),element('span','',`NE  ${c.ne.toFixed(2)} m`),element('span','',`SPL  ${c.spl.toFixed(2)}`),element('span','',`${c.frames} observations`));
    const instruction=element('p','simulation-instruction',`“${c.instruction}”`);
    const download=element('a','simulation-download','Download MP4 ↓');download.href=c.video;download.download='';
    article.append(v,kicker,element('h3','',c.title),metrics,instruction,download);gallery.append(article);
  }
}
