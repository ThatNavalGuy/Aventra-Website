/* ===== EDIT THESE ===== */
var CONFIG = {
  name: "Aventra",
  inviteUrl: "https://discord.com/oauth2/authorize?client_id=1559053386941206578&permissions=8&integration_type=0&scope=bot",
  supportUrl: "https://discord.gg/q6QBUsB2VG",
  serverId: "",              // Discord server ID for the widget (enable Widget in Server Settings)

  /* Stats row. Put real numbers here (e.g. server count) once you have them. */
  stats: [
    ["13", "Command categories"],
    ["3", "Protection systems"],
    ["!", "Command prefix"],
    ["1 min", "Typical setup"]
  ],

  /* Status card. Static text: update it by hand, or set statusUrl to a real status page. */
  statusUrl: "",
  status: [
    ["Discord Bot", "Aventra"]
  ],

  features: [
    ["shield", "Protection", "Antinuke, antiraid, and tripwire keep bad actors out of your server."],
    ["lock", "Moderation", "Timeouts, bans, and numbered cases with reasons and durations."],
    ["zap", "Automod", "Automatic message moderation that follows the rules you set."],
    ["file", "Logging", "Server event logs your team can review at any time."],
    ["check", "Verification", "Verify new members, including Roblox account verification."],
    ["cal", "Posts and utility", "Scheduled posts plus server, member, and helper tools."]
  ],

  premiumText: "Unlock extra commands and tools for your server with Premium.",
  premium: [
    ["music", "Music", "Track playback and voice controls."],
    ["star", "Premium commands", "A catalog of commands only available with Premium."]
  ],

  /* Team. Replace the example, or set team: [] to hide the section.
     Add an avatar image with img: "team/you.png" if you want one. */
  teamText: "The people behind the bot.",
  team: [
    { name: "Your name", role: "Founder", bio: "Add a short line about what you do.", tags: ["Development", "Support"] }
  ],

  commands: [
    ["Information","Help, status, prefix, and appearance."],
    ["Antinuke","Anti-nuke protection commands."],
    ["Antiraid","Anti-raid protection commands."],
    ["Automod","Automatic message moderation commands."],
    ["Moderation","Member and channel actions, like !mute @user 10m."],
    ["Logging","Server event logging commands."],
    ["Tripwire","Tripwire protection commands."],
    ["Verification","Member verification commands, including Roblox verification."],
    ["Premium","Premium-only command catalog."],
    ["Music","Premium-only track playback and voice controls."],
    ["Utility","Server, member, and helper tools."],
    ["Post","Scheduled post commands."],
    ["Settings","Server settings commands."]
  ],
  demo: {
    "!help":{t:"",e:["Aventra","Prefix: ! · 13 categories<br><br>Welcome to Aventra, a multi-server security and utility bot built to help keep your community safe, organized, and running smoothly.<br><br>Browse moderation, protection, automation, utility, music, premium tools, and more with the dropdown below."]},
    "!mute @Sam 10m":{t:"",e:["✓ | Sam has been timed out for 10 minutes.","Reason: none<br>Case: #1"]},
    "Quote of the Day":{auto:true,t:"",e:["Quote of the Day","The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.<br><br>— <b style='display:inline'>Helen Keller</b><br><small style='opacity:.6'>Next quote in a day</small>"]}
  }
};
/* ====================== */

