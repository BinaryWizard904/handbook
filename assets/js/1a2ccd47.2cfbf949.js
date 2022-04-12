"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"devops-guide-manual",title:"Self-Hosting Guide - Manual installation",sidebar_label:"Manual installation"},s=void 0,p={unversionedId:"devops-guide/devops-guide-manual",id:"devops-guide/devops-guide-manual",title:"Self-Hosting Guide - Manual installation",description:"We recommend following the quick-install document. The current document describes the steps that are needed to install a working deployment, but steps are easy to mess up, and the debian packages are more up-to-date, where this document is sometimes not updated to reflect latest changes.",source:"@site/docs/devops-guide/manual.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-manual",permalink:"/handbook/docs/devops-guide/devops-guide-manual",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/manual.md",tags:[],version:"current",lastUpdatedAt:1649746007,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"devops-guide-manual",title:"Self-Hosting Guide - Manual installation",sidebar_label:"Manual installation"},sidebar:"docs",previous:{title:"Docker",permalink:"/handbook/docs/devops-guide/devops-guide-docker"},next:{title:"Authentication (Secure Domain)",permalink:"/handbook/docs/devops-guide/secure-domain"}},d={},c=[{value:"Network description",id:"network-description",level:2},{value:"Install prosody",id:"install-prosody",level:2},{value:"Configure prosody",id:"configure-prosody",level:2},{value:"Install Nginx",id:"install-nginx",level:2},{value:"Install Jitsi Videobridge",id:"install-jitsi-videobridge",level:2},{value:"Install Jitsi Conference Focus (jicofo)",id:"install-jitsi-conference-focus-jicofo",level:2},{value:"Deploy Jitsi Meet",id:"deploy-jitsi-meet",level:2},{value:"Running behind NAT",id:"running-behind-nat",level:2},{value:"Hold your first conference",id:"hold-your-first-conference",level:2},{value:"Enabling recording",id:"enabling-recording",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Manual installation is not recommended")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend following the ",(0,o.kt)("a",{parentName:"p",href:"devops-guide-quickstart"},"quick-install")," document. The current document describes the steps that are needed to install a working deployment, but steps are easy to mess up, and the debian packages are more up-to-date, where this document is sometimes not updated to reflect latest changes."))),(0,o.kt)("p",null,"This describes configuring a server ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi.example.com")," on a Debian-based distribution.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"For other distributions")," you can adapt the steps (especially changing the dependencies package installations (e.g. for nginx) and paths accordingly) so that it matches your host's distribution.",(0,o.kt)("br",{parentName:"p"}),"\n","You will also need to generate some passwords for ",(0,o.kt)("inlineCode",{parentName:"p"},"YOURSECRET1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"YOURSECRET2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"YOURSECRET3"),"."),(0,o.kt)("p",null,"There are also some complete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/tree/master/doc/debian/"},"example config files")," available, mentioned in each section."),(0,o.kt)("p",null,"There are additional configurations to be done for a ",(0,o.kt)("a",{parentName:"p",href:"devops-guide-scalable"},"scalable installation"),"."),(0,o.kt)("h2",{id:"network-description"},"Network description"),(0,o.kt)("p",null,"This is how the network looks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                   +                           +\n                   |                           |\n                   |                           |\n                   v                           |\n                  443                          |\n               +-------+                       |\n               |       |                       |\n               | Nginx |                       |\n               |       |                       |\n               +--+-+--+                       |\n                  | |                          |\n+------------+    | |    +--------------+      |\n|            |    | |    |              |      |\n| Jitsi Meet +<---+ +---\x3e+ prosody/xmpp |      |\n|            |files 5280 |              |      |\n+------------+           +--------------+      v\n                         5222 ^    ^ 5222    10000\n                +--------+    |    |    +-------------+\n                |        |    |    |    |             |\n                | jicofo +----^    ^----+ videobridge |\n                |        |              |             |\n                +--------+              +-------------+\n")),(0,o.kt)("h2",{id:"install-prosody"},"Install prosody"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt-get install prosody\n")),(0,o.kt)("h2",{id:"configure-prosody"},"Configure prosody"),(0,o.kt)("p",null,"Add config file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/prosody/conf.avail/jitsi.example.com.cfg.lua")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add your domain virtual host section:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'VirtualHost "jitsi.example.com"\n    authentication = "anonymous"\n    ssl = {\n        key = "/var/lib/prosody/jitsi.example.com.key";\n        certificate = "/var/lib/prosody/jitsi.example.com.crt";\n    }\n    modules_enabled = {\n        "bosh";\n        "pubsub";\n    }\n    c2s_require_encryption = false\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add domain with authentication for conference focus user:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'VirtualHost "auth.jitsi.example.com"\n    ssl = {\n        key = "/var/lib/prosody/auth.jitsi.example.com.key";\n        certificate = "/var/lib/prosody/auth.jitsi.example.com.crt";\n    }\n    authentication = "internal_hashed"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add focus user to server admins:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'admins = { "focus@auth.jitsi.example.com" }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"and finally configure components:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Component "conference.jitsi.example.com" "muc"\nComponent "jitsi-videobridge.jitsi.example.com"\n    component_secret = "YOURSECRET1"\nComponent "focus.jitsi.example.com"\n    component_secret = "YOURSECRET2"\n')),(0,o.kt)("p",null,"Add link for the added configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s /etc/prosody/conf.avail/jitsi.example.com.cfg.lua /etc/prosody/conf.d/jitsi.example.com.cfg.lua\n")),(0,o.kt)("p",null,"Generate certs for the domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"prosodyctl cert generate jitsi.example.com\nprosodyctl cert generate auth.jitsi.example.com\n")),(0,o.kt)("p",null,"Add auth.jitsi.example.com to the trusted certificates on the local machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ln -sf /var/lib/prosody/auth.jitsi.example.com.crt /usr/local/share/ca-certificates/auth.jitsi.example.com.crt\nupdate-ca-certificates -f\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag is necessary if there are symlinks left from a previous installation."),(0,o.kt)("p",null,"If you are using a JDK package not provided by Debian, as the ones from adoptjdk, you should also make your JDK aware of the new debian certificate keystore replacing or linking the JDK ",(0,o.kt)("inlineCode",{parentName:"p"},"cacerts"),". Example, if you use JDK from adoptjdk:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/jre\nln -sf /etc/ssl/certs/java/cacerts lib/security/cacerts\n")),(0,o.kt)("p",null,"Create conference focus user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"prosodyctl register focus auth.jitsi.example.com YOURSECRET3\n")),(0,o.kt)("p",null,"Restart prosody XMPP server with the new config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"prosodyctl restart\n")),(0,o.kt)("h2",{id:"install-nginx"},"Install Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt-get install nginx\n")),(0,o.kt)("p",null,"Add a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsi.example.com")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available")," (see also the example config file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server_names_hash_bucket_size 64;\n\nserver {\n    listen 0.0.0.0:443 ssl http2;\n    listen [::]:443 ssl http2;\n    # tls configuration that is not covered in this guide\n    # we recommend the use of https://certbot.eff.org/\n    server_name jitsi.example.com;\n    # set the root\n    root /srv/jitsi-meet;\n    index index.html;\n    location ~ ^/([a-zA-Z0-9=\\?]+)$ {\n        rewrite ^/(.*)$ / break;\n    }\n    location / {\n        ssi on;\n    }\n    # BOSH, Bidirectional-streams Over Synchronous HTTP\n    # https://en.wikipedia.org/wiki/BOSH_(protocol)\n    location /http-bind {\n        proxy_pass      http://localhost:5280/http-bind;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header Host $http_host;\n    }\n    # external_api.js must be accessible from the root of the\n    # installation for the electron version of Jitsi Meet to work\n    # https://github.com/jitsi/jitsi-meet-electron\n    location /external_api.js {\n        alias /srv/jitsi-meet/libs/external_api.min.js;\n    }\n}\n")),(0,o.kt)("p",null,"Add link for the added configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /etc/nginx/sites-enabled\nln -s ../sites-available/jitsi.example.com jitsi.example.com\n")),(0,o.kt)("h2",{id:"install-jitsi-videobridge"},"Install Jitsi Videobridge"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This method is no longer supported.\nYou can either install the JVB from ",(0,o.kt)("a",{parentName:"p",href:"https://download.jitsi.org/stable/"},"https://download.jitsi.org/stable/")," and follow these ",(0,o.kt)("a",{parentName:"p",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions/"},"Instructions")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-videobridge"},"clone the repo")," and build it manually."))),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://download.jitsi.org/jitsi-videobridge/linux"},"https://download.jitsi.org/jitsi-videobridge/linux")," to determine the current build number, download and unzip it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://download.jitsi.org/jitsi-videobridge/linux/jitsi-videobridge-linux-{arch-buildnum}.zip\nunzip jitsi-videobridge-linux-{arch-buildnum}.zip\n")),(0,o.kt)("p",null,"Install JRE if missing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt-get install openjdk-8-jre\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: When installing on older Debian releases keep in mind that you need JRE >= 1.7.")),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.sip-communicator/sip-communicator.properties")," in the home folder of the user that will be starting Jitsi Videobridge:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ~/.sip-communicator\ncat > ~/.sip-communicator/sip-communicator.properties << EOF\norg.jitsi.impl.neomedia.transform.srtp.SRTPCryptoContext.checkReplay=false\n# The videobridge uses 443 by default with 4443 as a fallback, but since we're already\n# running nginx on 443 in this example doc, we specify 4443 manually to avoid a race condition\norg.jitsi.videobridge.TCP_HARVESTER_PORT=4443\nEOF\n")),(0,o.kt)("p",null,"Start the videobridge with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./jvb.sh --host=localhost --domain=jitsi.example.com --secret=YOURSECRET1 &\n")),(0,o.kt)("p",null,"Or autostart it by adding the line in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rc.local"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/bin/bash /root/jitsi-videobridge-linux-{arch-buildnum}/jvb.sh --host=localhost --domain=jitsi.example.com --secret=YOURSECRET1 </dev/null >> /var/log/jvb.log 2>&1\n")),(0,o.kt)("h2",{id:"install-jitsi-conference-focus-jicofo"},"Install Jitsi Conference Focus (jicofo)"),(0,o.kt)("p",null,"Install JDK and Maven if missing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt-get install openjdk-8-jdk maven\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: When installing on older Debian releases keep in mind that you need JDK >= 1.7.")),(0,o.kt)("p",null,"Clone source from Github repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/jitsi/jicofo.git\n")),(0,o.kt)("p",null,"Build the package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd jicofo\nmvn package -DskipTests -Dassembly.skipAssembly=false\n")),(0,o.kt)("p",null,"Run jicofo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"=======\nunzip target/jicofo-1.1-SNAPSHOT-archive.zip\ncd jicofo-1.1-SNAPSHOT-archive'\n./jicofo.sh --host=localhost --domain=jitsi.example.com --secret=YOURSECRET2 --user_domain=auth.jitsi.example.com --user_name=focus --user_password=YOURSECRET3\n")),(0,o.kt)("h2",{id:"deploy-jitsi-meet"},"Deploy Jitsi Meet"),(0,o.kt)("p",null,"Checkout and configure Jitsi Meet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /srv\ngit clone https://github.com/jitsi/jitsi-meet.git\ncd jitsi-meet\nnpm install\nmake\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: When installing on older distributions keep in mind that you need Node.js >= 12 and npm >= 6.")),(0,o.kt)("p",null,"Edit host names in ",(0,o.kt)("inlineCode",{parentName:"p"},"/srv/jitsi-meet/config.js")," (see also the example config file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var config = {\n    hosts: {\n        domain: 'jitsi.example.com',\n        muc: 'conference.jitsi.example.com',\n        bridge: 'jitsi-videobridge.jitsi.example.com',\n        focus: 'focus.jitsi.example.com'\n    },\n    useNicks: false,\n    bosh: '//jitsi.example.com/http-bind', // FIXME: use xep-0156 for that\n    //chromeExtensionId: 'diibjkoicjeejcmhdnailmkgecihlobk', // Id of desktop streamer Chrome extension\n    //minChromeExtVersion: '0.1' // Required version of Chrome extension\n};\n")),(0,o.kt)("p",null,"Verify that nginx config is valid and reload nginx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nginx -t && nginx -s reload\n")),(0,o.kt)("h2",{id:"running-behind-nat"},"Running behind NAT"),(0,o.kt)("p",null,"Jitsi Videobridge can run behind a NAT, provided that both required ports are routed (forwarded) to the machine that it runs on. By default these ports are ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP/4443")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UDP/10000"),"."),(0,o.kt)("p",null,"If you do not route these two ports, Jitsi Meet will only work with video for two people, breaking upon 3 or more people trying to show video."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TCP/443")," is required for the webserver which can be running on another machine than the Jitsi Videobrige is running on."),(0,o.kt)("p",null,"The following extra lines need to be added to the file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.sip-communicator/sip-communicator.properties")," (in the home directory of the user running the videobridge):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"org.ice4j.ice.harvest.NAT_HARVESTER_LOCAL_ADDRESS=<Local.IP.Address>\norg.ice4j.ice.harvest.NAT_HARVESTER_PUBLIC_ADDRESS=<Public.IP.Address>\n")),(0,o.kt)("h2",{id:"hold-your-first-conference"},"Hold your first conference"),(0,o.kt)("p",null,"You are now all set and ready to have your first meet by going to ",(0,o.kt)("a",{parentName:"p",href:"http://jitsi.example.com"},"http://jitsi.example.com")),(0,o.kt)("h2",{id:"enabling-recording"},"Enabling recording"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jibri"},"Jibri")," is a set of tools for recording and/or streaming a Jitsi Meet conference."))}u.isMDXComponent=!0}}]);