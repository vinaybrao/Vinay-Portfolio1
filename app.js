// ── DATA ──────────────────────────────────────────────────────────────────
let D={
  desc:"12+ years building and scaling products across B2B SaaS, Payments, Analytics, and AI Automation.",
  location:"Bengaluru, India",phone:"+91 97317 36046",
  email:"braovinay@gmail.com",linkedin:"https://www.linkedin.com/in/vinaybrao/",
  tags:["🏢 B2B SaaS","🔌 API-first","🤖 AI Automation","💳 Payments","📱 Platform Strategy","📊 Analytics","📅 12+ Years Experience"],
  summary:"Senior Product Manager with 12+ years of experience across B2B SaaS, platform products, analytics, payments, and AI-enabled automation. Proven track record of building and scaling API-first products, payment microservices, and workflow automation platforms delivering $400K+ ARR growth and $200K+ cost savings. Strong expertise in product strategy, experimentation, platform architecture, cross-functional leadership, and data-driven decision making. Passionate about AI-native products, developer platforms, startups, and scalable SaaS ecosystems.",
  metrics:[
    {num:"$400K+",desc:"ARR growth delivered"},{num:"$200K+",desc:"Cost savings achieved"},
    {num:"3.6M+",desc:"Annual transactions owned"},{num:"240 hrs",desc:"Saved per week via automation"},
    {num:"$1.3M",desc:"ARR deal closed"},{num:"90%",desc:"Support ticket reduction"}
  ],
  skills:[
    {icon:"🗺️",title:"Product Strategy",items:"Roadmaps · Prioritization · GTM · Product Discovery · PRDs"},
    {icon:"⚙️",title:"Platform & Technical",items:"APIs · Microservices · SaaS Platforms · Integrations · Workflow Automation"},
    {icon:"📊",title:"Analytics",items:"Experimentation · KPI Definition · Funnel Analysis · Product Analytics"},
    {icon:"🤖",title:"AI & Automation",items:"AI-assisted Workflows · Generative AI · Process Automation"},
    {icon:"🏃",title:"Execution",items:"Agile · Scrum · Stakeholder Management · Cross-functional Leadership"}
  ],
  jobs:[
    {period:"Dec 2024 — Present",company:"Melento",location:"Bengaluru",title:"Senior Product Manager",bullets:["Delivered $200K cost savings through partner optimization and operational automation.","Led AI-assisted workflows (GitHub Copilot), accelerating cycles by ~3×.","Boosted operational efficiency by 40%, saving 240 hrs/week."]},
    {period:"Nov 2023 — Nov 2024",company:"Melento",location:"Bengaluru",title:"Product Manager",bullets:["Owned strategy and GTM for platforms driving 3.6M+ transactions and $250K ARR growth.","Built A/B testing frameworks reducing waste by 40%.","Led API integrations and scalable SaaS workflows."]},
    {period:"Jan 2022 — Nov 2023",company:"Melento",location:"Bengaluru",title:"Associate Product Manager",bullets:["Built payment microservices reducing support tickets by 90% and improving NPS by 10 pts.","Defined user stories and backlog prioritization for Agile delivery."]},
    {period:"Dec 2020 — Jan 2022",company:"Melento",location:"Bengaluru",title:"Key Accounts Manager",bullets:["Managed key banking clients (70% revenue) with 0% churn and 20% YoY growth.","Closed a $1.3M ARR deal through customer-centric solutions."]},
    {period:"Aug 2017 — Dec 2020",company:"Tercept",location:"Bengaluru",title:"Lead Analyst",bullets:["Optimized pricing strategies driving 50–100% revenue growth.","Built analytics dashboards enabling data-driven decisions."]},
    {period:"Jan 2014 — Jul 2017",company:"Symphony 440 Design Group",location:"Bengaluru",title:"Co-founder",bullets:["Built an IoT product from 0→1, achieving $100K ARR.","Owned full product lifecycle — hardware, software, UX, GTM."]}
  ],
  education:{institution:"PES Institute of Technology",degree:"Bachelor of Engineering — Electrical & Electronics · 2013",location:"Bengaluru"},
  targets:["Senior Product Manager","Group Product Manager","Technical Product Manager","AI Product Manager"]
};
let editMode=false,projects=[],projEditMode=false,selFile=null,draftD=null;

const WORDS=["Product Strategy","API-first","AI Automation","B2B SaaS","Payments","Platform Thinking","Agile Delivery","Data-driven","Experimentation","GTM Execution","Microservices","Roadmaps","Stakeholder Management"];
function buildTicker(){const t=document.getElementById('ticker');t.innerHTML=[...WORDS,...WORDS].map(w=>`<span class="tick-item"><span class="dot"></span>${w}</span>`).join('');}
function hl(t){return t.replace(/(\$[\d.,]+[KM+%×]?|\d[\d.,]*[KM+×%]?(?:\s*hrs?\/week|\s*pts?|\s*points?)?|0→1|~3×|\d+%|50–100%)/g,'<span class="hi">$1</span>')}

