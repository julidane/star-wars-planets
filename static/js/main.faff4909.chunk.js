(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),c=a.n(l),i=(a(16),a(7)),o=a.n(i),u=a(10),s=a(2),m=Object(r.createContext)();var d=function(e){var t=e.children,a=Object(r.useState)([]),l=Object(s.a)(a,2),c=l[0],i=l[1],d=Object(r.useState)({filters:{filterByName:{name:""},filterByNumericValues:[],order:{column:"name",sort:"ASC"}}}),f=Object(s.a)(d,2),p=f[0],b=f[1],v=Object(r.useState)([{value:"orbital_period",label:"orbital_period"},{value:"diameter",label:"diameter"},{value:"rotation_period",label:"rotation_period"},{value:"surface_water",label:"surface_water"},{value:"population",label:"population"}]),E=Object(s.a)(v,2),O=E[0],j=E[1],y=Object(r.useState)({used:[]}),h=Object(s.a)(y,2),k=h[0],C=h[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi-trybe.herokuapp.com/api/planets/",e.next=3,fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()}));case 3:t=e.sent,(a=t.results).forEach((function(e){delete e.residents})),i(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N={data:c,setData:i,filter:p,setFilter:b,options:O,setOptions:j,usedFilters:k,setUsedFilters:C};return n.a.createElement(m.Provider,{value:N},t)},f=a(3),p=a(1);a(18);var b=function(){var e=Object(r.useContext)(m),t=e.filter,a=e.setFilter;return n.a.createElement("div",{className:"input-name-div"},n.a.createElement("p",null,"Search by Name "),n.a.createElement("input",{type:"text","data-testid":"name-filter",onChange:function(e){var r=e.target.value;a(Object(p.a)(Object(p.a)({},t),{},{filters:Object(p.a)(Object(p.a)({},t.filters),{},{filterByName:{name:r}})}))}}))};a(19);var v=function(e){var t=e.data,a=function(e){var t=e.split("T"),a=t[0].split("-"),r=t[1].split(":"),n=r[2].split(".");return"".concat(a[0],"/").concat(a[1],"/").concat(a[2]," - ").concat(r[0],":").concat(r[1],":").concat(n[0])};return n.a.createElement("div",null,n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,["name","rotation period","orbital period","diameter","climate","gravity","terrain","surface water","population","films","created","edited","url"].map((function(e,t){return n.a.createElement("th",{key:t},e)})))),n.a.createElement("tbody",null,t.map((function(e,t){var r=e.name,l=e.rotation_period,c=e.orbital_period,i=e.diameter,o=e.climate,u=e.gravity,s=e.terrain,m=e.surface_water,d=e.population,f=e.films,p=e.created,b=e.edited,v=e.url;return n.a.createElement("tr",{key:t},n.a.createElement("td",{key:e[t],"data-testid":"planet-name"},r),n.a.createElement("td",{key:e[t]},l),n.a.createElement("td",{key:e[t]},c),n.a.createElement("td",{key:e[t]},i),n.a.createElement("td",{key:e[t]},o),n.a.createElement("td",{key:e[t]},u),n.a.createElement("td",{key:e[t]},s),n.a.createElement("td",{key:e[t]},m),n.a.createElement("td",{key:e[t]},d),n.a.createElement("td",{key:e[t],className:"films"},n.a.createElement("li",null,f.map((function(e){return n.a.createElement("ul",null,n.a.createElement("a",{href:e},function(e){var t=e.match(/(\d+)/);return"Film-".concat(t[0])}(e)))})))),n.a.createElement("td",{key:e[t]},a(p)),n.a.createElement("td",{key:e[t]},a(b)),n.a.createElement("td",{key:e[t]},n.a.createElement("a",{href:v,className:"url"},function(e){var t=e.match(/(\d+)/);return"Planet-".concat(t[0])}(v))))})))))},E=a(6);a(20);var O=function(){var e=Object(r.useContext)(m),t=e.filter,a=e.setFilter,l=e.usedFilters,c=e.setUsedFilters,i=e.options,o=e.setOptions,u=t.filters.filterByNumericValues,d={column:"orbital_period",comparison:"maior que",value:""},b=Object(r.useState)(d),v=Object(s.a)(b,2),O=v[0],j=v[1],y=function(e){var t=e.target,a=t.name,r=t.value;j(Object(p.a)(Object(p.a)({},O),{},Object(E.a)({},a,r)))},h=O.column,k=O.comparison,C=O.value;return n.a.createElement("div",{className:"numerical-filters-div"},n.a.createElement("p",null,"Search By Parameters"),n.a.createElement("select",{"data-testid":"column-filter",onChange:y,name:"column",value:h},i.map((function(e,t){return n.a.createElement("option",{key:t,value:e.value},e.label)}))),n.a.createElement("select",{"data-testid":"comparison-filter",onChange:y,name:"comparison",value:k},n.a.createElement("option",{value:"maior que"},"maior que"),n.a.createElement("option",{value:"menor que"},"menor que"),n.a.createElement("option",{value:"igual a"},"igual a")),n.a.createElement("input",{type:"number","data-testid":"value-filter",onChange:y,name:"value",value:C}),n.a.createElement("button",{className:"filter-button",type:"button","data-testid":"button-filter",onClick:function(){a({filters:Object(p.a)(Object(p.a)({},t.filters),{},{filterByNumericValues:[].concat(Object(f.a)(u),[O])})}),c({used:[].concat(Object(f.a)(l.used),[O])}),o(i.filter((function(e){return e.value!==h}))),j(Object(p.a)({},d))}},"Filter"))};a(21);var j=function(){var e=Object(r.useContext)(m),t=e.usedFilters,a=e.setUsedFilters,l=e.setOptions,c=e.data,i=e.setData,o=e.filter,u=e.setFilter,d=o.filters.filterByNumericValues,b=t.used,v=[{value:"orbital_period",label:"orbital_period"},{value:"diameter",label:"diameter"},{value:"rotation_period",label:"rotation_period"},{value:"surface_water",label:"surface_water"},{value:"population",label:"population"}],E=function(e){var t=e.target.value,r=b=b.filter((function(e){return e.column!==t})),n=Object(s.a)(r,1)[0],m=Object(f.a)(c);if(n){var E=n.column,O=v.filter((function(e){return e.value!==E})),j=d.filter((function(e){return e.column!==E}));u({filters:Object(p.a)(Object(p.a)({},o.filters),{},{filterByNumericValues:[j]})}),l(O)}else l(v),i(m),u({filters:Object(p.a)(Object(p.a)({},o.filters),{},{filterByNumericValues:[]})});a({used:b})};return n.a.createElement("div",{className:"remove-filter-buttons-div"},n.a.createElement("ul",null,b.map((function(e){return n.a.createElement("li",{key:e.column,"data-testid":"filter"},n.a.createElement("div",{className:"remove-p-button"},n.a.createElement("p",null,"".concat(e.column," ").concat(e.comparison," ").concat(e.value)," "),n.a.createElement("button",{type:"button",value:e.column,onClick:E},"X")))}))))};a(22);var y=function(){var e=Object(r.useContext)(m),t=e.filter,a=e.setFilter,l=t.filters.order,c=Object(r.useState)(),i=Object(s.a)(c,2),o=i[0],u=i[1],d=Object(r.useState)(),f=Object(s.a)(d,2),b=f[0],v=f[1],E=function(e){var t=e.target.value;v(t)};return n.a.createElement("div",{className:"order-filter-div"},n.a.createElement("label",{htmlFor:"column-sort"}," ","Order by",n.a.createElement("select",{id:"column-sort","data-testid":"column-sort",onChange:function(e){var t=e.target.value;u(t)}},["name","rotation_period","orbital_period","diameter","climate","gravity","terrain","surface_water","population","films","created","edited","url"].map((function(e,t){return n.a.createElement("option",{key:t,name:e},e)})))),n.a.createElement("div",{className:"radios-and-button"},n.a.createElement("label",{htmlFor:"asc"},"Asc",n.a.createElement("input",{type:"radio",name:"order",id:"asc","data-testid":"column-sort-input-asc",value:"ASC",onChange:E})),n.a.createElement("label",{htmlFor:"desc"},"Desc",n.a.createElement("input",{type:"radio",name:"order",id:"desc","data-testid":"column-sort-input-desc",value:"DESC",onChange:E})),n.a.createElement("button",{className:"order-now-button",type:"button","data-testid":"column-sort-button",onClick:function(){a(Object(p.a)(Object(p.a)({},t),{},{filters:Object(p.a)(Object(p.a)({},t.filters),{},{order:Object(p.a)(Object(p.a)({},l),{},{column:o,sort:b})})}))}},"Order Now")))};a(23);var h=function(){return n.a.createElement("header",null,n.a.createElement("h1",null,"Star Wars Planets Search"))};a(24);var k=function(){var e=Object(r.useContext)(m).data,t=Object(r.useContext)(m).filter.filters,a=t.filterByName,l=t.filterByNumericValues,c=t.order,i=a.name,o=c.column,u=c.sort;return n.a.createElement("div",{className:"all-components"},n.a.createElement(h,null),n.a.createElement(b,null),n.a.createElement("form",null,n.a.createElement(O,null),n.a.createElement(y,null)),n.a.createElement(j,null),n.a.createElement(v,{data:function(){var t=Object(f.a)(e);return"ASC"===u?t.sort((function(e,t){var a=e[o],r=t[o];return a.localeCompare(r)})).sort((function(e,t){return parseInt(e[o],10)-parseInt(t[o],10)})):"DESC"===u&&t.sort((function(e,t){var a=e[o];return t[o].localeCompare(a)})).sort((function(e,t){return parseInt(t[o],10)-parseInt(e[o],10)})),i&&(t=t.filter((function(e){return e.name.toLowerCase().includes(i)}))),l.forEach((function(e){var a=e.comparison,r=e.column,n=e.value;switch(a){case"maior que":t=t.filter((function(e){return parseInt(e[r],10)>parseInt(n,10)}));break;case"menor que":t=t.filter((function(e){return parseInt(e[r],10)<parseInt(n,10)}));break;case"igual a":t=t.filter((function(e){return e[r]===n}));break;default:return t}})),t}()}))};var C=function(){return n.a.createElement("div",null,n.a.createElement(d,null,n.a.createElement(k,null)))};c.a.render(n.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.faff4909.chunk.js.map