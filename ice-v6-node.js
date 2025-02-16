const WebSocket = require('ws');
const https = require('https');
const cheerio = require('cheerio');
function LUNA(o, pN, c) {let v = o[pN];Object.defineProperty(o, pN, {get() {return v;},set(nV) {if (nV !== v) {const oV = v;v = nV;c(nV, oV);}},});}
const datsa = {ev: 10};
function gg(e,x) {
  datsa.ev = [e,x,Math.ceil(Math.random()*100000+1)]
}
const de={join:10,exit:10,report:10,word:10}
    function g(e, x,s,d,a) {
        switch(e){
            case 'exit':
  de.exit = [e,x,Math.ceil(Math.random()*100000+1)];
                break;
                            case 'exit':
  de.exit = [e,x,Math.ceil(Math.random()*100000+1)];
                break;
                            case 'join':
  de.join = [e,x,s,d,a,Math.ceil(Math.random()*100000+1)];
                break;
                            case 'report':
  de.report = [e,x,Math.ceil(Math.random()*100000+1)];
                break;
                
                            case 'word':
  de.word= [e,x,Math.ceil(Math.random()*100000+1)];
                break;
}}
const wss = new WebSocket.Server({ port: 8081});
wss.on('connection', function connection(ws) {
  console.log('Client connected');
  ws.on('message', function incoming(message) {	
        wss.clients.forEach(function each(client) {
        	LUNA(de, 'word', (nV, oV) => {
        	ws.send(JSON.stringify({word:nV[1]}))
        	})
    console.log('Received: %s', message);
    const msg = (typeof message === 'string') ? message : message.toString();
let gO = -4, d = new Date(),aD = new Date(d.getTime() + (gO * 60 * 60 * 1000)),iS= aD.toISOString(),dT=iS.split("T");
try {
let m=JSON.parse(msg);
let obj={
'user':m.user,
'cmd':m.cmd,
'dd':dT[0],
'dh':dT[1]
};
if(m.room){ let sE=[{"id":30,"name":"Others / Generic"},{"id":1,"name":"General"},{"id":2,"name":"Animals"},{"id":28,"name":"Animes"},{"id":27,"name":"Bands"},{"id":9,"name":"Cartoons"},{"id":19,"name":"Clash Royale"},{"id":38,"name":"Crazy"},{"id":23,"name":"Dota"},{"id":22,"name":"Dragon Ball"},{"id":16,"name":"Flags"},{"id":33,"name":"FNAF"},{"id":4,"name":"Foods"},{"id":17,"name":"Football"},{"id":32,"name":"Fortnite"},{"id":21,"name":"Game of Thrones"},{"id":12,"name":"Games"},{"id":37,"name":"Halloween"},{"id":18,"name":"Harry Potter"},{"id":6,"name":"Jobs"},{"id":26,"name":"Logos"},{"id":11,"name":"LoL"},{"id":20,"name":"Lord of Rings"},{"id":14,"name":"Marvel / DC"},{"id":31,"name":"Minecraft"},{"id":8,"name":"Movies"},{"id":35,"name":"Naruto"},{"id":3,"name":"Objects"},{"id":13,"name":"Personalities"},{"id":7,"name":"Pokemon"},{"id":15,"name":"Series"},{"id":10,"name":"Songs"},{"id":29,"name":"Sports"},{"id":34,"name":"Star Wars"},{"id":25,"name":"Streamers"},{"id":36,"name":"The Sims"},{"id":5,"name":"Verbs"},{"id":24,"name":"Youtubers"}];
let lE=[{"id":23,"name":"Azərbaycanca","iso":"az","active":1,"subjects":[1,7]},{"id":45,"name":"Bahasa Indonesia","iso":"id","active":1,"subjects":[1,7,2,3,4,16,6,26,28,35,12,31,8,14]},{"id":11,"name":"Čeština","iso":"cs","active":1,"subjects":[1,3,2,7,4]},{"id":14,"name":"Deutsch","iso":"de","active":1,"subjects":[1,3,2,7]},{"id":2,"name":"English","iso":"en","active":1,"subjects":[1,3,2,4,5,6,7,16,11,14,31,19,23,26,18,35,8,12,9,37,33]},{"id":3,"name":"Español","iso":"es","active":1,"subjects":[1,3,2,4,5,6,7,37]},{"id":4,"name":"Français","iso":"fr","active":1,"subjects":[1,3,2,4,5,6,7]},{"id":6,"name":"Italiano","iso":"it","active":1,"subjects":[1,3,2,4,5,6,7]},{"id":44,"name":"Magyar","iso":"hu","active":1,"subjects":[1,7]},{"id":18,"name":"Nederlands","iso":"nl","active":1,"subjects":[1,3,2,7]},{"id":10,"name":"Polski","iso":"pl","active":1,"subjects":[1,3,2,7]},{"id":1,"name":"Português","iso":"pt","active":1,"subjects":[1,3,2,4,5,6,7,31,14,16,12,17,11,8,26,23,35,18,28,9,19,32,33,37,15,27,38,13]},{"id":58,"name":"Română","iso":"ro","active":1,"subjects":[1,7]},{"id":22,"name":"Slovenčina","iso":"sk","active":1,"subjects":[1,3,2,7]},{"id":13,"name":"Tiếng Việt","iso":"vi","active":1,"subjects":[1,7]},{"id":8,"name":"Türkçe","iso":"tr","active":1,"subjects":[1,3,2,7,4,6,16,31,14,11,5,26]},{"id":21,"name":"български език","iso":"bg","active":1,"subjects":[1,3,2,7]},{"id":7,"name":"Русский","iso":"ru","active":1,"subjects":[1,3,2,7]},{"id":40,"name":"עברית","iso":"he","active":1,"subjects":[1,7]},{"id":19,"name":"العربية","iso":"ar","active":1,"subjects":[1,7,3]},{"id":34,"name":"فارسی","iso":"fa","active":1,"subjects":[1,7]},{"id":12,"name":"ภาษาไทย","iso":"th","active":1,"subjects":[1,7,2,4,3,6]},{"id":16,"name":"中文 (简化字)","iso":"zh-cn","active":1,"subjects":[1,3,2,7,4,6,11,31,28]},{"id":9,"name":"中文 (臺灣)","iso":"zh-tw","active":1,"subjects":[1,3,2,7,4,6,31,16,28,35]},{"id":17,"name":"中文 (香港)","iso":"zh-hk","active":1,"subjects":[1,3,2,7,4]},{"id":15,"name":"日本語","iso":"ja","active":1,"subjects":[1,7]},{"id":20,"name":"한국어","iso":"ko","active":1,"subjects":[1,3,7]},{"id":26,"name":"Afrikaans","iso":"af","active":0,"subjects":[]},{"id":55,"name":"Bahasa Melayu","iso":"ms","active":0,"subjects":[]},{"id":30,"name":"Català","iso":"ca","active":0,"subjects":[]},{"id":31,"name":"Dansk","iso":"da","active":0,"subjects":[]},{"id":33,"name":"Eesti","iso":"et","active":0,"subjects":[]},{"id":67,"name":"Esperanto","iso":"eo","active":0,"subjects":[]},{"id":36,"name":"Føroyskt","iso":"fo","active":0,"subjects":[]},{"id":37,"name":"Gaeilge","iso":"ga","active":0,"subjects":[]},{"id":38,"name":"Galego","iso":"gl","active":0,"subjects":[]},{"id":43,"name":"Hrvatski","iso":"hr","active":0,"subjects":[]},{"id":46,"name":"Íslenska","iso":"is","active":0,"subjects":[]},{"id":66,"name":"Kurdî","iso":"ku","active":0,"subjects":[]},{"id":52,"name":"Latviešu","iso":"lv","active":0,"subjects":[]},{"id":50,"name":"Lëtzebuergesch","iso":"lb","active":0,"subjects":[]},{"id":68,"name":"Lietuvių","iso":"lt","active":0,"subjects":[]},{"id":56,"name":"Malti","iso":"mt","active":0,"subjects":[]},{"id":53,"name":"Mакедонски","iso":"mk","active":0,"subjects":[]},{"id":65,"name":"Norsk","iso":"nb","active":0,"subjects":[]},{"id":61,"name":"Shqip","iso":"sq","active":0,"subjects":[]},{"id":59,"name":"Slovenščina","iso":"sl","active":0,"subjects":[]},{"id":35,"name":"Suomi","iso":"fi","active":0,"subjects":[]},{"id":24,"name":"Svenska","iso":"sv","active":0,"subjects":[]},{"id":62,"name":"Türkmen","iso":"tk","active":0,"subjects":[]},{"id":64,"name":"Yorùbá","iso":"yo","active":0,"subjects":[]},{"id":32,"name":"Ελληνικά","iso":"el","active":0,"subjects":[]},{"id":27,"name":"Беларуская","iso":"be","active":0,"subjects":[]},{"id":29,"name":"Босански","iso":"bs","active":0,"subjects":[]},{"id":54,"name":"Монгол Хэл","iso":"mn","active":0,"subjects":[]},{"id":60,"name":"Српски","iso":"sr","active":0,"subjects":[]},{"id":63,"name":"Українська","iso":"uk","active":0,"subjects":[]},{"id":49,"name":"Қазақ Tілі","iso":"kk","active":0,"subjects":[]},{"id":42,"name":"Հայերեն","iso":"hy","active":0,"subjects":[]},{"id":41,"name":"हिन्दी","iso":"hi","active":0,"subjects":[]},{"id":28,"name":"বাংলা","iso":"bn","active":0,"subjects":[]},{"id":39,"name":"ગુજરાતી","iso":"gu","active":0,"subjects":[]},{"id":51,"name":"ພາສາລາວ","iso":"lo","active":0,"subjects":[]},{"id":57,"name":"မြန်မာစကား","iso":"my","active":0,"subjects":[]},{"id":47,"name":"ქართული","iso":"ka","active":0,"subjects":[]},{"id":25,"name":"ኣማርኛ","iso":"am","active":0,"subjects":[]},{"id":48,"name":"ភាសាខ្មែរ","iso":"km","active":0,"subjects":[]}]  
 let emSL=[];function getSL(s, l) {const sO=sE.find(item => item.id === s);const lO= lE.find(item => item.id === l);if(sO && lO) {emSL=[sO.name,lO.name]; return emSL;}}
    
fetch("https://gartic.io/req/list/?language[]="+parseInt(m.language)+(m.subject==="all"?'':"&subject[]="+parseInt(m.subject))).then(response => response.json())
    .then(data => {
        let htmlContent = "";
        data.forEach(i=> {
            if (i.quant > 0) {
            	ws.send(JSON.stringify({"roomadd":(i.code+"|"+i.quant+"/"+i.max+"|"+getSL(i.subject, i.lang)+"|"+(i.official ? '✅' : '☑')+"| GOAL/POINTS: "+i.points+"/"+i.goal)}))
            	}
})})
}
  let currentConnection = null;

if(m.viewer){    
    const url = 'https://gartic.io/server2?check=1&v3=1&room='+m.viewer;
    const opte = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0'
        },
    };

    https.get(url, opte, (response) => {
        let data = '';
        let cek=response.headers['set-cookie'];
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {  
            if(currentConnection){
                currentConnection.close();
            }

            currentConnection = new WebSocket('wss://'+data.split("https://")[1].split(".")[0]+'.gartic.io/socket.io/?c=528661&EIO=3&transport=websocket', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
                    'Cookie':cek
                }
            });

            currentConnection.on('open', () => {
                currentConnection.send('42[12,{"v":20000,"nick":"User4275","avatar":0,"platform":0,"sala":"'+m.viewer.substring(2)+'"}]');

            });

            currentConnection.on('message', (data) => {

                let e=data.toString();
                                	                if(e.indexOf('42["5"')!=-1){
                                	                         let ikd=setInterval(()=>{
               currentConnection.readyState==1?currentConnection.send('2'):clearInterval(ikd)
                    },3000);
                                	currentConnection.send("42[46,0]")
                                	}
                ws.send(data.toString())
            });
        });
    });
}
if(m.cmd){
	let ff=JSON.parse(m.cmd);
	switch(ff[0]){
		case "join":
		g("join",ff[1],ff[2],ff[3],ff[4],ff[5])
		break;
		case "report":
		gg("report",ff[1]);
		break;
		case "kick":
		gg("kick",ff[1]);
		break;
		case "broadcast":
		gg("broadcast",ff[1]);
		break;
		case "msg":
		gg("msg",ff[1]);
		break;
		case "answer":
		gg("answer",ff[1]);
		break;
		case "tips":
		gg("tips",ff[1]);
		break;
		case "jump":
		gg("jump",ff[1]);
		break;
		case "exit":
		gg("exit");
		break;
		
		
}
	}
} catch(e){};
})
  });
});
  function random(a){ return a[Math.floor(Math.random()*a.length)]};
     let inv= ['឴','‏','឵','­','͏','‎','𝅹','⁡'];
     