var $=function(s,r){return (r||document).querySelector(s)};
var ICONS={
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  check:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2z"/>'
};
function ico(k){return '<div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[k]+'</svg></div>'}
function item(a){return '<div class="item">'+ico(a[0])+'<h3>'+a[1]+'</h3><p>'+a[2]+'</p></div>'}

document.title=CONFIG.name+" – Discord Bot";
document.querySelectorAll(".bn").forEach(function(n){n.textContent=CONFIG.name});
document.querySelectorAll("[data-invite]").forEach(function(a){a.href=CONFIG.inviteUrl;if(CONFIG.inviteUrl!=="#"){a.target="_blank";a.rel="noopener"}});
document.querySelectorAll("[data-support]").forEach(function(a){a.href=CONFIG.supportUrl;if(CONFIG.supportUrl!=="#"){a.target="_blank";a.rel="noopener"}});
var now=new Date();
$("#yr").textContent=now.getFullYear();
var ds=now.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
$("#d1").textContent=ds;$("#d2").textContent=ds;

/* home sections */
$("#stats").innerHTML=CONFIG.stats.map(function(s){return '<div class="stat"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join("");

if(CONFIG.status.length){
  $("#statusbox").innerHTML=
    '<div class="stat-head"><span class="dot"></span>System status</div>'+
    '<div class="pill">All systems operational</div>'+
    '<p class="sub" style="margin-bottom:6px">Live status of our services.</p>'+
    CONFIG.status.map(function(s){return '<div class="svc"><div><b>'+s[0]+'</b><small>'+s[1]+'</small></div><span class="ok"><span class="dot"></span>Operational</span></div>'}).join("")+
    (CONFIG.statusUrl?'<a class="more" href="'+CONFIG.statusUrl+'" target="_blank" rel="noopener">View full status page →</a>':'');
  $("#footstatus").innerHTML='<span class="dot"></span>All systems operational';
}else{$("#status").style.display="none"}

$("#featlist").innerHTML=CONFIG.features.map(item).join("");
$("#premsub").textContent=CONFIG.premiumText;
$("#premlist").innerHTML=CONFIG.premium.map(item).join("");

if(CONFIG.team.length){
  $("#teamsub").textContent=CONFIG.teamText;
  $("#teamlist").innerHTML=CONFIG.team.map(function(m){
    return '<div class="item member"><div class="avatar">'+(m.img?'<img src="'+m.img+'" alt="">':m.name.charAt(0).toUpperCase())+'</div><div><h3>'+m.name+'</h3><div class="role">'+m.role+'</div><p>'+m.bio+'</p><div class="tags">'+(m.tags||[]).map(function(t){return '<span class="tag">'+t+'</span>'}).join("")+'</div></div></div>';
  }).join("");
}else{$("#team").style.display="none"}

$("#cmdlist").innerHTML=CONFIG.commands.map(function(c){return '<div class="cmd"><code>'+c[0]+'</code><span>'+c[1]+'</span></div>'}).join("");

/* demo chat */
function chat(msgsId,chipsId){
  var box=$(msgsId),chips=$(chipsId);
  function add(html){var d=document.createElement("div");d.className="m";d.innerHTML=html;box.appendChild(d);box.scrollTop=box.scrollHeight}
  function bot(r){
    add('<div class="av bot"><svg viewBox="0 0 1254 1254"><use href="#mark"/></svg></div><div><div class="who">'+CONFIG.name+'<small>BOT</small></div>'+
      (r.t?'<div class="bubble">'+r.t+'</div>':'')+'<div class="embed"><b>'+r.e[0]+'</b>'+r.e[1]+'</div></div>');
  }
  Object.keys(CONFIG.demo).forEach(function(k){
    var b=document.createElement("button");b.className="chip";b.textContent=k;
    b.onclick=function(){
      if(!CONFIG.demo[k].auto)add('<div class="av">Y</div><div><div class="who">You</div><div class="bubble">'+k+'</div></div>');
      setTimeout(function(){bot(CONFIG.demo[k])},350);
    };
    chips.appendChild(b);
  });
  bot(CONFIG.demo["!help"]);
}
chat("#msgs2","#chips2");

/* widget */
$("#widgetbox").innerHTML = CONFIG.serverId
  ? '<iframe class="frame" title="Discord server widget" src="https://discord.com/widget?id='+CONFIG.serverId+'&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>'
  : '<div class="note">Join our support server for help, updates, and to suggest features.</div>';

/* mobile menu */
var burger=$("#burger"),links=$("#links");
function menu(open){links.classList.toggle("open",open);burger.setAttribute("aria-expanded",open)}
burger.onclick=function(){menu(!links.classList.contains("open"))};
links.addEventListener("click",function(e){if(e.target.closest("a"))menu(false)});

/* router (views + in-page sections on home) */
var views=["home","demo","commands","community","privacy","terms"];
var sections=["status","features","premium","team"];
function route(){
  var h=(location.hash||"#home").slice(1),sec=null;
  if(sections.indexOf(h)>=0){sec=h;h="home"}
  if(views.indexOf(h)<0)h="home";
  views.forEach(function(v){$("#v-"+v).classList.toggle("on",v===h)});
  document.querySelectorAll(".links a.l").forEach(function(a){a.classList.toggle("on",a.dataset.v===h||(h==="terms"&&a.dataset.v==="privacy"))});
  if(sec){var el=document.getElementById(sec);if(el)el.scrollIntoView()}else window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);route();
