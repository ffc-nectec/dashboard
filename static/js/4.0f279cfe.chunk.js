(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{444:function(e,t,a){"use strict";a.r(t);a(305);var n=a(312),r=(a(333),a(443)),l=(a(313),a(331)),o=(a(336),a(28)),i=a(18),c=a(19),s=a(22),m=a(20),d=a(79),u=a(21),p=a(0),h=a.n(p),b=a(85),f=a(338),v=a.n(f),E=a(298),g=a.n(E),y=a(306),_=a.n(y),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.submit,a=e.pyramid01,n=e.namehospital,r=a.byAge;if(console.log(r,"lkjhgf"),void 0!==r){var l=r.map(function(e){return e.age}),o=r.map(function(e){return e.female}),i=r.map(function(e){return-Math.abs(e.male)}),c=v()(a.date).tz("Asia/Bangkok"),s=a.undefinedAge+a.undefinedSex;g.a.setOptions({lang:{thousandsSep:","}});var m={chart:{type:"bar",style:{fontFamily:"'Kanit', sans-serif"}},credits:{enabled:!1},colors:["#008FFB","#FF4560"],title:{text:""!==n?"\u0e1e\u0e35\u0e23\u0e30\u0e21\u0e34\u0e14\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23</b></b></br><br/>".concat(n):"\u0e1e\u0e35\u0e23\u0e30\u0e21\u0e34\u0e14\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},subtitle:{text:null},xAxis:[{categories:l,reversed:!1,labels:{step:1}},{opposite:!0,reversed:!1,categories:l,linkedTo:0,labels:{step:1}}],yAxis:{title:{text:null},labels:{formatter:function(){return Math.abs(this.value)}}},plotOptions:{series:{stacking:"normal"}},lang:{thousandsSep:","},tooltip:{formatter:function(){return"<b>".concat(this.series.name,", \u0e0a\u0e48\u0e27\u0e07\u0e2d\u0e32\u0e22\u0e38 ").concat(this.point.category,"</b><br/>")+"\u0e08\u0e33\u0e19\u0e27\u0e19:".concat(g.a.numberFormat(Math.abs(this.point.y),0))}},series:[{name:"\u0e0a\u0e32\u0e22",data:i},{name:"\u0e2b\u0e0d\u0e34\u0e07",data:o}]};return h.a.createElement("div",null,h.a.createElement(_.a,{highcharts:g.a,options:m,onChange:t,style:{width:"100%",height:"400px"}}),h.a.createElement("div",{className:"d-flex flex-wrap"},h.a.createElement("div",{className:"mr-5 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#008ffb"}}),"\u0e0a\u0e32\u0e22"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},a.male.toLocaleString())),h.a.createElement("div",{className:"mr-5 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut--danger"}),"\u0e2b\u0e0d\u0e34\u0e07"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},a.female.toLocaleString())),h.a.createElement("div",{className:"mr-5 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#333333"}}),"\u0e44\u0e21\u0e48\u0e23\u0e30\u0e1a\u0e38"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},s.toLocaleString())),h.a.createElement("div",{className:"mr-5 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut--success"}),"\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},a.total.toLocaleString())),h.a.createElement("div",{className:"mr-5 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#ffff99"}}),"\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},c.format("DD MMMM YYYY HH:mm:ss")))))}return h.a.createElement("div",null,h.a.createElement(b.Helmet,{title:"Dashboard:\xa0Analytics"}))}}]),t}(h.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.submit,n=e.namehospital,r=t.byActive;if(void 0!==r){var l=r.map(function(e){return{name:e.name,y:e.peple}});g.a.setOptions({lang:{thousandsSep:","}});var o={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",style:{fontFamily:"'Kanit', sans-serif"}},credits:{enabled:!1},colors:["rgb(144, 237, 125)","rgb(247, 163, 92)","#FF4560","#333333"],title:{text:""!==n?"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e2a\u0e39\u0e07\u0e2d\u0e32\u0e22\u0e38 60 \u0e1b\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b</b></br><br/>(\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19 ADL \u0e41\u0e25\u0e49\u0e27)</b></br><br/>".concat(n):"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e2a\u0e39\u0e07\u0e2d\u0e32\u0e22\u0e38 60 \u0e1b\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b</b></br><br/>(\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19 ADL \u0e41\u0e25\u0e49\u0e27)</br></br><br/>\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"\u0e08\u0e33\u0e19\u0e27\u0e19",colorByPoint:!0,data:l}]};return h.a.createElement("div",null,h.a.createElement(_.a,{highcharts:g.a,options:o,onChange:a,style:{width:"100%",height:"400px"}}),h.a.createElement("div",{className:"d-flex flex-wrap"},h.a.createElement("div",{className:"mr-4 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"rgb(144, 237, 125)"}}),"\u0e15\u0e34\u0e14\u0e2a\u0e31\u0e07\u0e04\u0e21"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.OK.toLocaleString())),h.a.createElement("div",{className:"mr-4 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"rgb(247, 163, 92)"}}),"\u0e15\u0e34\u0e14\u0e1a\u0e49\u0e32\u0e19"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.MID.toLocaleString())),h.a.createElement("div",{className:"mr-4 mb-2"},h.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},h.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#FF4560"}}),"\u0e15\u0e34\u0e14\u0e40\u0e15\u0e35\u0e22\u0e07"),h.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.VERYHI.toLocaleString()))))}return h.a.createElement("div",null,h.a.createElement(b.Helmet,{title:"Dashboard:\xa0Analytics"}))}}]),t}(h.a.Component),w=(a(442),a(440)),S=(a(346),a(441)),O=S.a.Panel,j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.chronic,a=e.submit,n=e.namehospital,r=t.byIcd10;if(void 0!==r){var l=r.map(function(e){return{name:e.name,y:e.y}}),o=[{title:"\u0e0a\u0e37\u0e48\u0e2d",dataIndex:"name",key:"1"},{title:"\u0e08\u0e33\u0e19\u0e27\u0e19",dataIndex:"y",key:"1",render:function(e){return h.a.createElement("span",null,e.toLocaleString("en-US"))}}];g.a.setOptions({lang:{thousandsSep:","}});var i={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",style:{fontFamily:"'Kanit', sans-serif"}},credits:{enabled:!1},colors:["rgb(144, 237, 125)","rgb(247, 163, 92)","#FF4560","#333333","#008FFB"],title:{text:""!==n?"\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07</b></br><br/>".concat(n):"\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1}}},series:[{name:"\u0e08\u0e33\u0e19\u0e27\u0e19",colorByPoint:!0,data:l}]};return h.a.createElement("div",null,h.a.createElement(_.a,{highcharts:g.a,options:i,onChange:a,style:{width:"100%",height:"400px"}}),h.a.createElement(S.a,{onChange:function(e){console.log(e)}},h.a.createElement(O,{header:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07 (\u0e01\u0e14\u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14)",key:"1"},h.a.createElement(w.a,{dataSource:l,columns:o,bordered:!0}))))}return h.a.createElement("div",null,h.a.createElement(b.Helmet,{title:"Dashboard:\xa0Analytics"}))}}]),t}(h.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.length;return h.a.createElement("div",{className:"d-flex flex-wrap align-items-center"},h.a.createElement("div",{className:"mr-auto"},h.a.createElement("p",{className:"text-uppercase text-dark font-weight-bold font-size-18 mb-1"},"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14")),h.a.createElement("p",{className:"text-success font-weight-bold font-size-24 mb-0"},e.toLocaleString()))}}]),t}(h.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dataSource:[],pyramid01:[],chronic:[],user:[],hospital:"",isLoaded:!1,error:null},a.handleValidSubmit=a.handleValidSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://report-api.ffc.in.th/report/convert").then(function(e){return e.json()}).then(function(t){e.setState({dataSource:t})}),fetch("https://report-api.ffc.in.th/report/pyramid").then(function(e){return e.json()}).then(function(t){e.setState({pyramid01:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})}),fetch("https://report-api.ffc.in.th/report/elderlyrat").then(function(e){return e.json()}).then(function(t){e.setState({user:t,isLoaded:!0})}),fetch("https://report-api.ffc.in.th/report/chronic").then(function(e){return e.json()}).then(function(t){e.setState({chronic:t,isLoaded:!0})})}},{key:"handleValidSubmit",value:function(e){var t=this,a=this.state.dataSource.find(function(t){return t.name===e});if(void 0!==a){var n=a.id;console.log(n,"ooooo");var r=Math.floor(1e3*Math.random());fetch("https://report-api.ffc.in.th/report/pyramid/".concat(n,"?rnd=").concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({pyramid01:a,hospital:e}),console.log(a,"====")}),fetch("https://report-api.ffc.in.th/report/elderlyrat/".concat(n,"?rnd=").concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({user:a,hospital:e})}),fetch("https://report-api.ffc.in.th/report/chronic/".concat(n,"?rnd=").concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({chronic:a,hospital:e})})}}},{key:"render",value:function(){var e=this.state,t=e.dataSource,a=e.chronic,i=e.pyramid01,c=e.user,s=e.hospital,m=e.isLoaded,d=e.error,u=t.map(function(e){return e.name}),p=u.length,f=this.handleValidSubmit;return d?h.a.createElement("div",null,"Error: ",d.message):m?h.a.createElement("div",null,m,h.a.createElement(b.Helmet,{title:"Dashboard"}),h.a.createElement("div",null,h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(function(){return h.a.createElement(r.a,{style:{width:350,Color:"#000"},onChange:f,dataSource:u,defaultValue:s,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}},h.a.createElement(l.a,{suffix:h.a.createElement(o.a,{type:"search",className:"certain-category-icon"})}))},null),"\xa0 \xa0 \xa0",h.a.createElement(n.a,{type:"button",onClick:function(){window.location.reload()}}," ",h.a.createElement("span",null,"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14")," ")),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-xl-12"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"card-body"},h.a.createElement(x,{submit:f,pyramid01:i,namehospital:s}))))),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-xl-4 col-lg-12"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"card-body"},h.a.createElement(k,{length:p}))))),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-xl-6"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"card-body"},h.a.createElement(j,{chronic:a,submit:f,namehospital:s})))),h.a.createElement("div",{className:"col-xl-6"},h.a.createElement("div",{className:"card"},h.a.createElement("div",{className:"card-body"},h.a.createElement(N,{user:c,submit:f,namehospital:s})))))):h.a.createElement("div",null,"Loading...")}}]),t}(h.a.Component);t.default=C}}]);
//# sourceMappingURL=4.0f279cfe.chunk.js.map