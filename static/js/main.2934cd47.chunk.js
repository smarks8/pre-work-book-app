(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){},12:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(18),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),h=(a(19),function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"BOOKS!!!!!!!!"))}),b=a(11),d=(a(1),function(e){return o.a.createElement("div",{className:"search-area"},o.a.createElement("form",{onSubmit:e.searchBook,action:""},o.a.createElement("input",{onChange:e.handleSearch,type:"text"}),o.a.createElement("button",{className:"search-button",type:"submit"},"SEARCH BOOKS")))}),f=a(10),E=a.n(f),k=function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:e.image,alt:""}),o.a.createElement("div",{className:"desc"},o.a.createElement("h2",null,e.title),o.a.createElement("h3",null,e.author),o.a.createElement("h3",null,e.publisher),o.a.createElement("a",{className:"card-link",target:"_blank",href:e.externalLink},o.a.createElement("button",{className:"card-button"}," MORE ABOUT ME"))))},p=function(e){return o.a.createElement("div",{className:"list"},e.books.map(function(e,t){return o.a.createElement(k,{key:t,image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,published:e.volumeInfo.publishedDate,externalLink:e.volumeInfo.infoLink})}))},v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).searchBook=function(e){e.preventDefault(),E.a.get("https://www.googleapis.com/books/v1/volumes").query({q:a.state.searchField}).query({maxResults:40}).then(function(e){a.setState({books:Object(b.a)(e.body.items)})})},a.handleSearch=function(e){a.setState({searchField:e.target.value})},a.state={books:[],searchField:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.books.map(function(e){return e.volumeInfo.imageLinks.thumbnail})),o.a.createElement("div",{className:"Books"},"FIND SOME BOOKS",o.a.createElement(d,{searchBook:this.searchBook,handleSearch:this.handleSearch}),o.a.createElement(p,{books:this.state.books}))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2934cd47.chunk.js.map