function aT(m, n) {
  let cC = "";  switch(n) {
case 1: cC="\u0300"; break;
case 2: cC="\u0301"; break;
case 3: cC="\u0302"; break;
case 4: cC="\u0303"; break; 
case 5: cC="\u0304"; break; 
case 6: cC="\u0305"; break; 
case 7: cC="\u0306"; break; 
case 8: cC="\u0307"; break;
case 9: cC="\u0308"; break; 
case 10: cC="\u0309"; break; 
case 11: cC="\u030a"; break; 
case 12: cC="\u030b"; break; 
case 13: cC="\u030c"; break; 
case 14: cC="\u030d"; break; 
case 15: cC="\u030e"; break; 
case 16: cC="\u030f"; break;
case 17: cC="\u0310"; break; 
case 18: cC="\u0311"; break; 
case 19: cC="\u0312"; break; 
case 20: cC="\u0313"; break; 
case 21: cC="\u0314"; break; 
case 22: cC="\u0315"; break; 
case 23: cC="\u0316"; break; 
case 24: cC="\u0317"; break;
case 25: cC="\u0318"; break; 
case 26: cC="\u0319"; break; 
case 27: cC="\u031a"; break; 
case 28: cC="\u031b"; break; 
case 29: cC="\u031c"; break; 
case 30: cC="\u031d"; break; 
case 31: cC="\u031e"; break; 
case 32: cC="\u031f"; break;
case 33: cC="\u0320"; break; 
case 34: cC="\u0321"; break; 
case 35: cC="\u0322"; break; 
case 36: cC="\u0323"; break; 
case 37: cC="\u0324"; break; 
case 38: cC="\u0325"; break; 
case 39: cC="\u0326"; break; 
case 40: cC="\u0327"; break;
case 41: cC="\u0328"; break; 
case 42: cC="\u0329"; break; 
case 43: cC="\u032a"; break; 
case 44: cC="\u032b"; break; 
case 45: cC="\u032c"; break; 
case 46: cC="\u032d"; break; 
case 47: cC="\u032e"; break; 
case 48: cC="\u032f"; break;
case 49: cC="\u0330"; break; 
case 50: cC="\u0331"; break; 
case 51: cC="\u0332"; break; 
case 52: cC="\u0333"; break; 
case 53: cC="\u0334"; break; 
case 54: cC="\u0335"; break; 
case 55: cC="\u0336"; break; 
case 56: cC="\u0337"; break;
case 57: cC="\u0338"; break; 
case 58: cC="\u0339"; break; 
case 59: cC="\u033a"; break; 
case 60: cC="\u033b"; break; 
case 61: cC="\u033c"; break; 
case 62: cC="\u033d"; break; 
case 63: cC="\u033e"; break; 
case 64: cC="\u033f"; break;
case 65: cC="\u0340"; break; 
case 66: cC="\u0341"; break; 
case 67: cC="\u0342"; break; 
case 68: cC="\u0343"; break; 
case 69: cC="\u0344"; break; 
case 70: cC="\u0345"; break; 
case 71: cC="\u0346"; break; 
case 72: cC="\u0347"; break;
case 73: cC="\u0348"; break; 
case 74: cC="\u0349"; break; 
case 75: cC="\u034a"; break; 
case 76: cC="\u034b"; break; 
case 77: cC="\u034c"; break; 
case 78: cC="\u034d"; break; 
case 79: cC="\u034e"; break; 
case 80: cC="\u034f"; break;
case 81: cC="\u0350"; break; 
case 82: cC="\u0351"; break; 
case 83: cC="\u0352"; break; 
case 84: cC="\u0353"; break; 
case 85: cC="\u0354"; break; 
case 86: cC="\u0355"; break; 
case 87: cC="\u0356"; break; 
case 88: cC="\u0357"; break;
case 89: cC="\u0358"; break; 
case 90: cC="\u0359"; break; 
case 91: cC="\u035a"; break; 
case 92: cC="\u035b"; break; 
case 93: cC="\u035c"; break; 
case 94: cC="\u035d"; break; 
case 95: cC="\u035e"; break; 
case 96: cC="\u035f"; break;
case 97: cC="\u0360"; break; 
case 98: cC="\u0361"; break; 
case 99: cC="\u0362"; break; 
case 100: cC="\u0363"; break; 
case 101: cC="\u0364"; break; 
case 102: cC="\u0365"; break; 
case 103: cC="\u0366"; break; 
case 104: cC="\u0367"; break;
case 105: cC="\u0368"; break; 
case 106: cC="\u0369"; break; 
case 107: cC="\u036a"; break; 
case 108: cC="\u036b"; break; 
case 109: cC="\u036c"; break; 
case 110: cC="\u036d"; break; 
case 111: cC="\u036e"; break; 
case 112: cC="\u036f"; break;
  } let nT = "";for (let i = 0; i < m.length; i++) {if (m[i] !== " ") {nT += m[i] + cC;} else {nT += m[i];}} return nT;}
  function rnext(kelime) { const hd = kelime.split(''); const hu = hd.length; const yh = []; const invisibleChars = ['\u200B', '\u200C', '\u200D', '\u2061', '\u2062', '\u2063', '\u2064', '\u2066', '\u17b4', '\u17b5', '\u2068', '\u2069']; let charCount = 0; for (let i = 0; i < hu; i++) {yh.push(hd[i]);charCount++;if (charCount < 18 && i < hu - 1) { const invisibleChar = invisibleChars[Math.floor(Math.random() * invisibleChars.length)]; yh.push(invisibleChar); charCount++;}if (charCount >= 18) { break;} } return yh.join('');}
     function em(p){
  let iC = ['\uFE00', '\uFE01', '\uFE02', '\uFE03', '\uFE04', '\uFE05', '\uFE06', '\uFE07', '\uFE08', '\uFE09', '\uFE0A', '\uFE0B', '\uFE0C', '\uFE0D', '\uFE0E', '\uFE0F','\u206F','\u206E','\u200B', '\u200C', '\u200D', '\u2061', '\u2062', '\u2063', '\u2064', '\u2066', '\u17b4', '\u17b5', '\u2068', '\u2069'];
  let niC = 18 - p.length;  
  for(let i = 0; i < niC; i++){
    let rP = Math.floor(Math.random() * p.length);
    let rC = iC[Math.floor(Math.random() * iC.length)];   
    p = p.slice(0, rP) + rC + p.slice(rP);
  }  
  return p;
};
function gRc() { const eR = [128512, 128591, 128640, 128767, 129280, 129535];  let c; do {
    c = Math.floor(Math.random() * 2801);
  } while (eR.some(range => c >= range && c <= range + 127));  return c;}