function render(){
  if(document.getElementById('h-desc')) document.getElementById('h-desc').textContent=D.desc;
  if(document.getElementById('h-email-btn')) document.getElementById('h-email-btn').href='mailto:'+D.email;
  if(document.getElementById('h-li-btn')) document.getElementById('h-li-btn').href=D.linkedin;
  if(document.getElementById('h-loc-card')) document.getElementById('h-loc-card').textContent='📍 '+D.location;
  if(document.getElementById('h-tags')) document.getElementById('h-tags').innerHTML=D.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  if(document.getElementById('sum-text')) document.getElementById('sum-text').innerHTML=hl(D.summary);
  if(document.getElementById('metrics-grid')) document.getElementById('metrics-grid').innerHTML=D.metrics.map(m=>`<div class="metric-card"><div class="metric-num">${m.num}</div><div class="metric-desc">${m.desc}</div></div>`).join('');
  if(document.getElementById('skills-grid')) document.getElementById('skills-grid').innerHTML=D.skills.map(s=>`<div class="skill-card"><div class="skill-icon">${s.icon||'⚡'}</div><div class="skill-title">${s.title}</div><div class="skill-items">${s.items}</div></div>`).join('');
  if(document.getElementById('jobs-list')) document.getElementById('jobs-list').innerHTML=D.jobs.map((j,i)=>`<div class="job-card${i===0?' featured':''}"><div class="job-num">0${i+1}</div><div class="job-title">${j.title}</div><div class="job-co">${j.company}</div><div class="job-period">${j.period} · ${j.location||'Bengaluru'}</div><ul class="job-bullets">${j.bullets.map(b=>`<li>${hl(b)}</li>`).join('')}</ul></div>`).join('');
  if(document.getElementById('edu-card')) document.getElementById('edu-card').innerHTML=`<div class="edu-strip"><div class="edu-icon">🎓</div><div><div class="edu-inst">${D.education.institution}</div><div class="edu-deg">${D.education.degree}</div><div style="font-size:12px;color:var(--ink3);margin-top:4px;font-weight:500">📍 ${D.education.location}</div></div><div class="edu-year">2013</div></div>`;
  if(document.getElementById('targets-wrap')) document.getElementById('targets-wrap').innerHTML=D.targets.map(t=>`<span class="target-pill">${t}</span>`).join('');
  renderProjects();
}
function renderProjects(){
  const g=document.getElementById('proj-grid'),cnt=document.getElementById('proj-count');
  if(!g || !cnt) return;
  cnt.textContent=projects.length?`(${projects.length})`:'';
  document.getElementById('proj-edit-toggle').style.display=projects.length?'inline-block':'none';
  if(!projects.length){g.innerHTML=`<div class="empty-state"><div class="empty-icon">📂</div><div class="empty-text">No projects yet — click "+ Add Project" to showcase your work.</div></div>`;return;}
  g.innerHTML=projects.map((p,i)=>`<div class="proj-card">${projEditMode?`<button class="proj-del" onclick="delProj(${p.id})">Remove</button>`:''}<div class="proj-card-num">Project 0${i+1}</div><div class="proj-title">${p.title}</div>${p.desc?`<div class="proj-desc">${p.desc}</div>`:''} ${p.fn?`<div class="proj-file-badge">📎 ${p.ext} · ${p.fn}</div>`:''}</div>`).join('');
}

// TABS
function showTab(name,el){
  ['portfolio','ask','casestudies','projects','experience'].forEach(t=>{
    const el2=document.getElementById('tab-'+t);
    if(el2) {
      if(t===name) {
        el2.style.display='block';
        setTimeout(() => { el2.classList.remove('hide'); el2.classList.add('show'); }, 10);
      } else {
        el2.classList.remove('show');
        el2.classList.add('hide');
        setTimeout(() => { if(el2.classList.contains('hide')) el2.style.display='none'; }, 300);
      }
    }
  });
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const editEl=document.getElementById('editToggle');
  if(editEl) editEl.style.display=name==='portfolio'?'block':'none';
  setTimeout(() => observeElements(), 50);
}

// CASE STUDY
function openCaseStudy(id){
  document.getElementById('cs-'+id).classList.add('open');
  document.getElementById('cs-'+id).scrollTop=0;
  document.body.style.overflow='hidden';
}
function closeCaseStudy(){
  document.querySelectorAll('.cs-detail').forEach(el=>el.classList.remove('open'));
  document.body.style.overflow='';
}

// ── PAYMENT JOURNEY ────────────────────────────────────────────
let pjCurrentScreen=0,pjTimerInterval=null,pjSelectedMethod='Net Banking',pjSelectedMethodIcon='🏦';

