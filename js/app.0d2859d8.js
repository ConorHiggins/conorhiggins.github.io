(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1195:function(e,t,n){e.exports=n.p+"img/avatar.79addcef.png"},2992:function(e,t,n){},"4f3c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("Sidebar"),n("Content")],1)])},s=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar"},[i("div",{staticClass:"sidebar__profile"},[i("img",{attrs:{src:n("1195"),alt:"Conor Higgins"}}),i("h2",[e._v("Conor Higgins")]),i("h3",[e._v("Tech Leadership, Product Engineering, UX Research")])]),i("div",{staticClass:"sidebar__contact"},[i("span",[i("i",{staticClass:"fas fa-mobile-alt"}),i("a",{attrs:{href:"tel:+353857152262"}},[e._v(" 085 715 2262 ")])]),i("span",[i("i",{staticClass:"far fa-envelope-open"}),i("a",{attrs:{href:"mailto:info@conorhiggins.com"}},[e._v(" info@conorhiggins.com ")])])]),i("div",{staticClass:"sidebar__social"},[i("a",{attrs:{href:"https://twitter.com/askhiggins",target:"_blank"}},[i("i",{staticClass:"fab fa-twitter"}),i("span",[e._v(" @AskHiggins ")])]),i("a",{attrs:{href:"https://github.com/ConorHiggins",target:"_blank"}},[i("i",{staticClass:"fab fa-github"}),i("span",[e._v(" /ConorHiggins ")])]),i("a",{attrs:{href:"https://codepen.io/ch1601",target:"_blank"}},[i("i",{staticClass:"fab fa-codepen"}),i("span",[e._v(" /ch1601 ")])]),i("a",{attrs:{href:"https://www.linkedin.com/in/conorhiggins1601/",target:"_blank"}},[i("i",{staticClass:"fab fa-linkedin-in"}),i("span",[e._v(" /conorhiggins1601 ")])])])])}],c={name:"Sidebar"},l=c,p=(n("f203"),n("2877")),u=Object(p["a"])(l,r,o,!1,null,null,null),d=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"content__section"},[n("h2",[e._v("About Me")]),n("div",{staticClass:"content__row"},[e._m(0),n("div",{staticClass:"content__column content__column--50"},[n("div",{staticClass:"content__skills"},[n("ProgressBar",{attrs:{title:"Front-End Development",percent:"90",color:"#00e676"}}),n("ProgressBar",{attrs:{title:"Back-End Development",percent:"70",color:"#2979ff"}}),n("ProgressBar",{attrs:{title:"UX",percent:"80",color:"#651fff"}}),n("ProgressBar",{attrs:{title:"Management & Leadership",percent:"90",color:"#ff4081"}}),n("ProgressBar",{attrs:{title:"Research",percent:"70",color:"#00e5ff"}})],1)])]),e._m(1)]),n("div",{staticClass:"content__section content__section--experience"},[n("h2",[e._v("Experience")]),e._l(e.history,(function(e){return n("div",{key:e.title,staticClass:"content__row"},[n("TimelineEvent",{attrs:{item:e}})],1)}))],2),n("div",{staticClass:"content__section content__section--education"},[n("div",{staticClass:"content__column content__column--50"},[n("h2",[e._v("Education")]),e._l(e.education,(function(e){return n("div",{key:e.title,staticClass:"content__row"},[n("TimelineEvent",{attrs:{item:e}})],1)}))],2),n("div",{staticClass:"content__column content__column--50"},[n("h2",[e._v("Awards")]),e._l(e.awards,(function(e){return n("div",{key:e.title,staticClass:"content__row"},[n("TimelineEvent",{attrs:{item:e}})],1)}))],2)]),e._m(2)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content__column content__column--50"},[n("p",[e._v(" I'm an experienced full stack engineer, with a background in human computer interaction and a huge interest in human-centered design, user experience and research. ")]),n("p",[e._v(" I enjoy all aspects of engineering and leadership, from designing solutions to key problems, to growing talented customer-focused teams. ")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content__row"},[i("div",{staticClass:"logos"},[i("img",{attrs:{src:n("5fb7"),alt:"HTML5"}}),i("img",{attrs:{src:n("b4bf"),alt:"Vue"}}),i("img",{attrs:{src:n("6c7a"),alt:"Go"}}),i("img",{attrs:{src:n("8a41"),alt:"CSS3"}}),i("img",{attrs:{src:n("b286"),alt:"Javascript"}}),i("img",{attrs:{src:n("e3cd"),alt:"KnockoutJS"}}),i("img",{attrs:{src:n("bb76"),alt:"LESS"}}),i("img",{attrs:{src:n("e7e8"),alt:"SASS"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content__section content__section--writing"},[n("h2",[e._v("Writing")]),n("div",{staticClass:"content__row"},[n("ul",[n("li",[e._v(" Higgins, C., Kearns, Á., Ryan, C., & Fernstrom, M. (2016). The Role of Gamification and Evolutionary Computation in the Provision of Self-Guided Speech Therapy. In Handbook of Research on Holistic Perspectives in Gamification for Clinical Practice (pp. 161–186). Hershey: IGI Global. ")]),n("li",[e._v(" Higgins, C., Ryan, C., Kearns., A. and Fernstrom, M. (2014) The Creation and Facilitation of Speech and Language Therapy Sessions for individuals with Aphasia. GECCO Comp'14 Proceedings of the 2014 conference companion on Genetic and evolutionary computation companion, 109-110. DOI 10.1145/2598394.2598485 ")]),n("li",[e._v(" Higgins, C., Kearns, A., Ryan, C., Fernstrom, M. and Franklin, S. (2014) Towards unsupervised remote therapy for individuals with aphasia. Mobile Computing, Applications, and Services Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, 130, 265-268 DOI 10.1007/978-3- 319-05452-0_20 ")]),n("li",[e._v(" Kearns, A., Franklin, S. and Higgins, C. (2012) Investigating the use of iPad and App to deliver Semantic Feature Analysis (SFA) treatment in clients with aphasia. Brain Impairment, 13 (1) 141. ")]),n("li",[e._v(" Kearns, A., Higgins, C., Franklin, S. (2012) ‘Aphasia Therapy via iPad and App’ 9th Conference of the Neuropsychological Rehabilitation: Special Interest Group of the World Federation for NeuroRehabilitation (WFNR), Bergen, Norway, July 2012 ")]),n("li",[e._v(" Higgins, C., Kearns, A. and Franklin, S. (2012) “The development of a semantic feature analysis based mobile application for individuals with aphasia”, poster presented at MobiSys, Ambleside, UK, June 2012. ")])])])])}],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress"},[n("span",{staticClass:"progress__label"},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"progress__bar"},[n("span",{style:{width:e.percent+"%"}},[n("span",{staticClass:"progress__bar-fg",style:{backgroundColor:e.color}})])])])},g=[],v={name:"ProgressBar",props:["title","percent","color"]},_=v,b=(n("7d70"),Object(p["a"])(_,m,g,!1,null,"233e24e0",null)),w=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline-event"},[n("span",{staticClass:"timeline-event__node"},[n("i",{class:e.item.icon})]),n("span",{staticClass:"timeline-event__date"},[e._v(" "+e._s(e.item.when)+" ")]),n("h3",{staticClass:"timeline-event__title"},[e._v(" "+e._s(e.item.title)+" ")]),e.item.subtitle&&e.item.subtitle.length?n("h5",{staticClass:"timeline-event__title"},[e._v(" "+e._s(e.item.subtitle)+" ")]):e._e(),n("p",[e._v(" "+e._s(e.item.what)+" ")]),e.item.skills&&e.item.skills.length?n("div",{staticClass:"timeline-event__tags"},e._l(e.item.skills,(function(t){return n("span",{key:t,staticClass:"timeline-event__tag"},[e._v(" "+e._s(t)+" ")])})),0):e._e()])},y=[],k={name:"TimelineEvent",props:["item"]},S=k,A=(n("d989"),Object(p["a"])(S,C,y,!1,null,"16b7197d",null)),T=A.exports,x={name:"Content",components:{ProgressBar:w,TimelineEvent:T},data:function(){return{history:[{title:"Teamwork.com",subtitle:"",icon:"far fa-handshake",skills:["Vue","Go","Coffeescript","KnockoutJS","Coldfusion","Product Analytics (Pendo)","SQL (MariaDB)","Redis","Hiring","Planning"],what:"As Technical Lead of Teamwork's main product, I have been responsible for all areas of the product's delivery, including cross-fuctional hiring, product planning and reviews.",when:"2015 - present"},{title:"SANTA",subtitle:"Self-Administered Naming Therapy for Aphasia",skills:["Research","Prototyping (Balsamiq)","Firebase","Angular","Objective-C"],icon:"fas fa-flask",where:"Department of Clinical Therapies, UL",what:"SANTA is a cross-platform web application for users with aphasia. The application uses text-to-speech in order to teach aphasic users to speak and enunciate words. I am responsible for all aspects of the system's design, development and user acceptance testing.",when:"2014 - 2015"},{title:"Triana Care",subtitle:"",skills:["Prototyping (Balsamiq)","Laravel","Angular","ElasticSearch"],icon:"fas fa-shapes",what:"Triana Care has led to the creation of software systems for the US hospice industry to improve the level of patient care. I have been solely responsible for the system's user experience and evaluation. I have also contributed to much of the system's front-end and back-end architecture.",when:"2014 - 2015"},{title:"iTRAC Global",subtitle:"",skills:["Angular","Laravel","Elasticsearch"],icon:"fas fa-laptop",what:"iTRAC Global is a global customs and excise software package. As the project’s first and longest-serving developer, I have been responsible for defining much of the system architecture and implementing designs concepts.",when:"2012 - 2014"},{title:"22 Touch",subtitle:"",skills:["ExpressionEngine","JS"],icon:"fas fa-robot",what:"22 Touch is a referral marketing web application. I was involved in both the redesign and implementation of the system, developing a series of new features and designing a genetic algorithm on which the application is heavily dependent.",when:"2012 - 2014"},{title:"Elite Edge",subtitle:"",skills:["JS","PHP","Flex/Flash Builder"],icon:"fas fa-running",what:"Elite Edge is a cross-platform sports science application. To date the application has been extensively used by the British and Irish Lions, the National Athlete Development Academy and Munster Rugby. I am responsible for the system's requirements gathering, back-end design and front-end development.",when:"2010 - 2014"},{title:"Tricycle Interactive Ltd",subtitle:"",skills:["Objective-C","PHP","JS","Flex/Flash Builder"],icon:"far fa-thumbs-up",what:"I rebuilt and extended the WRU sports science system, creating a suite of new features, implementing a usercentered design approach in the process. Additionally, I led a number of projects for clients including iOS applications for MotorCheck and Opoko.",when:"2010 - 2011"}],education:[{title:"Ph.D.",subtitle:"Incomplete",where:"University of Limerick",icon:"fas fa-graduation-cap",what:"I have developed a number of applications and utilities targeted at the rehabilitation of individuals with aphasia and concomitant cognitive deficits. My research has examined the efficacy of mobile applications in self-guided speech and language therapy.",when:"2006 - 2010"},{title:"Undergraduate",subtitle:"",where:"University of Limerick",icon:"fas fa-graduation-cap",what:"I graduated in 2010 with a first class honours, earning a B.Sc. in Music, Media and Performance Technology",when:"2006 - 2010"}],awards:[{title:"Accenture Academic Innovation Award",icon:"fas fa-award",when:"2010"},{title:"University of Limerick Advanced Scholar Scheme",icon:"fas fa-award",when:"2010"},{title:"Tweak Festival Student Showcase",icon:"fas fa-award",when:"2009"},{title:"University of Limerick President's List",icon:"fas fa-award",when:"2007 - 2010"}]}}},P=x,E=(n("c079"),Object(p["a"])(P,f,h,!1,null,"daa7c2f0",null)),I=E.exports,O={name:"App",components:{Sidebar:d,Content:I}},L=O,j=(n("5c0b"),Object(p["a"])(L,a,s,!1,null,null,null)),F=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},"5fb7":function(e,t,n){e.exports=n.p+"img/HTML5.f618641c.svg"},"6c7a":function(e,t,n){e.exports=n.p+"img/Go.ea7a40af.svg"},"7d70":function(e,t,n){"use strict";var i=n("2992"),a=n.n(i);a.a},"8a41":function(e,t,n){e.exports=n.p+"img/CSS3.3c711414.svg"},9741:function(e,t,n){},"9c0c":function(e,t,n){},b286:function(e,t,n){e.exports=n.p+"img/JS.2d2e31cc.svg"},b4bf:function(e,t,n){e.exports=n.p+"img/Vue.9a45fc76.svg"},bb76:function(e,t,n){e.exports=n.p+"img/LESS.b3473f5e.svg"},c079:function(e,t,n){"use strict";var i=n("c6c4"),a=n.n(i);a.a},c6c4:function(e,t,n){},d989:function(e,t,n){"use strict";var i=n("4f3c"),a=n.n(i);a.a},e3cd:function(e,t,n){e.exports=n.p+"img/Knockout.a2f38da0.svg"},e7e8:function(e,t,n){e.exports=n.p+"img/SASS.470548b4.svg"},f203:function(e,t,n){"use strict";var i=n("9741"),a=n.n(i);a.a}});
//# sourceMappingURL=app.0d2859d8.js.map