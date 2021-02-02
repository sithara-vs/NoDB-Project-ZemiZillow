(this["webpackJsonpnodb-zemizillow"]=this["webpackJsonpnodb-zemizillow"]||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),s=n(19),c=n.n(s),i=(n(25),n(4)),l=n(5),h=n(8),j=n(7),u=n(6),d=n(9),p=n(3),b=n.n(p),g=(n(44),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).updateFavoriteStatus=function(t){var n={favorite:t};b.a.put("/api/property/".concat(e.props.data.id),n).then((function(t){e.setState({favorite:t.data.favorite})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.state={favorite:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({favorite:this.props.data.favorite})}},{key:"render",value:function(){var e=this,t=this.props.data,n=t.year,r=t.location,a=t.image,s=t.rate;return Object(o.jsx)("div",{className:"Display",children:Object(o.jsxs)("article",{className:"properties",children:[Object(o.jsxs)("h4",{children:["Year Built : ",n]}),Object(o.jsxs)("h4",{children:["Location : ",r]}),Object(o.jsxs)("h4",{children:["Rate : ",s]}),Object(o.jsx)("img",{src:a,alt:n}),Object(o.jsxs)("div",{className:"Check",children:[this.state.favorite?Object(o.jsx)("button",{onClick:function(){return e.updateFavoriteStatus(!1)},children:Object(o.jsx)("h4",{children:"Unfavorite"})}):Object(o.jsx)("button",{onClick:function(){return e.updateFavoriteStatus(!0)},children:Object(o.jsx)("h4",{children:"Favorite"})}),Object(o.jsxs)("button",{onClick:function(){return e.props.deleteProperty(e.props.data.id)},children:[" ",Object(o.jsx)("h4",{children:"Remove Property"})]})]}),Object(o.jsx)("br",{})]})})}}]),n}(r.Component));n(45),n(46);function O(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h4",{children:"Where realty begins..."})})}var f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={location:"",year:void 0},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("span",{className:"title",children:[Object(o.jsx)(O,{}),Object(o.jsx)("div",{className:"Zillow",children:Object(o.jsx)("h1",{children:"Zemi Zillow"})})]}),Object(o.jsxs)("div",{className:"Search",children:[Object(o.jsx)("input",{name:"location",placeholder:"Location",onChange:this.handleChange}),Object(o.jsx)("button",{onClick:function(){return e.props.getProperties(e.state.location,"location")},children:Object(o.jsx)("h3",{children:"Search "})}),Object(o.jsx)("input",{name:"year",placeholder:"Year",onChange:this.handleChange}),Object(o.jsx)("button",{onClick:function(){return e.props.getProperties(e.state.year,"year")},children:Object(o.jsx)("h3",{children:"Search "})})]})]})}}]),n}(r.Component),m=(n(47),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.addProperty=function(){var t=e.state,n=t.year,o=t.rate,r=t.location,a={year:n,rate:o,location:r,image:t.image,favorite:"on"===e.state.favorite};n&&o&&r?b.a.post("/api/properties",a).then((function(t){return e.props.getProperties()})).catch((function(e){throw console.log("Show error notification!"),new Error(e)})):alert("Please add details! ")},e.state={year:void 0,rate:void 0,location:"",image:"",favorite:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)("span",{className:"Inputs",children:[Object(o.jsx)("h3",{children:"Add Property"}),Object(o.jsx)("input",{name:"year",placeholder:"year built",onChange:function(t){return e.handleChange(t)}}),Object(o.jsx)("input",{name:"rate",placeholder:"Rate",onChange:function(t){return e.handleChange(t)}}),Object(o.jsx)("input",{name:"location",placeholder:"location",onChange:function(t){return e.handleChange(t)}}),Object(o.jsx)("input",{name:"image",placeholder:"image url",onChange:function(t){return e.handleChange(t)}}),Object(o.jsxs)("button",{onClick:this.addProperty,children:[Object(o.jsx)("h4",{children:"Add"})," "]})]})})}}]),n}(r.Component));n(48);function v(e){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("address",{children:Object(o.jsx)("h3",{children:" Address : 1234 Zillow Avenue , Zillow,Connecticut - 09876"})})})}n(49);var x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getProperties=function(t,n){"location"===n?b.a.get("/api/properties?location=".concat(t)).then((function(t){e.setState({properties:t.data})})):"year"===n?b.a.get("/api/properties?year=".concat(t)).then((function(t){e.setState({properties:t.data})})):b.a.get("/api/properties/").then((function(t){e.setState({properties:t.data.reverse()})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))},e.deleteProperty=function(t){b.a.delete("/api/property/".concat(t)).then((function(t){console.log(t),e.setState({properties:t.data})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))},e.state={properties:[],showHomes:!0},e.toggleShowHomes=e.toggleShowHomes.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"toggleShowHomes",value:function(){console.log("hit toggleShowHomes"),this.setState({showHomes:!this.state.showHomes}),console.log("hit the end of toggleShowHomes",this.state)}},{key:"componentDidMount",value:function(){this.getProperties()}},{key:"render",value:function(){var e=this,t=this.state.properties.map((function(t){return Object(o.jsx)(g,{data:t,deleteProperty:e.deleteProperty})})),n=!0===this.state.showHomes?Object(o.jsxs)("article",{className:"homes",children:[" ",t]}):Object(o.jsx)(m,{getProperties:this.getProperties});return Object(o.jsxs)("div",{className:"Style",children:[Object(o.jsx)("header",{className:"Header",children:Object(o.jsx)(f,{getProperties:this.getProperties},"header")}),Object(o.jsxs)("section",{children:[Object(o.jsx)("button",{onClick:function(){return e.toggleShowHomes()},children:!0===this.state.showHomes?Object(o.jsx)("h3",{children:"Add Property"}):Object(o.jsx)("h3",{children:"Show Homes"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),n,Object(o.jsx)("footer",{children:Object(o.jsx)(v,{})})]})}}]),n}(r.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),a(e),s(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.7e4e92e8.chunk.js.map