function openPaymentJourney(){
  pjReset();
  document.getElementById('pj-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closePaymentJourney(){
  document.getElementById('pj-overlay').classList.remove('open');
  document.body.style.overflow='';
  pjStopTimer();
}
function pjReset(){
  pjCurrentScreen=0;
  pjSelectedMethod='Net Banking';
  pjSelectedMethodIcon='🏦';
  // Hide all screens including intro
  for(let i=0;i<=5;i++){const s=document.getElementById('pj-s'+i);if(s)s.classList.remove('active');}
  document.getElementById('pj-s0').classList.add('active');
  // Hide step dots and progress on intro screen
  document.getElementById('pj-step-dots').style.opacity='0';
  document.getElementById('pj-prog-bar').style.width='0%';
  pjStopTimer();
  // Reset method tabs
  ['nb','card','upi'].forEach(m=>{
    const tab=document.getElementById('pj-tab-'+m),panel=document.getElementById('pj-panel-'+m);
    if(tab)tab.classList.remove('active');
    if(panel)panel.classList.remove('active');
  });
  document.getElementById('pj-tab-nb').classList.add('active');
  document.getElementById('pj-panel-nb').classList.add('active');
  // Reset bank/upi selections
  document.querySelectorAll('.pj-bank-item').forEach(b=>b.classList.remove('selected'));
  document.querySelectorAll('.pj-upi-app').forEach(a=>a.classList.remove('selected'));
}
function pjGoTo(n){
  document.getElementById('pj-s'+pjCurrentScreen).classList.remove('active');
  pjCurrentScreen=n;
  document.getElementById('pj-s'+n).classList.add('active');
  // Show step dots once journey starts
  document.getElementById('pj-step-dots').style.opacity= n>0 ? '1':'0';
  pjUpdateProgress(n);
  if(n===3){pjStartTimer();pjSetGatewayMethod();}
  if(n===4){pjStopTimer();setTimeout(()=>pjGoTo(5),2600);}
  if(n===5){const now=new Date();document.getElementById('pj-txn-date').textContent=now.toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'});document.getElementById('pj-receipt-method').textContent=pjSelectedMethod;}
}
function pjUpdateProgress(n){
  const pcts=[0,20,40,60,80,100];
  document.getElementById('pj-prog-bar').style.width=pcts[n]+'%';
  for(let i=1;i<=5;i++){
    const dot=document.getElementById('pj-dot-'+i);
    if(!dot)continue;
    dot.classList.remove('active','done');
    if(i===n)dot.classList.add('active');
    else if(i<n)dot.classList.add('done');
  }
}
function pjSwitchMethod(m){
  ['nb','card','upi'].forEach(x=>{
    document.getElementById('pj-tab-'+x).classList.remove('active');
    document.getElementById('pj-panel-'+x).classList.remove('active');
  });
  document.getElementById('pj-tab-'+m).classList.add('active');
  document.getElementById('pj-panel-'+m).classList.add('active');
  if(m==='nb'){pjSelectedMethod='Net Banking';pjSelectedMethodIcon='🏦';}
  else if(m==='card'){pjSelectedMethod='Debit/Credit Card';pjSelectedMethodIcon='💳';}
  else{pjSelectedMethod='UPI';pjSelectedMethodIcon='📱';}
}
function pjSelectBank(el,name){
  document.querySelectorAll('.pj-bank-item').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  pjSelectedMethod='Net Banking — '+name;
  pjSelectedMethodIcon='🏦';
}
function pjSelectUpi(el,name){
  document.querySelectorAll('.pj-upi-app').forEach(a=>a.classList.remove('selected'));
  el.classList.add('selected');
  pjSelectedMethod='UPI — '+name;
  pjSelectedMethodIcon='📱';
}
function pjSetGatewayMethod(){
  document.getElementById('pj-gw-method-icon').textContent=pjSelectedMethodIcon;
  document.getElementById('pj-gw-method-text').textContent=pjSelectedMethod;
}
function pjFormatCard(inp){
  let v=inp.value.replace(/\D/g,'').substring(0,16);
  inp.value=v.match(/.{1,4}/g)?.join('  ')||v;
}
function pjStartTimer(){
  pjStopTimer();
  let t=60;
  const circ=document.getElementById('pj-timer-circle');
  const numEl=document.getElementById('pj-timer-num');
  const txtEl=document.getElementById('pj-timer-text');
  const full=2*Math.PI*45;
  circ.style.strokeDashoffset=0;
  pjTimerInterval=setInterval(()=>{
    t--;
    if(numEl)numEl.textContent=t;
    if(txtEl)txtEl.textContent=t;
    if(circ)circ.style.strokeDashoffset=((60-t)/60)*full;
    if(t<=0){pjStopTimer();const btn=document.getElementById('pj-gw-pay-btn');if(btn){btn.textContent='Session Expired — Try Again';btn.style.background='#374151';btn.onclick=()=>pjGoTo(2);}}
  },1000);
}
function pjStopTimer(){if(pjTimerInterval){clearInterval(pjTimerInterval);pjTimerInterval=null;}}
function pjDownloadInvoice(){
  const method=pjSelectedMethod;
  const now=new Date();
  const dateStr=now.toLocaleString('en-IN',{dateStyle:'long',timeStyle:'short'});
  const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Invoice INV-2024-0892</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;background:#f3f4f6;color:#111827;print-color-adjust:exact}
.page{max-width:680px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,.12)}
.inv-header{background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:36px 40px;color:#fff;display:flex;justify-content:space-between;align-items:flex-start}
.inv-brand{font-size:24px;font-weight:800;letter-spacing:-1px}
.inv-brand span{opacity:.6;font-weight:400;font-size:14px;display:block;margin-top:4px}
.inv-num{text-align:right}
.inv-num h2{font-size:20px;font-weight:700}
.inv-num span{opacity:.65;font-size:13px;display:block;margin-top:4px}
.inv-meta{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:32px 40px;background:#fafafa;border-bottom:1px solid #e5e7eb}
.inv-meta-block label{font-size:11px;font-weight:700;letter-spacing:.5px;color:#6b7280;text-transform:uppercase;display:block;margin-bottom:6px}
.inv-meta-block p{font-size:14px;font-weight:600;color:#111827;line-height:1.6}
.inv-body{padding:32px 40px}
.inv-body h3{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#6b7280;margin-bottom:16px}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{padding:12px 0;text-align:left;border-bottom:1px solid #f3f4f6}
th{font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:.5px}
.amount-col{text-align:right}
.total-row td{border-top:2px solid #e5e7eb;border-bottom:none;font-weight:700;font-size:15px;padding-top:16px}
.paid-badge{display:inline-flex;align-items:center;gap:6px;background:#dcfce7;color:#16a34a;font-weight:700;font-size:13px;padding:8px 16px;border-radius:99px;margin:20px 0}
.txn-box{background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-top:16px}
.txn-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;font-size:13px}
.txn-row:last-child{border-bottom:none}
.txn-key{color:#6b7280}
.txn-val{font-weight:600;color:#111827}
.inv-footer{padding:24px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center}
.inv-footer p{font-size:12px;color:#9ca3af}
@media print{body{background:#fff}.page{box-shadow:none;border-radius:0}}
</style>
</head>
<body>
<div class="page">
  <div class="inv-header">
    <div class="inv-brand">SecurePay<span>Merchant Services</span></div>
    <div class="inv-num"><h2>INVOICE</h2><span>#INV-2024-0892</span></div>
  </div>
  <div class="inv-meta">
    <div class="inv-meta-block"><label>Bill To</label><p>Rahul Sharma<br/>rahul.sharma@company.com<br/>Company Ltd., Bengaluru</p></div>
    <div class="inv-meta-block"><label>Invoice Details</label><p>Date: ${dateStr}<br/>Due Date: 20 May 2024<br/>Invoice #INV-2024-0892</p></div>
  </div>
  <div class="inv-body">
    <h3>Line Items</h3>
    <table>
      <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th class="amount-col">Amount</th></tr></thead>
      <tbody>
        <tr><td>API Platform Subscription (Annual)</td><td>1</td><td>₹3,999</td><td class="amount-col">₹3,999.00</td></tr>
        <tr><td>Onboarding &amp; Setup Fee</td><td>1</td><td>₹750</td><td class="amount-col">₹750.00</td></tr>
        <tr><td>GST @ 18%</td><td>—</td><td>—</td><td class="amount-col">₹855.00</td></tr>
        <tr class="total-row"><td colspan="3">Total Amount</td><td class="amount-col">₹5,604.00</td></tr>
      </tbody>
    </table>
    <div class="paid-badge">✓ Payment Confirmed</div>
    <div class="txn-box">
      <div class="txn-row"><span class="txn-key">Transaction ID</span><span class="txn-val">TXN8842910374</span></div>
      <div class="txn-row"><span class="txn-key">Payment Method</span><span class="txn-val">${method}</span></div>
      <div class="txn-row"><span class="txn-key">Payment Date</span><span class="txn-val">${dateStr}</span></div>
      <div class="txn-row"><span class="txn-key">Amount Paid</span><span class="txn-val">₹5,604.00</span></div>
      <div class="txn-row"><span class="txn-key">Status</span><span class="txn-val" style="color:#16a34a">Paid ✓</span></div>
    </div>
  </div>
  <div class="inv-footer"><p>Thank you for your payment! For support: support@securepay.in</p><p style="color:#9ca3af">SecurePay · PCI DSS Compliant</p></div>
</div>
</body>
</html>`;
  const blob=new Blob([html],{type:'text/html'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='invoice-INV-2024-0892.html';
  a.click();
  URL.revokeObjectURL(a.href);
}

// EDIT
function toggleEdit(){
  editMode=!editMode;
  const b=document.getElementById('editToggle');
  b.classList.toggle('on',editMode);b.textContent=editMode?'✓ Done':'✎ Edit';
  document.getElementById('edit-bar').style.display=editMode?'flex':'none';
  ['hero','sum','met','skl','exp','edu','tgt'].forEach(k=>{const el=document.getElementById(k+'-edit-btn');if(el)el.style.display=editMode?'inline-block':'none';});
  if(!editMode)closeAll();
}
function closeAll(){['hero-form','sum-form','met-form','skl-form','exp-form','edu-form','tgt-form'].forEach(id=>{const el=document.getElementById(id);if(el){el.style.display='none';el.innerHTML='';}});}
function startEdit(key){
  closeAll();draftD=JSON.parse(JSON.stringify(D));
  const m={hero:'hero-form',summary:'sum-form',metrics:'met-form',skills:'skl-form',jobs:'exp-form',education:'edu-form',targets:'tgt-form'};
  const el=document.getElementById(m[key]);el.style.display='block';
  ({hero:rHero,summary:rSum,metrics:rMet,skills:rSkl,jobs:rExp,education:rEdu,targets:rTgt})[key](el);
}
function sc(){D=JSON.parse(JSON.stringify(draftD));render();closeAll();}
function cc(){closeAll();draftD=null;}
function fld(lbl,val,cb){return `<div class="field-group"><label class="form-label">${lbl}</label><input type="text" value="${val.replace(/"/g,'&quot;')}" oninput="${cb}"/></div>`}
const SB=`<div class="edit-btns"><button class="save-btn" onclick="sc()">Save</button><button class="cancel-btn" onclick="cc()">Cancel</button></div>`;
function rHero(el){el.innerHTML=`<div class="edit-grid">${fld('Tagline',draftD.desc,"draftD.desc=this.value")}${fld('Location',draftD.location,"draftD.location=this.value")}${fld('Phone',draftD.phone,"draftD.phone=this.value")}${fld('Email',draftD.email,"draftD.email=this.value")}${fld('LinkedIn URL',draftD.linkedin,"draftD.linkedin=this.value")}<div class="field-group" style="grid-column:1/-1"><label class="form-label">Tags (comma-separated)</label><input type="text" value="${draftD.tags.join(', ')}" oninput="draftD.tags=this.value.split(',').map(t=>t.trim()).filter(Boolean)"/></div></div>${SB}`;}
function rSum(el){el.innerHTML=`<textarea style="width:100%;min-height:130px" oninput="draftD.summary=this.value">${draftD.summary}</textarea>${SB}`;}
function rMet(el){const rows=()=>draftD.metrics.map((m,i)=>`<div style="display:grid;grid-template-columns:110px 1fr 28px;gap:8px;align-items:center;margin-bottom:8px"><input type="text" value="${m.num}" oninput="draftD.metrics[${i}].num=this.value"/><input type="text" value="${m.desc}" oninput="draftD.metrics[${i}].desc=this.value"/><button class="del-row-btn" onclick="draftD.metrics.splice(${i},1);rMet(document.getElementById('met-form'))">×</button></div>`).join('');el.innerHTML=`<div>${rows()}</div><button class="add-row-btn" onclick="draftD.metrics.push({num:'',desc:''});rMet(document.getElementById('met-form'))">+ Add metric</button>${SB}`;}
function rSkl(el){const rows=()=>draftD.skills.map((s,i)=>`<div style="display:grid;grid-template-columns:36px 150px 1fr 28px;gap:8px;align-items:center;margin-bottom:8px"><input type="text" value="${s.icon||''}" oninput="draftD.skills[${i}].icon=this.value" placeholder="🚀"/><input type="text" value="${s.title}" oninput="draftD.skills[${i}].title=this.value"/><input type="text" value="${s.items}" oninput="draftD.skills[${i}].items=this.value"/><button class="del-row-btn" onclick="draftD.skills.splice(${i},1);rSkl(document.getElementById('skl-form'))">×</button></div>`).join('');el.innerHTML=`<div>${rows()}</div><button class="add-row-btn" onclick="draftD.skills.push({icon:'⚡',title:'',items:''});rSkl(document.getElementById('skl-form'))">+ Add skill</button>${SB}`;}
function rExp(el){const rows=()=>draftD.jobs.map((j,i)=>`<div style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:12px;font-weight:800;color:var(--acc)">Role ${i+1}${i===0?' (Featured)':''}</span><button class="del-row-btn" onclick="draftD.jobs.splice(${i},1);rExp(document.getElementById('exp-form'))">× Remove</button></div><div class="edit-grid" style="margin-bottom:8px"><div class="field-group"><label class="form-label">Job Title</label><input type="text" value="${j.title}" oninput="draftD.jobs[${i}].title=this.value"/></div><div class="field-group"><label class="form-label">Company</label><input type="text" value="${j.company}" oninput="draftD.jobs[${i}].company=this.value"/></div><div class="field-group"><label class="form-label">Period</label><input type="text" value="${j.period}" oninput="draftD.jobs[${i}].period=this.value"/></div><div class="field-group"><label class="form-label">Location</label><input type="text" value="${j.location||'Bengaluru'}" oninput="draftD.jobs[${i}].location=this.value"/></div></div><label class="form-label">Bullets (one per line)</label><textarea class="bullet-area" oninput="draftD.jobs[${i}].bullets=this.value.split('\\n').filter(Boolean)">${j.bullets.join('\n')}</textarea></div>`).join('');el.innerHTML=`<div>${rows()}</div><button class="add-row-btn" onclick="draftD.jobs.push({period:'',company:'',location:'Bengaluru',title:'',bullets:['']});rExp(document.getElementById('exp-form'))">+ Add role</button>${SB}`;}
function rEdu(el){el.innerHTML=`<div class="edit-grid">${fld('Institution',draftD.education.institution,"draftD.education.institution=this.value")}${fld('Location',draftD.education.location,"draftD.education.location=this.value")}<div class="field-group" style="grid-column:1/-1"><label class="form-label">Degree</label><input type="text" value="${draftD.education.degree}" oninput="draftD.education.degree=this.value"/></div></div>${SB}`;}
function rTgt(el){el.innerHTML=`<div class="field-group"><label class="form-label">Roles (comma-separated)</label><input type="text" value="${draftD.targets.join(', ')}" oninput="draftD.targets=this.value.split(',').map(t=>t.trim()).filter(Boolean)"/></div>${SB}`;}

// PROJECTS
function openAddProj(){document.getElementById('add-proj-form').style.display='block';}
function closeAddProj(){document.getElementById('add-proj-form').style.display='none';resetForm();}
function resetForm(){document.getElementById('pf-title').value='';document.getElementById('pf-desc').value='';document.getElementById('pf-file').value='';document.getElementById('pf-lbl').innerHTML='Click to upload <strong>PDF</strong> or <strong>PPT/PPTX</strong>';document.getElementById('pf-err').style.display='none';selFile=null;}
function handleFile(inp){const f=inp.files[0];if(!f)return;if(!f.name.match(/\.(pdf|ppt|pptx)$/i)){document.getElementById('pf-err').textContent='Only PDF or PPT/PPTX files allowed.';document.getElementById('pf-err').style.display='block';return;}selFile=f;document.getElementById('pf-lbl').innerHTML=`<span class="file-name">📎 ${f.name}</span>`;document.getElementById('pf-err').style.display='none';}
function saveProject(){const t=document.getElementById('pf-title').value.trim();if(!t){document.getElementById('pf-err').textContent='Title is required.';document.getElementById('pf-err').style.display='block';return;}projects.unshift({id:Date.now(),title:t,desc:document.getElementById('pf-desc').value.trim(),fn:selFile?selFile.name:'',ext:selFile?selFile.name.split('.').pop().toUpperCase():''});closeAddProj();renderProjects();}
function delProj(id){projects=projects.filter(p=>p.id!==id);renderProjects();}
function toggleProjEdit(){projEditMode=!projEditMode;const b=document.getElementById('proj-edit-toggle');b.textContent=projEditMode?'✓ Done':'✎ Manage';renderProjects();}

buildTicker();render();

// ── UI/UX ENHANCEMENTS (Animations & Accessibility) ─────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

function observeElements() {
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement && document.activeElement.getAttribute('tabindex') === '0') {
    document.activeElement.click();
  }
});

setTimeout(observeElements, 100);

// ── ASK VINAY — GROK AI (SECURE CLOUDFLARE WORKER) ──────────────────────────────────────────
const CLOUDFLARE_WORKER_URL = 'https://vinay-portfolio-ai1.braovinay.workers.dev/';

const VINAY_CONTEXT = `
## VINAY B — RESUME & PROFESSIONAL CONTEXT

### CONTACT
- Location: Bengaluru, India 560040
- Phone: 9731736046
- Email: braovinay@gmail.com
- LinkedIn: https://www.linkedin.com/in/vinaybrao/

### PROFESSIONAL SUMMARY
Senior Product Manager with 12+ years of experience across B2B SaaS, platform products, analytics, payments, and AI-enabled automation. Proven track record of building and scaling API-first products, payment microservices, and workflow automation platforms delivering $400K+ ARR growth and $200K+ cost savings. Strong expertise in product strategy, experimentation, platform architecture, cross-functional leadership, and data-driven decision making. Passionate about AI-native products, developer platforms, startups and scalable SaaS ecosystems.

### SKILLS
- Product Strategy: Roadmaps, Prioritization, GTM, Product Discovery, PRDs
- Platform & Technical: APIs, Microservices, SaaS Platforms, Integrations, Workflow Automation
- Analytics: Experimentation, KPI Definition, Funnel Analysis, Product Analytics
- AI & Automation: AI-assisted Workflows, Generative AI, Process Automation
- Execution: Agile, Scrum, Stakeholder Management, Cross-functional Leadership

### WORK HISTORY

**SENIOR PRODUCT MANAGER | Dec 2024 – Present | Melento — Bengaluru**
- Delivered $200K cost savings through partner optimization and operational automation while improving platform efficiency.
- Led adoption of AI-assisted product development workflows (GitHub Copilot), accelerating planning, delivery, and experimentation cycles by ~3x.
- Boosted operational efficiency by 40% by architecting and integrating AI automated workflows saving 240 hrs per week.

**PRODUCT MANAGER | Nov 2023 – Nov 2024 | Melento — Bengaluru**
- Owned product strategy, roadmap, and GTM execution for transaction platforms driving 3.6M+ annual transactions and $250K ARR growth.
- Built product discovery and experimentation frameworks (A/B testing) using analytics and customer insights, reducing waste by 40%.
- Worked closely with engineering teams on API integrations, platform architecture, and scalable SaaS workflows.

**ASSOCIATE PRODUCT MANAGER | Jan 2022 – Nov 2023 | Melento — Bengaluru**
- Built API-driven payment microservices and automation workflows reducing support tickets by 90% and improving NPS by 10%.
- Defined user stories, product requirements, and backlog prioritization, enabling efficient delivery through Agile execution.

**KEY ACCOUNTS MANAGER | Dec 2020 – Jan 2022 | Melento — Bengaluru**
- Drove product-led growth and enterprise expansion, managing key banking clients (70% revenue) with 0% churn and 20% YoY growth.
- Influenced product roadmap and platform capabilities, closing a $1.3M ARR deal through customer-centric solutions.

**LEAD ANALYST | Aug 2017 – Dec 2020 | Tercept — Bengaluru, India**
- Applied data analytics and experimentation to optimize pricing strategies, driving 50–100% revenue growth.
- Built analytics frameworks and dashboards enabling data-driven product decisions and pricing optimization.

**CO-FOUNDER | Jan 2014 – Jul 2017 | Symphony 440 Design Group — Bengaluru, India**
- Built an IoT product from 0→1, achieving $100K ARR via customer-centric design and rapid iteration.
- Owned end-to-end product lifecycle (hardware + software + UX + GTM).

### EDUCATION
- PES Institute of Technology — Bengaluru | Bachelor of Engineering, EEE, 2013

### KEY METRICS & IMPACT
- $400K+ ARR growth delivered
- $200K+ cost savings achieved
- 3.6M+ annual transactions owned
- 240 hrs saved per week via automation
- $1.3M ARR deal closed
- 90% support ticket reduction
- 100K+ transactions/month on payment microservice
- $3M collected monthly through stamp duty payment platform
- Built payment integrations with PhonePe & Razorpay

### TARGET ROLES
Senior Product Manager, Group Product Manager, Technical Product Manager, AI Product Manager
`;

const SYSTEM_PROMPT = `You are Vinay B, a Senior Product Manager with 12+ years of experience. You are answering questions from visitors on your portfolio website.

IMPORTANT RULES:
1. Answer ONLY based on the resume and professional context provided below. Do NOT make up or fabricate any information that is not in the context.
2. Speak in first person as Vinay. Be warm, professional, and confident.
3. When answering behavioral questions ("Tell me about a time..."), use the STAR format (Situation, Task, Action, Result) and ground your answers in the real experiences from the resume.
4. If asked about something not covered in the context, honestly say "That's not something covered in my portfolio, but I'd love to discuss it — feel free to reach out at braovinay@gmail.com or connect on LinkedIn."
5. Keep answers concise but thorough — aim for 150-300 words.
6. Use markdown formatting: **bold** for emphasis, bullet points for lists.
7. Always be authentic — these are real experiences, not hypotheticals.
8. If someone asks irrelevant or off-topic questions (not related to professional/career topics), politely redirect them.

Here is Vinay's complete professional context:
${VINAY_CONTEXT}`;

let askAbortController = null;
let askLoaderTimers = [];

function askSubmit(){
  const input = document.getElementById('ask-input');
  const q = input.value.trim();
  if(!q) return;
  input.value = '';
  askWithGrok(q);
}

function askFromExample(el){
  const q = el.querySelector('.ask-example-text').textContent;
  document.getElementById('ask-input').value = '';
  askWithGrok(q);
}

function updateLoaderSmooth(newText, isHighlight){
  const label = document.getElementById('ask-label');
  const orb = document.getElementById('ask-orb');
  if(!label || !orb) return;

  label.classList.add('fade');
  askLoaderTimers.push(setTimeout(() => {
    const lbl = document.getElementById('ask-label');
    const o = document.getElementById('ask-orb');
    if(!lbl || !o) return;
    lbl.textContent = newText;
    if(isHighlight){
      lbl.classList.add('highlight');
      o.classList.add('pulse');
    } else {
      lbl.classList.remove('highlight');
      o.classList.remove('pulse');
    }
    lbl.classList.remove('fade');
  }, 400));
}

async function askWithGrok(question){
  const exSection = document.getElementById('ask-examples-section');
  const respArea = document.getElementById('ask-response-area');
  exSection.style.display = 'none';
  respArea.classList.add('visible');

  // Show question bubble + dynamic loader box
  respArea.innerHTML = `
    <div class="ask-q-bubble">${escHtml(question)}</div>
    <div class="ask-a-bubble">
      <div class="ask-a-name">Vinay B</div>
      <div id="ask-loader-box">
        <div class="ask-modern-loader">
          <div class="ask-loader-orb" id="ask-orb"></div>
          <div class="ask-loader-label" id="ask-label">Synthesizing Vinay's experiences...</div>
        </div>
      </div>
    </div>
  `;

  // Abort any previous request and clear timers
  if(askAbortController) askAbortController.abort();
  askAbortController = new AbortController();

  askLoaderTimers.forEach(t => clearTimeout(t));
  askLoaderTimers = [];

  // Setup dynamic loader phases with buttery-smooth transitions
  askLoaderTimers.push(setTimeout(() => {
    updateLoaderSmooth("Just a little more time...", true);
  }, 4000));

  askLoaderTimers.push(setTimeout(() => {
    updateLoaderSmooth("Synthesizing Vinay's experiences...", false);
  }, 6000));

  askLoaderTimers.push(setTimeout(() => {
    updateLoaderSmooth("Fetching best possible answer from my vast experience...", true);
  }, 8000));

  askLoaderTimers.push(setTimeout(() => {
    updateLoaderSmooth("Synthesizing Vinay's experiences...", false);
  }, 10000));

  try {
    console.log("[Grok AI Worker] Sending request for question:", question);
    const body = {
      question: question,
      systemPrompt: SYSTEM_PROMPT
    };

    // Implement a 25-second timeout for Worker response
    const timeoutId = setTimeout(() => askAbortController.abort('timeout'), 25000);

    const response = await fetch(CLOUDFLARE_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: askAbortController.signal
    });

    clearTimeout(timeoutId);
    console.log("[Grok AI Worker] Response received with status:", response.status);

    const data = await response.json().catch(() => ({}));

    askLoaderTimers.forEach(t => clearTimeout(t));
    askLoaderTimers = [];

    if(!response.ok){
      console.error("[Grok AI Worker] API Error Data:", data);
      throw new Error(data?.error || data?.message || `Worker error (${response.status}): Could not reach AI service.`);
    }

    // Extract answer text from all possible xAI / Worker response structures
    const text = data?.choices?.[0]?.message?.content || data?.response || data?.text || data?.output || '';
    if(!text.trim()){
      throw new Error("Received empty response from Grok AI Worker. Please try asking again.");
    }

    console.log("[Grok AI Worker] Answer rendered successfully.");
    // Render response with typing transition feel
    respArea.innerHTML = `
      <div class="ask-q-bubble">${escHtml(question)}</div>
      <div class="ask-a-bubble">
        <div class="ask-a-name">Vinay B</div>
        <div class="ask-a-content">${renderMarkdown(text)}</div>
      </div>
      <button class="ask-reset-btn" onclick="askReset()">← Ask another question</button>
    `;

  } catch(err){
    console.error("[Grok AI Worker] Catch Error:", err);
    askLoaderTimers.forEach(t => clearTimeout(t));
    askLoaderTimers = [];

    const isTimeout = err === 'timeout' || err.name === 'AbortError';
    const errMsg = isTimeout 
      ? "Request timed out (25s). Please check your internet connection or verify if your Cloudflare Worker is active."
      : err.message;

    respArea.innerHTML = `
      <div class="ask-q-bubble">${escHtml(question)}</div>
      <div class="ask-error">
        <div class="ask-error-icon">⚠️</div>
        <div class="ask-error-title">Connection Issue</div>
        <div class="ask-error-msg">${escHtml(errMsg)}</div>
        <button class="ask-error-retry" onclick="askWithGrok('${escHtml(question).replace(/'/g,"\\'")}')">Try again</button>
      </div>
      <button class="ask-reset-btn" onclick="askReset()">← Back to questions</button>
    `;
  }
}

function escHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderMarkdown(text){
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/^[-•]\s+(.+)$/gm,'<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, (m) => '<ul>' + m + '</ul>')
    .replace(/<\/ul>\s*<ul>/g, '')
    .replace(/\n\n/g,'</p><p>')
    .replace(/\n/g,'<br>')
    .replace(/^/,'<p>').replace(/$/,'</p>')
    .replace(/<p><\/p>/g,'')
    .replace(/<p>(<ul>)/g,'$1')
    .replace(/(<\/ul>)<\/p>/g,'$1');
}

function askReset(){
  if(askAbortController){ askAbortController.abort(); askAbortController = null; }
  askLoaderTimers.forEach(t => clearTimeout(t));
  askLoaderTimers = [];
  document.getElementById('ask-examples-section').style.display = 'block';
  const respArea = document.getElementById('ask-response-area');
  respArea.classList.remove('visible');
  respArea.innerHTML = '';
  document.getElementById('ask-input').value = '';
}

// ═══════════════════════════════════════════════════════════
// CONTACT POPUP
// ═══════════════════════════════════════════════════════════
function openContactPopup() {
  document.getElementById('contact-popup').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContactPopup() {
  document.getElementById('contact-popup').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeContactPopup();
});

// ═══════════════════════════════════════════════════════════
// FIERY PARTICLE ANIMATION
// ═══════════════════════════════════════════════════════════
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -1000, y: -1000 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Track mouse for subtle interaction
  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Color palette — fiery orange, warm red, soft purple
  const colors = [
    [255, 107, 43],   // orange
    [255, 140, 60],   // light orange
    [232, 69, 60],    // red
    [192, 48, 96],    // magenta
    [157, 78, 221],   // purple
    [123, 47, 190],   // deep purple
    [255, 165, 80],   // warm amber
  ];

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      const side = Math.random();
      // Most particles spawn from the bottom/right area
      if (side < 0.6) {
        // Bottom edge
        this.x = Math.random() * W;
        this.y = H + Math.random() * 40;
      } else if (side < 0.85) {
        // Right edge
        this.x = W + Math.random() * 30;
        this.y = H * 0.5 + Math.random() * H * 0.5;
      } else {
        // Bottom-left
        this.x = Math.random() * W * 0.3;
        this.y = H + Math.random() * 30;
      }
      if (init) {
        this.x = Math.random() * W;
        this.y = H * 0.5 + Math.random() * H * 0.5;
      }
      this.radius = 0.8 + Math.random() * 2.2;
      this.baseRadius = this.radius;
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.r = c[0]; this.g = c[1]; this.b = c[2];
      this.alpha = 0.04 + Math.random() * 0.12;
      this.baseAlpha = this.alpha;

      // Movement: mostly upward and slightly left (like rising embers)
      this.vx = -0.3 + Math.random() * 0.6;
      this.vy = -(0.2 + Math.random() * 0.8);

      // Sinusoidal drift
      this.sinAmp = 0.3 + Math.random() * 0.8;
      this.sinFreq = 0.005 + Math.random() * 0.015;
      this.sinOffset = Math.random() * Math.PI * 2;
      this.age = 0;
      this.maxAge = 300 + Math.random() * 600;
      this.glowSize = 2 + Math.random() * 4;
    }
    update() {
      this.age++;
      // Fade in/out
      const lifeFrac = this.age / this.maxAge;
      if (lifeFrac < 0.1) {
        this.alpha = this.baseAlpha * (lifeFrac / 0.1);
      } else if (lifeFrac > 0.7) {
        this.alpha = this.baseAlpha * (1 - (lifeFrac - 0.7) / 0.3);
      } else {
        this.alpha = this.baseAlpha;
      }

      // Drift
      this.x += this.vx + Math.sin(this.age * this.sinFreq + this.sinOffset) * this.sinAmp;
      this.y += this.vy;

      // Subtle mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.5;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
        this.radius = this.baseRadius * (1 + (120 - dist) / 120 * 0.5);
      } else {
        this.radius = this.baseRadius;
      }

      if (this.age >= this.maxAge || this.y < -20 || this.x < -40 || this.x > W + 40) {
        this.reset(false);
      }
    }
    draw() {
      if (this.alpha <= 0) return;
      // Glow
      const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
      grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},${this.alpha * 0.3})`);
      grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
      ctx.fillStyle = grd;
      ctx.fillRect(this.x - this.glowSize, this.y - this.glowSize, this.glowSize * 2, this.glowSize * 2);
      // Core dot
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
      ctx.fill();
    }
  }

  // Spawn particles — more at bottom area
  const count = 20;
  for (let i = 0; i < count; i++) particles.push(new Particle());

  // Draw flowing fiery lines (like the reference image)
  function drawFlowLines(time) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const yBase = H * (0.75 + i * 0.08);
      const hue = i === 0 ? [255, 107, 43] : i === 1 ? [232, 69, 60] : [157, 78, 221];
      ctx.strokeStyle = `rgba(${hue[0]},${hue[1]},${hue[2]},0.04)`;
      ctx.lineWidth = 1.5 + i * 0.5;
      for (let x = 0; x <= W; x += 3) {
        const y = yBase
          + Math.sin(x * 0.003 + time * 0.0005 + i) * 30
          + Math.sin(x * 0.007 + time * 0.001 + i * 2) * 15
          + Math.cos(x * 0.002 + time * 0.0003) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  let animFrame;
  function animate(time) {
    ctx.clearRect(0, 0, W, H);
    drawFlowLines(time || 0);
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach(p => { p.update(); p.draw(); });
    ctx.globalCompositeOperation = 'source-over';
    animFrame = requestAnimationFrame(animate);
  }
  animate(0);
})();