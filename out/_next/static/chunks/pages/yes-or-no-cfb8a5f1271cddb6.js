(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{3144:function(e){"use strict";let t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},3590:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/yes-or-no",function(){return a(5395)}])},5395:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return b}});var n=a(5893),i=a(6465),r=a.n(i),c=a(7294),l=a(3144),s=a.n(l),o=a(1664),d=a.n(o),u=a(3623),p=a(967),f=a(5458);let h=async()=>{let e=await s()("https://platzi-avo.vercel.app/api/yes-or-no"),{data:t}=await e.json();return t};var b=!0;t.default=e=>{let{initialResult:t}=e,[a,i]=(0,c.useState)(!1),[l,s]=(0,c.useState)(t),[o,b]=(0,c.useState)(0);(0,c.useEffect)(()=>{i(!0),h().then(e=>{s(e),i(!1)})},[o]);let v=async()=>{b(o+1)};return(0,n.jsxs)(f.Z,{children:[(0,n.jsxs)("div",{className:"jsx-e8e52dc15b3c8bc",children:[(0,n.jsx)(u.Z,{as:"h1",color:a?"grey":"green",children:l}),(0,n.jsx)("p",{className:"jsx-e8e52dc15b3c8bc",children:(0,n.jsx)(p.Z,{color:"green",onClick:v,loading:a,disabled:a,children:"Intentar de nuevo"})}),(0,n.jsx)("p",{className:"jsx-e8e52dc15b3c8bc",children:(0,n.jsx)(d(),{href:"/",children:(0,n.jsx)("a",{className:"jsx-e8e52dc15b3c8bc ui black button basic",children:"Volver al inicio"})})})]}),(0,n.jsx)(r(),{id:"e8e52dc15b3c8bc",children:"div.jsx-e8e52dc15b3c8bc{text-align:center}div.jsx-e8e52dc15b3c8bc h1.header{font-size:7rem;text-transform:uppercase}"})]})}},967:function(e,t,a){"use strict";a.d(t,{Z:function(){return I}});var n=a(7462),i=a(5671),r=a(9521),c=a(2963),l=a(1120),s=a(7326),o=a(2531),d=a(4942),u=a(5907),p=a.n(u),f=a(4293),h=a.n(f),b=a(6769),v=a(4184),m=a.n(v),Z=a(7294),G=a(2248),g=a(5929),y=a(8935),x=a(2519),N=a(3619),k=a(5150),E=a(5142);function j(e){var t=e.children,a=e.className,i=e.content,r=e.hidden,c=e.visible,l=m()((0,g.lG)(c,"visible"),(0,g.lG)(r,"hidden"),"content",a),s=(0,y.Z)(j,e),o=(0,x.Z)(j,e);return Z.createElement(o,(0,n.Z)({},s,{className:l}),G.kK(t)?i:t)}j.handledProps=["as","children","className","content","hidden","visible"],j.propTypes={};var _=a(5161),C=a.n(_);function P(e){var t=e.attached,a=e.basic,i=e.buttons,r=e.children,c=e.className,l=e.color,s=e.compact,o=e.content,d=e.floated,u=e.fluid,p=e.icon,f=e.inverted,b=e.labeled,v=e.negative,N=e.positive,k=e.primary,E=e.secondary,j=e.size,_=e.toggle,w=e.vertical,T=e.widths,K=m()("ui",l,j,(0,g.lG)(a,"basic"),(0,g.lG)(s,"compact"),(0,g.lG)(u,"fluid"),(0,g.lG)(p,"icon"),(0,g.lG)(f,"inverted"),(0,g.lG)(b,"labeled"),(0,g.lG)(v,"negative"),(0,g.lG)(N,"positive"),(0,g.lG)(k,"primary"),(0,g.lG)(E,"secondary"),(0,g.lG)(_,"toggle"),(0,g.lG)(w,"vertical"),(0,g.sU)(t,"attached"),(0,g.cD)(d,"floated"),(0,g.H0)(T),"buttons",c),z=(0,y.Z)(P,e),R=(0,x.Z)(P,e);return h()(i)?Z.createElement(R,(0,n.Z)({},z,{className:K}),G.kK(r)?o:r):Z.createElement(R,(0,n.Z)({},z,{className:K}),C()(i,function(e){return I.create(e)}))}function w(e){var t=e.className,a=e.text,i=m()("or",t),r=(0,y.Z)(w,e),c=(0,x.Z)(w,e);return Z.createElement(c,(0,n.Z)({},r,{className:i,"data-text":a}))}P.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],P.propTypes={},w.handledProps=["as","className","text"],w.propTypes={};var T=function(e){function t(){(0,i.Z)(this,t);for(var e,a,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=(0,c.Z)(this,(e=(0,l.Z)(t)).call.apply(e,[this].concat(r))),(0,d.Z)((0,s.Z)(a),"ref",(0,Z.createRef)()),(0,d.Z)((0,s.Z)(a),"computeElementType",function(){var e=a.props,t=e.attached,n=e.label;if(!h()(t)||!h()(n))return"div"}),(0,d.Z)((0,s.Z)(a),"computeTabIndex",function(e){var t=a.props,n=t.disabled,i=t.tabIndex;return h()(i)?n?-1:"div"===e?0:void 0:i}),(0,d.Z)((0,s.Z)(a),"focus",function(){return p()(a.ref.current,"focus")}),(0,d.Z)((0,s.Z)(a),"handleClick",function(e){if(a.props.disabled){e.preventDefault();return}p()(a.props,"onClick",e,a.props)}),(0,d.Z)((0,s.Z)(a),"hasIconClass",function(){var e=a.props,t=e.labelPosition,n=e.children,i=e.content,r=e.icon;return!0===r||r&&(t||G.kK(n)&&h()(i))}),a}return(0,o.Z)(t,e),(0,r.Z)(t,[{key:"computeButtonAriaRole",value:function(e){var t=this.props.role;return h()(t)?"button"!==e?"button":void 0:t}},{key:"render",value:function(){var e=this.props,a=e.active,i=e.animated,r=e.attached,c=e.basic,l=e.children,s=e.circular,o=e.className,d=e.color,u=e.compact,p=e.content,f=e.disabled,v=e.floated,N=e.fluid,j=e.icon,_=e.inverted,C=e.label,P=e.labelPosition,w=e.loading,T=e.negative,I=e.positive,K=e.primary,z=e.secondary,R=e.size,S=e.toggle,U=m()(d,R,(0,g.lG)(a,"active"),(0,g.lG)(c,"basic"),(0,g.lG)(s,"circular"),(0,g.lG)(u,"compact"),(0,g.lG)(N,"fluid"),(0,g.lG)(this.hasIconClass(),"icon"),(0,g.lG)(_,"inverted"),(0,g.lG)(w,"loading"),(0,g.lG)(T,"negative"),(0,g.lG)(I,"positive"),(0,g.lG)(K,"primary"),(0,g.lG)(z,"secondary"),(0,g.lG)(S,"toggle"),(0,g.sU)(i,"animated"),(0,g.sU)(r,"attached")),A=m()((0,g.sU)(P||!!C,"labeled")),D=m()((0,g.lG)(f,"disabled"),(0,g.cD)(v,"floated")),O=(0,y.Z)(t,this.props),B=(0,x.Z)(t,this.props,this.computeElementType),X=this.computeTabIndex(B);if(!h()(C)){var H=m()("ui",U,"button",o),V=m()("ui",A,"button",o,D),q=E.Z.create(C,{defaultProps:{basic:!0,pointing:"left"===P?"right":"left"},autoGenerateKey:!1});return Z.createElement(B,(0,n.Z)({},O,{className:V,onClick:this.handleClick}),"left"===P&&q,Z.createElement(b.Z,{innerRef:this.ref},Z.createElement("button",{className:H,"aria-pressed":S?!!a:void 0,disabled:f,tabIndex:X},k.Z.create(j,{autoGenerateKey:!1})," ",p)),("right"===P||!P)&&q)}var F=m()("ui",U,D,A,"button",o),J=!G.kK(l),L=this.computeButtonAriaRole(B);return Z.createElement(b.Z,{innerRef:this.ref},Z.createElement(B,(0,n.Z)({},O,{className:F,"aria-pressed":S?!!a:void 0,disabled:f&&"button"===B||void 0,onClick:this.handleClick,role:L,tabIndex:X}),J&&l,!J&&k.Z.create(j,{autoGenerateKey:!1}),!J&&p))}}]),t}(Z.Component);(0,d.Z)(T,"defaultProps",{as:"button"}),(0,d.Z)(T,"Content",j),(0,d.Z)(T,"Group",P),(0,d.Z)(T,"Or",w),(0,d.Z)(T,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),T.propTypes={},T.create=(0,N.u5)(T,function(e){return{content:e}});var I=T}},function(e){e.O(0,[232,458,774,888,179],function(){return e(e.s=3590)}),_N_E=e.O()}]);