"use strict";(self.webpackChunkliaocy_net=self.webpackChunkliaocy_net||[]).push([[4237],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Win10 Linux \u5b50\u7cfb\u7edf(WSL)\u7f13\u6162\u53ca\u5361\u987f\u7684\u89e3\u51b3\u65b9\u6cd5",date:new Date("2018-06-13T14:50:17.000Z"),lang:"zh-Hans",tags:["Windows","Ubuntu","Windows\u5b50\u7cfb\u7edf WLS"],categories:["\u5f00\u53d1 Development","Windows"]},c=void 0,u={unversionedId:"archieved/2018/wslslow",id:"archieved/2018/wslslow",title:"Win10 Linux \u5b50\u7cfb\u7edf(WSL)\u7f13\u6162\u53ca\u5361\u987f\u7684\u89e3\u51b3\u65b9\u6cd5",description:"Windows 10 Linux \u5b50\u7cfb\u7edf (Windows Subsystem for Linux, WSL)\u5141\u8bb8\u5728windows\u5185\u5efaUbuntu\u7cfb\u7edf\u5e76\u4f7f\u7528Bash\u547d\u4ee4\uff0c\u6781\u5927\u5730\u65b9\u4fbf\u4e86\u7528\u6237\u7279\u522b\u662f\u5f00\u53d1\u8005\u3002",source:"@site/docs/archieved/2018/20180613-wslslow.md",sourceDirName:"archieved/2018",slug:"/archieved/2018/wslslow",permalink:"/liaocy-net/docs/archieved/2018/wslslow",draft:!1,editUrl:"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180613-wslslow.md",tags:[{label:"Windows",permalink:"/liaocy-net/docs/tags/windows"},{label:"Ubuntu",permalink:"/liaocy-net/docs/tags/ubuntu"},{label:"Windows\u5b50\u7cfb\u7edf WLS",permalink:"/liaocy-net/docs/tags/windows\u5b50\u7cfb\u7edf-wls"}],version:"current",sidebarPosition:20180613,frontMatter:{title:"Win10 Linux \u5b50\u7cfb\u7edf(WSL)\u7f13\u6162\u53ca\u5361\u987f\u7684\u89e3\u51b3\u65b9\u6cd5",date:"2018-06-13T14:50:17.000Z",lang:"zh-Hans",tags:["Windows","Ubuntu","Windows\u5b50\u7cfb\u7edf WLS"],categories:["\u5f00\u53d1 Development","Windows"]},sidebar:"tutorialSidebar",previous:{title:"\u5728Hexo + GithubPage\u4e2d\u4f7f\u7528\u4e2a\u4eba\u57df\u540d",permalink:"/liaocy-net/docs/archieved/2018/privatedomain"},next:{title:"\u6c42\u82e5\u5e72\u5750\u6807\u70b9\u6700\u8fd1\u90bb\u533a\u95f4\u5206\u754c\u7ebf:\u7528Python\u8ba1\u7b97Voronoi\u56fe",permalink:"/liaocy-net/docs/archieved/2018/voronoi"}},s={},p=[{value:"\u5173\u95ed Antimalware Service Excutable",id:"\u5173\u95ed-antimalware-service-excutable",level:3},{value:"\u5378\u8f7d360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2",id:"\u5378\u8f7d360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2",level:3},{value:"\u7ed3\u679c\u548c\u611f\u60f3",id:"\u7ed3\u679c\u548c\u611f\u60f3",level:3}],d={toc:p};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Windows 10 Linux \u5b50\u7cfb\u7edf (Windows Subsystem for Linux, WSL)\u5141\u8bb8\u5728windows\u5185\u5efaUbuntu\u7cfb\u7edf\u5e76\u4f7f\u7528Bash\u547d\u4ee4\uff0c\u6781\u5927\u5730\u65b9\u4fbf\u4e86\u7528\u6237\u7279\u522b\u662f\u5f00\u53d1\u8005\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u7b14\u8005\u5728\u4f7f\u7528WSl\u65f6\u53d1\u73b0\u5947\u6162\uff0c\u5361\u987f\u975e\u5e38\u4e25\u91cd\u3002\n\u6bd4\u5982\u8bf4\u5728PowerShell\u4e2d\u542f\u52a8Ubuntu\uff0c\u7adf\u7136\u9700\u898130\u79d2\u4ee5\u4e0a\uff1bApt-get\u66f4\u662f\u6162\u7684\u60ca\u4eba\uff0c\u534a\u5c0f\u65f6\u4ee5\u4e0a\u751a\u81f3\u6709\u65f6\u5019\u76f4\u63a5\u5361\u6b7b\u3002"),(0,o.kt)("p",null,"\u7b14\u8005\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,o.kt)("h3",{id:"\u5173\u95ed-antimalware-service-excutable"},"\u5173\u95ed Antimalware Service Excutable"),(0,o.kt)("p",null,"Antimalware Service Excutable (ASE) \u662f Windows \u5185\u7f6e\u7684\u5b89\u5168\u9632\u62a4\u8f6f\u4ef6\uff0c\u5728\u8fd0\u884cWSL\u65f6\uff0c\u53ef\u4ee5\u770b\u5230ASE\u5728\u540e\u53f0\u8fd0\u884c\u5360\u7528CPU\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ASE\u963b\u788dWSL",src:n(70463).Z,title:"ASE\u963b\u788dWSL",width:"1191",height:"217"})),(0,o.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u4fee\u6539\u6ce8\u518c\u8868\u628a\u5b83\u5173\u6389\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5173\u95edASE\u4f1a\u9020\u6210\u4e00\u5b9a\u7684\u5b89\u5168\u98ce\u9669\uff0c\u8981\u614e\u91cd\u3002"),(0,o.kt)("p",null,"\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6309Win+R\u6253\u5f00\u8fd0\u884c\u5bf9\u8bdd\u6846\uff0c\u8f93\u5165 regedit \u70b9\u51fb\u786e\u5b9a\u6253\u5f00\u6ce8\u518c\u8868\u7ba1\u7406\u5668\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u627e\u5230 HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows Defender \u76ee\u5f55\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7a97\u53e3\u5de6\u4fa7\u53f3\u51fb Windows Defender \uff0c\u9009\u62e9 \u201c\u65b0\u5efa\u201d\uff0c \u521b\u5efa\u4e00\u4e2a DWORD \u952e\u503c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u952e\u503c\u540d\u79f0\u4e3a DisableAntiSpyware \uff0c \u5176\u503c\u8bbe\u7f6e\u4e3a 1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u542f\u8ba1\u7b97\u673a\u3002")),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/en-us/protect/forum/all/how-to-kill-antimalware-service-executable/b5ce5b46-a65b-460c-b4cd-e2cca50358cf?page=1"},'\u300aHow to kill "Antimalware Service Executable"\u300b')),(0,o.kt)("h3",{id:"\u5378\u8f7d360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2"},"\u5378\u8f7d360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2"),(0,o.kt)("p",null,"\u5b9e\u8bdd\u8bf4360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2\u90fd\u662f\u975e\u5e38\u597d\u7528\u7684\u9632\u62a4\u8f6f\u4ef6\uff0c\u8fd9\u91cc\u5378\u8f7d\u5b9e\u5c5e\u8feb\u4e0d\u5f97\u5df2\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u4e2a\u6321\u5728WSL\u524d\u9762\u7684\u8fdb\u7a0b\u662f\u201c360\u5b89\u5168\u536b\u58eb\u4e3b\u52a8\u9632\u62a4\u201d\uff0c\u6211\u5c1d\u8bd5\u5c06WSL\u52a0\u5165\u5230360\u6728\u9a6c\u9632\u62a4\u767d\u540d\u5355\uff0c\u4f46\u662f\u6ca1\u6709\u6539\u5584\u3002\n\u4e0d\u5f97\u5df2\u5c06360\u5b89\u5168\u536b\u58eb\u4e0e360\u6740\u6bd2\u5378\u8f7d\u4e86\u7528\u522b\u7684\u6740\u6bd2\u8f6f\u4ef6\u4ee3\u66ff\u3002"),(0,o.kt)("p",null,"\u5e0c\u671b\u4ee5\u540e360\u4f1a\u9488\u5bf9WSL\u505a\u4f18\u5316\uff0c\u90a3\u65f6\u5019\u518d\u56de\u6765\u7528\u3002"),(0,o.kt)("h3",{id:"\u7ed3\u679c\u548c\u611f\u60f3"},"\u7ed3\u679c\u548c\u611f\u60f3"),(0,o.kt)("p",null,"\u7ecf\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\uff0cWSL\u5065\u6b65\u5982\u98de\u3002"),(0,o.kt)("p",null,"\u4f5c\u8005\u4e0d\u4fdd\u8bc1\u8fd9\u4e9b\u65b9\u6cd5\u9002\u5408\u6240\u6709\u7528\u6237\u3002\n\u9047\u5230WSL\u7f13\u6162\u6216\u5361\u987f\u7684\u8bfb\u8005\u8fd8\u662f\u8981\u6839\u636e\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u5404\u8fdb\u7a0b\u7684CPU\u5360\u7528\u7387\uff0c\n\u81ea\u5df1\u5206\u6790\u963b\u788dWSL\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5e76\u91c7\u53d6\u76f8\u5e94\u7684\u63aa\u65bd\u3002"))}f.isMDXComponent=!0},70463:function(e,t,n){t.Z=n.p+"assets/images/20180613001-bdcc315cf3059df3c03d47a969642a58.png"}}]);