function gRcs() {const cs = [];for (let i = 0; i < 17; i++) {  cs.push(String.fromCharCode(gRc())); } return cs;}
   let etL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function shuffle(a) {for (let i = a.length - 1; i > 0; i--) {let j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]];}  return a;}
let hh = '';
let sev2 = '';
const optv = {
  hostname: 'cdn.proxyium.com',
  path: '/proxyrequest.php',
  method: 'POST',
  headers: {
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    Referer: "https://proxyium.com/",
    "Referrer-Policy": "no-referrer-when-downgrade"
  }
};
const rez = https.request(optv, ress => {
  hh = ress.headers.location.split("/")[3];
  let is = ['185.246.87.210', '95.214.53.28', '185.246.85.103', '195.3.223.101', '185.246.85.105', '195.3.220.223', '185.16.38.230', '146.19.24.59', '195.3.220.74', '108.181.88.29', '108.181.88.105', '108.181.88.107', '199.71.214.89', '185.246.86.208', '185.246.87.7', '185.246.86.211', '95.214.53.33','178.170.49.7'];
  is.forEach(as => {
    https.get('https://' + as + '/' + hh, (r) => {
      sev2 = r.headers['set-cookie'];
      console.log(r.statusCode + "-" + as);
    });
  });
});
rez.write('type=&proxy_country=pl&url=Example.com');
rez.end();
const url = 'https://www.croxyproxy.rocks';
https.get(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    const $ = cheerio.load(data);
    const hi = $('#request > input[type=hidden]').val();
    console.log(hi);
    const postData = "url=example.com&proxyServerId=63&csrf=" + hi + "&demo=0&frontOrigin=https://www.croxyproxy.rocks";
    const options = {
      hostname: 'www.croxyproxy.rocks',
      path: '/requests?fso=',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = https.request(options, (res) => {
      let responseData = '';
      let locationHeader = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        console.log('Response Data:', responseData);
        console.log('Location Header:', locationHeader);
      });
      locationHeader = res.headers['location'];
      let ips = ['108.181.21.229','108.181.33.135','108.181.33.117','108.181.33.119','108.181.34.57','108.181.34.71','108.181.30.85','108.181.34.149','108.181.32.49','108.181.32.73','108.181.32.55','108.181.32.61','108.181.32.59','108.181.43.67','108.181.34.45','108.181.24.243','108.181.34.177','108.181.34.157','195.3.223.166','195.3.223.164','146.19.24.89','195.3.222.15','185.16.39.161','95.214.53.145','95.214.53.152','108.181.8.179','108.181.9.39','108.181.11.39','108.181.6.89','208.87.240.203','208.87.240.219','208.87.240.251','208.87.241.149','108.181.4.237','208.87.241.209','108.181.4.241','208.87.240.35','108.181.5.29','208.87.242.233','208.87.240.67','95.214.53.48','195.3.222.40','185.225.191.49','185.225.191.57','108.181.11.173','108.181.11.193','108.181.11.137','108.181.11.171','108.181.11.175','185.16.39.144','185.16.39.213','178.211.139.238','185.246.84.18','185.246.84.66','108.181.90.163','108.181.90.129','208.87.241.75','199.71.214.121','108.181.5.31','108.181.54.41','108.181.3.225','108.181.5.51',
'185.246.87.210', '95.214.53.28', '185.246.85.103', '195.3.223.101', '185.246.85.105', '195.3.220.223', '185.16.38.230', '146.19.24.59', '195.3.220.74', '108.181.88.29', '108.181.88.105', '108.181.88.107', '199.71.214.89', '185.246.86.208', '185.246.87.7', '185.246.86.211', '95.214.53.33','178.170.49.7'];
let sdf=['185.246.87.210', '95.214.53.28', '185.246.85.103', '195.3.223.101', '185.246.85.105', '195.3.220.223', '185.16.38.230', '146.19.24.59', '195.3.220.74', '108.181.88.29', '108.181.88.105', '108.181.88.107', '199.71.214.89', '185.246.86.208', '185.246.87.7', '185.246.86.211', '95.214.53.33','178.170.49.7']
     let sev=locationHeader.split("/")[3] 
     ips.forEach(x=>{
     	const pr=https.get('https://'+x+'/'+sev, (r)=>{ 
     	
      let cookies = r.headers['set-cookie'];
console.log(r.statusCode)
let du="sala"
const opt = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
    'Cookie': sdf.includes(x)?sev2:cookies,
  },
};

  const webSockets = {};
LUNA(de, 'join', (nV, oV) => {
const room=nV[1];
     ips.forEach(x=>{
const de=https.get("https://"+x+"/server/?check=1&v3=1&room="+room+"&__cpo=aHR0cHM6Ly9nYXJ0aWMuaW8#", opt, (la)=>{ 
	let rs=''
	let ck=la.headers['set-cookie'];
	      la.on('data', (chunk) => {
        rs += chunk;
      });
      la.on('end', () => {
      	console.log(rs)
          const wsUrl = "wss://"+x+"/__cpw.php?u="+btoa("wss://"+rs.split("https://")[1].split(".")[0]+".gartic.io/socket.io/?c="+rs.split("?c=")[1]+"&EIO=3&transport=websocket")+"&o=aHR0cHM6Ly9nYXJ0aWMuaW8=";
    const ws = new WebSocket(wsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
        'Cookie': sdf.includes(x)?sev2:cookies,
        'Cookie': ck
      }
    });
    ws.on('open', () => {
      console.log('Connected to WebSocket server');
	if (nV[4] === '0' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+rnext(nV[2])+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} else if (nV[4] === '1' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+nV[2]+Math.ceil(Math.random()*10000+1)+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} else if (nV[4] === '0' && nV[3] == 'random'){  ws.send('42[3,{"v":20000,"nick":"'+rnext(nV[2])+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')}
else if (nV[4] === '1' && nV[3] == 'random'){
	  ws.send('42[3,{"v":20000,"nick":"'+nV[2]+Math.ceil(Math.random()*10000+1)+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')
}
else if (nV[4] === '2' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+em(nV[2])+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} 
else if (nV[4] === '2' && nV[3] == 'random'){  ws.send('42[3,{"v":20000,"nick":"'+em(nV[2])+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')}
else if (nV[4] === '3') {
	
let c = JSON.parse(nV[5]);
function e() {
  return c[Math.floor(Math.random() * c.length)];
};
let r = e();
ws.send('42[3,{"v":20000,"nick":"' + r.nick + '","avatar":"' + r.avatar + '","platform":0,"sala":"' + room.substring(2) + '"}]');
} 
else if (nV[4] === '4' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+gRcs().join('')+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} 
else if (nV[4] === '4' && nV[3] == 'random'){  ws.send('42[3,{"v":20000,"nick":"'+gRcs().join('')+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')}
 
else if (nV[4] === '5' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+shuffle(etL).slice(0,18).join('')+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} 
else if (nV[4] === '5' && nV[3] == 'random'){  ws.send('42[3,{"v":20000,"nick":"'+shuffle(etL).slice(0,18).join('')+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')}
else if (nV[4] === '6' && nV[3]!=='random') {
  ws.send('42[3,{"v":20000,"nick":"'+em(aT(nV[2],nV[7]))+'","avatar":'+nV[3]+',"platform":0,"sala":"'+room.substring(2)+'"}]')
} 
else if (nV[4] === '6' && nV[3] == 'random'){  ws.send('42[3,{"v":20000,"nick":"'+em(aT(nV[2],nV[7]))+'","avatar":'+Math.round(Math.random()*36)+',"platform":0,"sala":"'+room.substring(2)+'"}]')}

    })    
ws.on('message', function incoming(data) {
	data=data.toString();
	                if(data.indexOf('42["16"')!=-1){
                    let objlist=JSON.parse('["16"'+data.split('42["16"')[1])
                    var word1=objlist[1]
                    var word2=objlist[3]
                g("word",word1)
               g("word",word2)
               setTimeout(()=>{
           ws.send('42[25,'+ws.id+']')
	},10)

}
                	                          	                if(data.indexOf('42["5"')!=-1){

               let objlist=JSON.parse('["5"'+data.split('42["5"')[1]);
               ws.longID=objlist[1];
               ws.id=objlist[2];      
               webSockets[ws.id] = { socket: ws, timestamp: ws.id, longID: ws.longID}

                 ws.send('42[46,' + ws.id + ']');
                         let ikc=setInterval(()=>{
               ws.readyState==1?ws.send('2'):clearInterval(ikc)
                    },3000);
                   let ika=setInterval(()=>{
               ws.readyState==1?ws.send('42[42,'+ws.id+']'):clearInterval(ika)
                    },10000);
;
                   LUNA(datsa, 'ev', (n, o) => {
      if (n) {
        Object.values(webSockets).forEach(wsObj => {
          const ws = wsObj.socket;
          const timestamp = wsObj.timestamp;
          const longID=wsObj.longID
          switch (n[0]) {
            case "exit":
              ws.send('42[24,' + timestamp + ']');
              break;              
                          case "kick":
              ws.send('42[45,' + timestamp + ',["' + n[1] + '",true]]');
              break;
                          case "broadcast":
              ws.send('42[11,' + timestamp + ',"' + n[1] + '"]');
              ws.send('42[13,' + timestamp + ',"' + n[1] + '"]');
              break;
                          case "msg":
              ws.send('42[11,' + timestamp + ',"' + n[1] + '"]');
              break;
                   case "answer":
              ws.send('42[13,' + timestamp + ',"' + n[1] + '"]');
              break;
            case "report":
              ws.send('42[35,' + timestamp + ']');
              break;
                     case "jump":
              ws.send('42[25,' + timestamp + ']');
              break;
                          case "tips":
              ws.send('42[30,' + timestamp + ',1]');
              break;
                          case "kick":
              ws.send('42[45,' + timestamp + ',["' + nV[1] + '",true]]');
              break;
                          case "afkconfirm":
              ws.send('42[42,' + timestamp + ']');
              break;
                          case "rejoin":
              ws.send('42[24,' + timestamp + ']');
              break;
              }})}})


}})
  });
}) 
})
}) //join
})})});
    req.on('error', (error) => {
      console.error(error);
    });
    req.write(postData);
    req.end();
  });
}).on("error", (error) => {
  console.error('Error:', error);
});
