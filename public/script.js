/* ===== EDIT THESE ===== */
var CONFIG = {
  name: "Aventra",
  inviteUrl: "https://discord.com/oauth2/authorize?client_id=1559053386941206578&permissions=8&integration_type=0&scope=bot",
  supportUrl: "https://discord.gg/q6QBUsB2VG",
  serverId: "",              // Discord server ID for the widget (enable Widget in Server Settings)
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
document.title=CONFIG.name+" – Discord Bot";
document.querySelectorAll(".bn").forEach(function(n){n.textContent=CONFIG.name});
document.querySelectorAll("[data-invite]").forEach(function(a){a.href=CONFIG.inviteUrl;if(CONFIG.inviteUrl!=="#"){a.target="_blank";a.rel="noopener"}});
document.querySelectorAll("[data-support]").forEach(function(a){a.href=CONFIG.supportUrl;if(CONFIG.supportUrl!=="#"){a.target="_blank";a.rel="noopener"}});
var now=new Date();
$("#yr").textContent=now.getFullYear();
var ds=now.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
$("#d1").textContent=ds;$("#d2").textContent=ds;

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
chat("#msgs","#chips");chat("#msgs2","#chips2");

/* widget */
$("#widgetbox").innerHTML = CONFIG.serverId
  ? '<iframe class="frame" title="Discord server widget" src="https://discord.com/widget?id='+CONFIG.serverId+'&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>'
  : '<div class="note">Join our support server for help, updates, and to suggest features.</div>';

/* router */
var views=["home","demo","commands","community","privacy","terms"];
function route(){
  var h=(location.hash||"#home").slice(1);if(views.indexOf(h)<0)h="home";
  views.forEach(function(v){$("#v-"+v).classList.toggle("on",v===h)});
  document.querySelectorAll("nav a.l").forEach(function(a){a.classList.toggle("on",a.dataset.v===h||(h==="terms"&&a.dataset.v==="privacy"))});
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);route();
