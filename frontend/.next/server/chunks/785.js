exports.id=785,exports.ids=[785],exports.modules={8091:(e,t,a)=>{"use strict";a.d(t,{d:()=>l});var s=a(997);let l=({href:e,className:t,text:a,children:l})=>s.jsx("a",{href:e,className:`hyperlink ${t}`,target:"_blank",rel:"noopener noreferrer",children:a||l})},3838:(e,t,a)=>{"use strict";a.d(t,{A:()=>v});var s=a(997),l=a(8091),r=a(6689),n=a(2135),i=a(2361),c=a(1162);let u=({className:e=""})=>{let{resolvedTheme:t,setTheme:a}=(0,c.useTheme)(),l=(0,r.useCallback)(()=>{a("light"===t?"dark":"light")},[t,a]);return(0,s.jsxs)("button",{onClick:l,className:`${e} text-secondary`,children:["light"===t&&s.jsx(n,{className:"h-6 w-6"}),"light"!==t&&s.jsx(i,{className:"h-6 w-6"})]})};var o=a(1956);let d=[{name:"Twitter",href:o.N$,icon:e=>s.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:s.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"GitHub",href:o.Kd,icon:e=>s.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:s.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}],m=()=>{let e=new Date().getFullYear();return s.jsx("footer",{className:"bg-primary",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center justify-between px-4 py-6 sm:px-6 md:justify-between lg:px-8",children:[s.jsx("div",{className:"col-span-full md:order-2",children:(0,s.jsxs)("p",{className:"text-secondary text-center text-sm",children:["\xa9 ",e," ",s.jsx(l.d,{href:o.hT,text:o.pB}),". All rights reserved."]})}),s.jsx("div",{className:"mt-8 flex justify-center space-x-6 md:order-3 md:mt-0",children:d.map(e=>s.jsx(l.d,{href:e.href,className:"text-secondary text-hover",children:(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:"sr-only",children:e.name}),s.jsx(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]})},e.name))}),s.jsx(u,{className:"text-hover mt-8 md:order-1 md:mt-0"})]})})};var b=a(7806),x=a.n(b),h=a(7458),p=a(1849),g=a(8684),f=a(8839);let y=()=>{let e=(0,h.useRouter)().pathname,t=t=>{let a=t.path===e?"font-bold":"";return s.jsx(x(),{href:t.path,className:`text-secondary text-base ${a} ${t.className}`,target:t.path.startsWith("http")?"_blank":void 0,children:t.label})},[a,l]=(0,r.useState)(!1),n=e=>{(0,f.v)(e),l(!0),setTimeout(()=>l(!1),3e3)};return(0,s.jsxs)("header",{children:[s.jsx(g.P,{show:a,setShow:l,kind:"success",title:"Address copied to clipboard!"}),s.jsx("div",{children:(0,s.jsxs)("div",{className:"flex items-center justify-between px-4 py-6 sm:px-6 md:space-x-10",children:[s.jsx("div",{children:(0,s.jsxs)(x(),{href:"/",className:"flex",children:[s.jsx("span",{className:"sr-only",children:o.pB}),s.jsx("span",{className:"text-accent font-mono font-bold",children:o.px})]})}),(0,s.jsxs)("div",{children:[s.jsx(t,{path:"/deployments",label:"Deployments",className:"text-hover mr-4"}),s.jsx(t,{path:"/abi",label:"ABI",className:"text-hover mr-4"}),s.jsx(t,{path:"https://github.com/Turupawn/poseidon-lib",className:"text-hover",label:"Documentation"})]})]})}),s.jsx("div",{className:"flex items-center justify-center",children:(0,s.jsxs)("div",{className:"mx-auto h-auto w-auto rounded-full text-center",children:[s.jsx("p",{className:"text-accent whitespace-nowrap text-xs opacity-80",children:"Deployment Address"}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx("pre",{className:"text-sm",children:s.jsx("code",{className:"font-semibold",children:o.nU})}),s.jsx(p,{className:"ml-3 h-4 w-4 cursor-pointer",onClick:()=>n(o.nU)})]})]})})]})},v=({children:e})=>(0,s.jsxs)("div",{className:"bg-primary flex min-h-screen flex-col",children:[s.jsx(y,{}),s.jsx("main",{className:"text-primary my-4 h-full w-full flex-1 px-4 sm:px-6 md:justify-between lg:px-8",children:e}),s.jsx(m,{})]})},8684:(e,t,a)=>{"use strict";a.d(t,{P:()=>d});var s=a(997),l=a(6689),r=a(4341),n=a(7104),i=a(2577),c=a(6344),u=a(960),o=a(6710);let d=({show:e,setShow:t,kind:a="info",title:d,description:m})=>{let{icon:b,iconColor:x}=function(e){return"success"===e?{icon:n,iconColor:"text-green-500 dark:text-green-400"}:"warning"===e?{icon:i,iconColor:"text-yellow-500 dark:text-yellow-400"}:"error"===e?{icon:c,iconColor:"text-red-600 dark:text-red-500"}:{icon:u,iconColor:"text-blue-500 dark:text-blue-400"}}(a),h="bg-gray-50 dark:bg-gray-800",p="text-primary";return s.jsx(s.Fragment,{children:s.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:s.jsx("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:s.jsx(r.u,{show:e,as:l.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s.jsx("div",{className:`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${h}`,children:s.jsx("div",{className:"p-4",children:(0,s.jsxs)("div",{className:"flex items-start",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx(b,{className:`h-6 w-6 ${x}`,"aria-hidden":"true"})}),(0,s.jsxs)("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[s.jsx("p",{className:`text-sm font-medium ${p}`,children:d}),s.jsx("p",{className:"mt-1 text-sm text-secondary",children:m})]}),s.jsx("div",{className:"ml-4 flex flex-shrink-0",children:(0,s.jsxs)("button",{type:"button",className:`inline-flex rounded-md ${h} ${p} text-hover focus:outline-none`,onClick:()=>{t(!1)},children:[s.jsx("span",{className:"sr-only",children:"Close"}),s.jsx(o,{className:"h-5 w-5","aria-hidden":"true"})]})})]})})})})})})})}},1956:(e,t,a)=>{"use strict";a.d(t,{Kd:()=>i,N$:()=>c,aQ:()=>b,hT:()=>n,ib:()=>m,jr:()=>o,nU:()=>u,pB:()=>r,px:()=>s,uZ:()=>d,vk:()=>l});let s="poseidon-lib",l="The ZK-friendly hashing deployment.",r="FilosofiaCodigo",n="https://twitter.com/FilosofiaCodigo",i="https://github.com/Turupawn/poseidon-lib",c="https://twitter.com/FilosofiaCodigo",u="0x7eaE9c24323C8101C9B798319a4131d71B5af7fF",o=[{inputs:[{internalType:"uint256[2]",name:"inputs",type:"uint256[2]"}],name:"poseidon",outputs:[{internalType:"uint256",name:"output",type:"uint256"}],stateMutability:"view",type:"function"}],d=`[
  "struct Call { address target; bytes callData; }",
  "struct Call3 { address target; bool allowFailure; bytes callData; }",
  "struct Call3Value { address target; bool allowFailure; uint256 value; bytes callData; }",
  "struct Result { bool success; bytes returnData; }",
  "function aggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes[] memory returnData)",
  "function aggregate3(Call3[] calldata calls) public payable returns (Result[] memory returnData)",
  "function aggregate3Value(Call3Value[] calldata calls) public payable returns (Result[] memory returnData)",
  "function blockAndAggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData)",
  "function getBasefee() view returns (uint256 basefee)",
  "function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
  "function getBlockNumber() view returns (uint256 blockNumber)",
  "function getChainId() view returns (uint256 chainid)",
  "function getCurrentBlockCoinbase() view returns (address coinbase)",
  "function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
  "function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
  "function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
  "function getEthBalance(address addr) view returns (uint256 balance)",
  "function getLastBlockHash() view returns (bytes32 blockHash)",
  "function tryAggregate(bool requireSuccess, Call[] calldata calls) public payable returns (Result[] memory returnData)",
  "function tryBlockAndAggregate(bool requireSuccess, Call[] calldata calls) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData)",
] as const`,m=`[
  "function aggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)",
  "function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function aggregate3Value(tuple(address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function blockAndAggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
  "function getBasefee() view returns (uint256 basefee)",
  "function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
  "function getBlockNumber() view returns (uint256 blockNumber)",
  "function getChainId() view returns (uint256 chainid)",
  "function getCurrentBlockCoinbase() view returns (address coinbase)",
  "function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
  "function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
  "function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
  "function getEthBalance(address addr) view returns (uint256 balance)",
  "function getLastBlockHash() view returns (bytes32 blockHash)",
  "function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
]`,b=`// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

interface IMulticall3 {
  struct Call {
    address target;
    bytes callData;
  }

  struct Call3 {
    address target;
    bool allowFailure;
    bytes callData;
  }

  struct Call3Value {
    address target;
    bool allowFailure;
    uint256 value;
    bytes callData;
  }

  struct Result {
    bool success;
    bytes returnData;
  }

  function aggregate(Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes[] memory returnData);

  function aggregate3(Call3[] calldata calls) external payable returns (Result[] memory returnData);

  function aggregate3Value(Call3Value[] calldata calls)
    external
    payable
    returns (Result[] memory returnData);

  function blockAndAggregate(Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);

  function getBasefee() external view returns (uint256 basefee);

  function getBlockHash(uint256 blockNumber) external view returns (bytes32 blockHash);

  function getBlockNumber() external view returns (uint256 blockNumber);

  function getChainId() external view returns (uint256 chainid);

  function getCurrentBlockCoinbase() external view returns (address coinbase);

  function getCurrentBlockDifficulty() external view returns (uint256 difficulty);

  function getCurrentBlockGasLimit() external view returns (uint256 gaslimit);

  function getCurrentBlockTimestamp() external view returns (uint256 timestamp);

  function getEthBalance(address addr) external view returns (uint256 balance);

  function getLastBlockHash() external view returns (bytes32 blockHash);

  function tryAggregate(bool requireSuccess, Call[] calldata calls)
    external
    payable
    returns (Result[] memory returnData);

  function tryBlockAndAggregate(bool requireSuccess, Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);
}
`},8839:(e,t,a)=>{"use strict";a.d(t,{A:()=>s,v:()=>l});let s=(...e)=>e.filter(Boolean).join(" "),l=e=>{navigator.clipboard.writeText(e).then(()=>console.log("Copying to clipboard was successful!"),e=>console.error("Could not copy text to clipboard: ",e))}},785:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>o});var l=a(997),r=a(6689),n=a(9752),i=a(1162),c=a(3838);a(491);var u=e([n]);n=(u.then?(await u)():u)[0];let o=function({Component:e,pageProps:t}){let[a,s]=r.useState(!1);return r.useEffect(()=>s(!0),[]),l.jsx(i.ThemeProvider,{attribute:"class",children:a&&l.jsx(c.A,{children:(0,l.jsxs)(l.Fragment,{children:[l.jsx(e,{...t}),l.jsx(n.Analytics,{})]})})})};s()}catch(e){s(e)}})},491:()=>{}};