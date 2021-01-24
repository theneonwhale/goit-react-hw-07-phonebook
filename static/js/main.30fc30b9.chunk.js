(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__MRMiN",item:"ContactForm_item__19TAB",title:"ContactForm_title__2S1HZ",input:"ContactForm_input__2H4pB",button:"ContactForm_button__4j8fc"}},13:function(t,e,n){t.exports={contacts:"ContactList_contacts__lsiEb",item:"ContactList_item__289x4",contact:"ContactList_contact__oYHiV",button:"ContactList_button__3W-Ng"}},22:function(t,e,n){t.exports={filter:"Filter_filter__2-F7s",title:"Filter_title__9hCAE",input:"Filter_input__2dm-7"}},24:function(t,e,n){t.exports={section:"Section_section__2rtNI",title:"Section_title__3rwSo"}},27:function(t,e,n){t.exports={totalContacts:"TotalContacts_totalContacts__1C_p3",total:"TotalContacts_total__17Ja3"}},37:function(t,e,n){t.exports={container:"Container_container__Ykwy1"}},41:function(t,e,n){t.exports={Loader:"Loader_Loader__2HBaV"}},42:function(t,e,n){t.exports={notification:"Notification_notification__2eUSj"}},49:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"getContacts",(function(){return k})),n.d(c,"getFilter",(function(){return L})),n.d(c,"getLoading",(function(){return S})),n.d(c,"getError",(function(){return E})),n.d(c,"getVisibleContacts",(function(){return T}));var a={};n.r(a),n.d(a,"changeFilter",(function(){return V}));var r=n(1),o=n(0),i=n.n(o),u=n(8),s=n.n(u),l=(n(49),n(37)),b=n.n(l);function j(t){var e=t.children;return Object(r.jsx)("div",{className:b.a.container,children:e})}var d=n(24),f=n.n(d);function O(t){var e=t.title,n=void 0===e?"Section":e,c=t.children;return Object(r.jsxs)("section",{className:f.a.section,children:[Object(r.jsx)("h2",{className:f.a.title,children:n}),c]})}var p=n(14),m=n(3),h=n(11),C=n.n(h),x=n(21),_=n(16),v=n.n(_);v.a.defaults.baseURL="http://localhost:4040";var g=function(t){return v.a.post("/contacts",t)},N=function(t){return v.a.delete("/contacts/".concat(t))},w=n(6),y={fetchContacts:Object(w.c)("contacts/fetchContacts",function(){var t=Object(x.a)(C.a.mark((function t(e,n){var c,a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,v.a.get("/contacts");case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),addContact:Object(w.c)("contacts/addContact",function(){var t=Object(x.a)(C.a.mark((function t(e,n){var c,a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,g(e);case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),deleteContact:Object(w.c)("contacts/deleteContact",function(){var t=Object(x.a)(C.a.mark((function t(e,n){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,N(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())},F=n(18),k=function(t){return t.contacts.items},L=function(t){return t.contacts.filter},S=function(t){return t.contacts.loading},E=function(t){return t.contacts.error},T=Object(F.a)([k,L],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),V=Object(w.b)("contacts/filter",(function(t){return{payload:t}})),B=n(40),A=n.n(B),H=n(41),W=n.n(H);function J(){return Object(r.jsx)("div",{className:W.a.Loader,children:Object(r.jsx)(A.a,{type:"TailSpin",color:"#00BFFF",height:20,width:20})})}var M=n(10),R=n.n(M),I=n(17);n(94);function U(){var t=Object(o.useState)(""),e=Object(p.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)(""),u=Object(p.a)(i,2),s=u[0],l=u[1],b=Object(o.useState)(!1),j=Object(p.a)(b,2),d=j[0],f=j[1],O=Object(m.c)(c.getContacts),h=Object(m.c)(c.getLoading),C={name:n,number:s},x=Object(m.b)(),_=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(f(!0),n){case"name":a(c);break;case"number":l(c);break;default:return}},v=function(){setTimeout((function(){a(""),l("")}),0),setTimeout((function(){f(!1)}),1e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==C.name?""!==C.number?(O.find((function(t){return t.name.toLowerCase()===C.name.toLowerCase()}))?I.b.dark("\ud83e\udd9d ".concat(n," is already in contacts."),{autoClose:3e3}):x(y.addContact(C)),v()):I.b.dark("\ud83e\udd9d Enter number...",{autoClose:3e3}):I.b.dark("\ud83e\udd9d Enter name...",{autoClose:3e3})},className:R.a.form,children:[Object(r.jsxs)("label",{className:R.a.item,children:[Object(r.jsx)("p",{className:R.a.title,children:"Name"}),Object(r.jsx)("input",{type:"text",name:"name",value:n,onChange:_,placeholder:"Enter name here...",className:R.a.input})]}),Object(r.jsxs)("label",{className:R.a.item,children:[Object(r.jsx)("p",{className:R.a.title,children:"Number"}),Object(r.jsx)("input",{type:"text",name:"number",value:s,onChange:_,placeholder:"Enter number here...",className:R.a.input})]}),Object(r.jsx)("button",{type:"submit",className:R.a.button,children:h&&d?Object(r.jsx)(J,{}):"Add contact"})]}),Object(r.jsx)(I.a,{})]})}var Y=n(27),z=n.n(Y);function D(){var t=Object(m.c)(c.getContacts);return Object(r.jsxs)("div",{className:z.a.totalContacts,children:["Contacts in phonebook: ",Object(r.jsx)("span",{className:z.a.total,children:t.length})]})}var P=n(13),Z=n.n(P);function q(t){var e=t.name,n=t.number,a=t.id,i=Object(o.useState)(0),u=Object(p.a)(i,2),s=u[0],l=u[1],b=Object(m.c)(c.getLoading),j=s===a,d=Object(m.b)();return Object(r.jsxs)("li",{className:Z.a.item,children:[Object(r.jsxs)("p",{className:Z.a.contact,children:[e,": ",n]}),Object(r.jsx)("button",{onClick:function(){l(a),d(y.deleteContact(a))},className:Z.a.button,children:b&&j?Object(r.jsx)(J,{}):"Remove"})]})}function G(){var t=Object(m.c)(c.getVisibleContacts);return Object(r.jsx)("ul",{className:Z.a.contacts,children:t.map((function(t){var e=t.name,n=void 0===e?"anonymous":e,c=t.number,a=void 0===c?"unknown":c,o=t.id,i=void 0===o?null:o;return Object(r.jsx)(q,{name:n,number:a,id:i},i)}))})}var K=n(22),Q=n.n(K);function X(){var t=Object(m.c)(c.getFilter),e=Object(m.b)();return Object(r.jsxs)("label",{className:Q.a.filter,children:[Object(r.jsx)("p",{className:Q.a.title,children:"Find contacts by name"}),Object(r.jsx)("input",{type:"text",value:t,onChange:function(t){return e(a.changeFilter(t.target.value))},placeholder:"Enter name here...",className:Q.a.input})]})}var $=n(42),tt=n.n($);function et(t){var e=t.message,n=void 0===e?"Nothing to show.":e;return Object(r.jsxs)("p",{className:tt.a.notification,children:[" ",n," "]})}function nt(){var t=Object(m.c)(c.getContacts),e=Object(m.c)(c.getVisibleContacts),n=Object(m.c)(c.getError),a=Object(m.b)();return Object(o.useEffect)((function(){a(y.fetchContacts())}),[a]),Object(r.jsxs)(j,{children:[Object(r.jsx)(O,{title:"Phone book",children:Object(r.jsx)(U,{})}),Object(r.jsxs)(O,{title:"Contacts",children:[t.length>0&&Object(r.jsx)(D,{}),t.length>0&&Object(r.jsx)(X,{}),e.length>0?Object(r.jsx)(G,{}):Object(r.jsx)(et,{message:"Nothing to show."}),n&&Object(r.jsx)(et,{message:n.message})]})]})}n(95);var ct,at,rt,ot=n(20),it=n(4),ut=n(5),st=Object(w.d)([],(ct={},Object(it.a)(ct,y.fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(it.a)(ct,y.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(ot.a)(t),[n])})),Object(it.a)(ct,y.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),ct)),lt=Object(w.d)("",Object(it.a)({},a.changeFilter,(function(t,e){return e.payload}))),bt=Object(w.d)(!1,(at={},Object(it.a)(at,y.fetchContacts.pending,(function(){return!0})),Object(it.a)(at,y.fetchContacts.fulfilled,(function(){return!1})),Object(it.a)(at,y.fetchContacts.rejected,(function(){return!1})),Object(it.a)(at,y.addContact.pending,(function(){return!0})),Object(it.a)(at,y.addContact.fulfilled,(function(){return!1})),Object(it.a)(at,y.addContact.rejected,(function(){return!1})),Object(it.a)(at,y.deleteContact.pending,(function(){return!0})),Object(it.a)(at,y.deleteContact.fulfilled,(function(){return!1})),Object(it.a)(at,y.deleteContact.rejected,(function(){return!1})),at)),jt=Object(w.d)(null,(rt={},Object(it.a)(rt,y.fetchContacts.rejected,(function(t,e){return e.payload})),Object(it.a)(rt,y.fetchContacts.pending,(function(){return null})),Object(it.a)(rt,y.addContact.rejected,(function(t,e){return e.payload})),Object(it.a)(rt,y.addContact.pending,(function(){return null})),Object(it.a)(rt,y.deleteContact.rejected,(function(t,e){return e.payload})),Object(it.a)(rt,y.deleteContact.pending,(function(){return null})),rt)),dt=Object(ut.c)({items:st,filter:lt,loading:bt,error:jt}),ft=n(12),Ot=n(43),pt=n.n(Ot),mt=Object(w.a)({reducer:{contacts:dt},middleware:[].concat(Object(ot.a)(Object(w.e)({serializableCheck:{ignoredActions:[ft.a,ft.f,ft.b,ft.c,ft.d,ft.e]}})),[pt.a]),devTools:!1});s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m.a,{store:mt,children:Object(r.jsx)(nt,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.30fc30b9.chunk.js.map