(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{225:function(e,t,s){Promise.resolve().then(s.bind(s,9243))},9243:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return AdminDashboard}});var a=s(7437),r=s(2265),i=s(1396),l=s.n(i);let n=[{id:1,title:"Summer Festival 2023",date:"2023-07-15",endDate:"2023-07-17",time:"10:00 AM",location:"Village Square",description:"Three days of music, food, and activities for all ages.",category:"Festival",status:"upcoming"},{id:2,title:"Local Craft Workshop",date:"2023-07-22",endDate:"2023-07-22",time:"2:00 PM",location:"Community Center",description:"Learn traditional crafts from local artisans. Materials provided.",category:"Workshop",status:"upcoming"},{id:3,title:"Community Cleanup Day",date:"2023-07-29",endDate:"2023-07-29",time:"9:00 AM",location:"Village Park",description:"Help keep our village beautiful. Equipment and refreshments provided.",category:"Community",status:"upcoming"},{id:4,title:"Spring Flower Exhibition",date:"2023-05-10",endDate:"2023-05-12",time:"11:00 AM",location:"Botanical Gardens",description:"Annual flower exhibition showcasing local flora.",category:"Exhibition",status:"past"}];function AdminDashboard(){let[e,t]=(0,r.useState)("events"),[s,i]=(0,r.useState)(n),[d,o]=(0,r.useState)(!1),[m,c]=(0,r.useState)({title:"",date:"",endDate:"",time:"",location:"",description:"",category:"Community"}),handleDeleteEvent=e=>{i(s.filter(t=>t.id!==e))};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,a.jsx)("header",{className:"bg-white shadow",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl",children:"G"}),(0,a.jsx)("h1",{className:"ml-3 text-2xl font-bold text-gray-900",children:"Greenvalley Admin"})]}),(0,a.jsx)(l(),{href:"/",className:"btn btn-outline",children:"Return to Site"})]})})}),(0,a.jsxs)("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[(0,a.jsx)("div",{className:"mb-8 border-b border-gray-200",children:(0,a.jsxs)("nav",{className:"flex -mb-px space-x-8",children:[(0,a.jsx)("button",{onClick:()=>t("events"),className:"pb-4 px-1 border-b-2 font-medium text-sm ".concat("events"===e?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:"Events"}),(0,a.jsx)("button",{onClick:()=>t("news"),className:"pb-4 px-1 border-b-2 font-medium text-sm ".concat("news"===e?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:"News & Announcements"}),(0,a.jsx)("button",{onClick:()=>t("gallery"),className:"pb-4 px-1 border-b-2 font-medium text-sm ".concat("gallery"===e?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:"Gallery"}),(0,a.jsx)("button",{onClick:()=>t("settings"),className:"pb-4 px-1 border-b-2 font-medium text-sm ".concat("settings"===e?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),children:"Settings"})]})}),"events"===e&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Manage Events"}),(0,a.jsx)("button",{onClick:()=>o(!0),className:"btn btn-primary",children:"Add New Event"})]}),(0,a.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md",children:(0,a.jsx)("ul",{className:"divide-y divide-gray-200",children:s.filter(e=>"upcoming"===e.status).map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"px-4 py-5 sm:px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Festival"===e.category?"bg-pink-100 text-pink-800":"Workshop"===e.category?"bg-blue-100 text-blue-800":"Community"===e.category?"bg-green-100 text-green-800":"bg-purple-100 text-purple-800"),children:e.category})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:e.title}),(0,a.jsxs)("div",{className:"flex space-x-4 mt-1 text-sm text-gray-500",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("svg",{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),new Date(e.date).toLocaleDateString(),e.date!==e.endDate&&" - ".concat(new Date(e.endDate).toLocaleDateString())]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("svg",{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),e.time]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("svg",{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),e.location]})]})]})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("button",{className:"text-sm font-medium text-primary-600 hover:text-primary-500",children:"Edit"}),(0,a.jsx)("button",{onClick:()=>handleDeleteEvent(e.id),className:"text-sm font-medium text-red-600 hover:text-red-500",children:"Delete"})]})]})})},e.id))})}),(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900 mt-8 mb-4",children:"Past Events"}),(0,a.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md",children:(0,a.jsx)("ul",{className:"divide-y divide-gray-200",children:s.filter(e=>"past"===e.status).map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"px-4 py-5 sm:px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat("Festival"===e.category?"bg-pink-100 text-pink-800":"Workshop"===e.category?"bg-blue-100 text-blue-800":"Community"===e.category?"bg-green-100 text-green-800":"bg-purple-100 text-purple-800"),children:e.category})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:e.title}),(0,a.jsxs)("div",{className:"flex space-x-4 mt-1 text-sm text-gray-500",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("svg",{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),new Date(e.date).toLocaleDateString(),e.date!==e.endDate&&" - ".concat(new Date(e.endDate).toLocaleDateString())]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("svg",{className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),e.location]})]})]})]}),(0,a.jsx)("div",{className:"flex space-x-2",children:(0,a.jsx)("button",{className:"text-sm font-medium text-gray-600 hover:text-gray-500",children:"Archive"})})]})})},e.id))})})]}),"news"===e&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"News & Announcements"}),(0,a.jsx)("button",{className:"btn btn-primary",children:"Add News"})]}),(0,a.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md p-6",children:(0,a.jsx)("p",{className:"text-gray-500",children:"News management functionality would go here."})})]}),"gallery"===e&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:"Photo Gallery"}),(0,a.jsx)("button",{className:"btn btn-primary",children:"Upload Photos"})]}),(0,a.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md p-6",children:(0,a.jsx)("p",{className:"text-gray-500",children:"Gallery management functionality would go here."})})]}),"settings"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900 mb-6",children:"Website Settings"}),(0,a.jsx)("div",{className:"bg-white shadow overflow-hidden sm:rounded-md p-6",children:(0,a.jsx)("p",{className:"text-gray-500",children:"Settings management functionality would go here."})})]})]}),d&&(0,a.jsx)("div",{className:"fixed inset-0 overflow-y-auto z-50",children:(0,a.jsxs)("div",{className:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),(0,a.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,a.jsx)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=s.length>0?Math.max(...s.map(e=>e.id))+1:1;i([...s,{...m,id:t,status:"upcoming"}]),c({title:"",date:"",endDate:"",time:"",location:"",description:"",category:"Community"}),o(!1)},children:[(0,a.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,a.jsx)("div",{className:"sm:flex sm:items-start",children:(0,a.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[(0,a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900 mb-4",id:"modal-headline",children:"Add New Event"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Event Title"}),(0,a.jsx)("input",{type:"text",id:"title",value:m.title,onChange:e=>c({...m,title:e.target.value}),required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"start-date",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),(0,a.jsx)("input",{type:"date",id:"start-date",value:m.date,onChange:e=>c({...m,date:e.target.value}),required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"end-date",className:"block text-sm font-medium text-gray-700",children:"End Date"}),(0,a.jsx)("input",{type:"date",id:"end-date",value:m.endDate,onChange:e=>c({...m,endDate:e.target.value}),required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"time",className:"block text-sm font-medium text-gray-700",children:"Time"}),(0,a.jsx)("input",{type:"text",id:"time",value:m.time,onChange:e=>c({...m,time:e.target.value}),placeholder:"e.g. 10:00 AM",required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,a.jsxs)("select",{id:"category",value:m.category,onChange:e=>c({...m,category:e.target.value}),className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500",children:[(0,a.jsx)("option",{value:"Festival",children:"Festival"}),(0,a.jsx)("option",{value:"Workshop",children:"Workshop"}),(0,a.jsx)("option",{value:"Community",children:"Community"}),(0,a.jsx)("option",{value:"Exhibition",children:"Exhibition"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700",children:"Location"}),(0,a.jsx)("input",{type:"text",id:"location",value:m.location,onChange:e=>c({...m,location:e.target.value}),required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,a.jsx)("textarea",{id:"description",rows:3,value:m.description,onChange:e=>c({...m,description:e.target.value}),required:!0,className:"mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"})]})]})]})})}),(0,a.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,a.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm",children:"Add Event"}),(0,a.jsx)("button",{type:"button",onClick:()=>o(!1),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]})]})})]})})]})}},622:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(2265),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,s){var a,d={},o=null,m=null;for(a in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,a)&&!n.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:r,type:e,key:o,ref:m,props:d,_owner:l.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,s){"use strict";e.exports=s(622)},1396:function(e,t,s){e.exports=s(8326)}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=225)}),_N_E=e.O()}]);