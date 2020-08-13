(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=(a(16),a(10)),c=a(1),u=a(8),l=a.n(u);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:l.a,alt:"\u043b\u043e\u0433\u043e"}))},p=a(9),d=a.n(p),f=r.a.createContext();var _=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,i=r.a.useContext(f),s=t.owner._id===i._id,c="".concat(s?"elements__remove":"elements__remove_hidden"),u=t.likes.some((function(e){return e._id===i._id})),l="elements__like ".concat(u?"elements__like_active":"");return r.a.createElement("div",{key:t._id,className:"elements__element"},r.a.createElement("img",{onClick:function(){a(t)},className:"elements__image",src:t.link,alt:t.name}),r.a.createElement("button",{onClick:function(){o(t)},className:c,type:"button"}),r.a.createElement("div",{className:"elements__info"},r.a.createElement("h3",{className:"elements__name"},t.name),r.a.createElement("div",{className:"elements__like-group"},r.a.createElement("button",{onClick:function(){n(t)},className:l,type:"button"}),r.a.createElement("span",{className:"elements__like-counter"},t.likes.length))))};var h=function(e){var t=r.a.useContext(f);return r.a.createElement("main",null,r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__info"},r.a.createElement("button",{className:"profile__edit-avatar",type:"button",onClick:e.onEditAvatar},r.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u0430\u0432\u0442\u043e\u0440\u0430"}),r.a.createElement("img",{className:"profile__pencil",src:d.a,alt:"\u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448"})),r.a.createElement("div",{className:"profile__description"},r.a.createElement("div",{className:"profile__name"},r.a.createElement("h2",{className:"profile__author"},t.name),r.a.createElement("p",{className:"profile__status"},t.about)),r.a.createElement("button",{className:"profile__edit",type:"button",onClick:e.onEditProfile}))),r.a.createElement("button",{className:"profile__add",type:"button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},e.cards&&e.cards.map((function(t){return r.a.createElement(_,{key:t._id,card:t,onCardClick:e.onImageClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return r.a.createElement("div",{id:e.name,className:e.isOpen?"popup popup_opened":"popup"},r.a.createElement("form",{onSubmit:e.onSubmit,className:"popup__container",name:e.name,noValidate:!0,method:"post",action:"#"},r.a.createElement("button",{onClick:e.onClose,className:"popup__close",type:"button"}),r.a.createElement("h2",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{className:"popup__save",type:"submit"},e.submit)))};var b=function(e){var t=r.a.useContext(f),a=r.a.useRef(),n=r.a.useRef();return r.a.useEffect((function(){a.current.value=t.name,n.current.value=t.about}),[t]),r.a.createElement(E,{name:"form-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a.current.value,about:n.current.value})}},r.a.createElement("input",{onChange:function(){a.current.focus()},id:"form-author",className:"popup__input",type:"text",name:"author",ref:a,required:!0,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{2,40}"}),r.a.createElement("span",{className:"popup__input-error",id:"form-author-error"}),r.a.createElement("input",{onChange:function(){n.current.focus()},id:"form-status",className:"popup__input",type:"text",name:"status",ref:n,required:!0,placeholder:"\u0412\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451, -]{2,200}"}),r.a.createElement("span",{className:"popup__input-error",id:"form-status-error"}))};var C=function(e){return r.a.createElement(E,{name:"form-card-remove",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onSubmit()},onClose:e.onClose})};var k=function(e){var t=r.a.useRef(),a=r.a.useContext(f);return r.a.useEffect((function(){t.current.value=a.avatar}),[a]),r.a.createElement(E,{name:"form-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},r.a.createElement("input",{onChange:function(){t.current.focus()},ref:t,id:"avatar-link",className:"popup__input",type:"url",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),r.a.createElement("span",{className:"popup__input-error",id:"avatar-link-error"}))};var y=function(e){var t=r.a.useState(),a=Object(c.a)(t,2),n=a[0],o=a[1],i=r.a.useState(),s=Object(c.a)(i,2),u=s[0],l=s[1];return r.a.createElement(E,{name:"form-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:u})}},r.a.createElement("input",{onChange:function(e){o(e.target.value)},id:"card-name",className:"popup__input",type:"text",name:"name",minLength:"1",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement("span",{className:"popup__input-error",id:"card-name-error"}),r.a.createElement("input",{onChange:function(e){l(e.target.value)},id:"card-url",className:"popup__input",type:"url",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r.a.createElement("span",{className:"popup__input-error",id:"card-url-error"}))};var g=function(e){return r.a.createElement("div",{id:"element-image",className:e.isOpen?"popup popup_opened":"popup"},r.a.createElement("div",{className:"popup__image-container"},r.a.createElement("button",{onClick:e.onClose,className:"popup__close",type:"button"}),r.a.createElement("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),r.a.createElement("h3",{className:"popup__image-name"},e.card.name)))},N=a(4),S=a(5),O={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},j=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(S.a)(e,[{key:"getProfileInfo",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setProfileUserInfo",value:function(e,t){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setProfileAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeStatus",value:function(e,t){return fetch(this._baseUrl+"cards/likes/"+e,{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-12","/"),headers:{authorization:"5e47c042-6361-4cc1-a7ce-8d80154cfe12","Content-Type":"application/json"}}),P=function(){function e(t,a){Object(N.a)(this,e),this._formName=a,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(a.querySelectorAll(t.inputSelector)),this._buttonSubmit=a.querySelector(t.submitButtonSelector)}return Object(S.a)(e,[{key:"_showInputError",value:function(e,t){var a=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),a.textContent=t,a.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showButtonError",value:function(){this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.setAttribute("disabled",!0)}},{key:"_hideButtonError",value:function(){this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.removeAttribute("disabled")}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.every((function(e){return e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._hideButtonError():this._showButtonError()}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}}]),e}();var L=function(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),i=Object(c.a)(o,2),u=i[0],l=i[1],p=r.a.useState(!1),d=Object(c.a)(p,2),_=d[0],E=d[1],N=r.a.useState(!1),S=Object(c.a)(N,2),L=S[0],U=S[1],A=r.a.useState(!1),w=Object(c.a)(A,2),I=w[0],B=w[1],x=r.a.useState({}),q=Object(c.a)(x,2),D=q[0],T=q[1],V=r.a.useState({}),J=Object(c.a)(V,2),R=J[0],z=J[1],M=r.a.useState([]),H=Object(c.a)(M,2),W=H[0],Z=H[1],$=r.a.useState([]),F=Object(c.a)($,2),G=F[0],K=F[1];function Q(){n(!1),l(!1),E(!1),U(!1),B(!1),T({})}return r.a.useEffect((function(){Promise.all([j.getProfileInfo(),j.getCards()]).then((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];z(a),Z(n)})).catch((function(e){console.log(e)}));var e=new P(O,document.querySelector("#form-profile")),t=new P(O,document.querySelector("#form-avatar")),a=new P(O,document.querySelector("#form-card"));e.enableValidation(),t.enableValidation(),a.enableValidation()}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(f.Provider,{value:R},r.a.createElement(m,null),r.a.createElement(h,{onEditProfile:function(){n(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){E(!0)},onImageClick:function(e){T(e),U(!0)},cards:W,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===R._id}));j.changeLikeStatus(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));Z(a)}))},onCardDelete:function(e){K(e),B(!0)}}),r.a.createElement(v,null),r.a.createElement(b,{isOpen:a,onClose:Q,onUpdateUser:function(e){j.setProfileUserInfo(e.name,e.about).then((function(e){z(e),Q()})).catch((function(e){console.log(e)}))}}),r.a.createElement(k,{isOpen:_,onClose:Q,onUpdateAvatar:function(e){j.setProfileAvatar(e.avatar).then((function(e){z(e),Q()})).catch((function(e){console.log(e)}))}}),r.a.createElement(y,{isOpen:u,onClose:Q,onAddPlace:function(e){j.addCard(e).then((function(e){Z([].concat(Object(s.a)(W),[e])),Q()})).catch((function(e){console.log(e)}))}}),r.a.createElement(C,{isOpen:I,onSubmit:function(){j.deleteCard(G._id).then((function(){var e=W.filter((function(e){return e._id!==G._id}));Z(e),Q()})).catch((function(e){console.log(e)}))},onClose:Q}),r.a.createElement(g,{isOpen:L,onClose:Q,card:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},9:function(e,t,a){e.exports=a.p+"static/media/edit-avatar-pencil.d476a8b8.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.aacab014.chunk.js.map