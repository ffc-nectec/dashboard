(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{444:function(e,t,a){"use strict";a.r(t);a(442);var r=a(440),n=(a(304),a(310)),o=(a(337),a(443)),l=(a(311),a(330)),i=(a(340),a(28)),c=a(18),s=a(19),d=a(22),m=a(20),u=a(79),p=a(21),h=(a(342),a(441)),f=a(0),b=a.n(f),v=a(95),_=a(344),E=a.n(_),g=a(312),x=a.n(g),y=a(347),N=a.n(y),w=h.a.Panel,S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={dataSource:[],pyramid01:[],user:[],chronic:[],hospital:"",isLoaded:!1,error:null},a.handleValidSubmit=a.handleValidSubmit.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://report-api.ffc.in.th/report/convert").then(function(e){return e.json()}).then(function(t){e.setState({dataSource:t})}),fetch("https://report-api.ffc.in.th/report/pyramid").then(function(e){return e.json()}).then(function(t){e.setState({pyramid01:t,isLoaded:!0})},function(t){e.setState({isLoaded:!0,error:t})}),fetch("https://report-api.ffc.in.th/report/elderlyrat").then(function(e){return e.json()}).then(function(t){e.setState({user:t,isLoaded:!0})}),fetch("https://report-api.ffc.in.th/report/chronic").then(function(e){return e.json()}).then(function(t){e.setState({chronic:t,isLoaded:!0})})}},{key:"handleValidSubmit",value:function(e){var t=this,a=this.state.dataSource.find(function(t){return t.name===e});if(void 0!==a){var r=a.id;console.log(r,"ooooo"),fetch("https://report-api.ffc.in.th/report/pyramid/".concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({pyramid01:a,hospital:e}),console.log(a,"====")}),fetch("https://report-api.ffc.in.th/report/elderlyrat/".concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({user:a,hospital:e})}),fetch("https://report-api.ffc.in.th/report/chronic/".concat(r)).then(function(e){return e.json()}).then(function(a){t.setState({chronic:a,hospital:e})})}}},{key:"render",value:function(){var e=this.state,t=e.pyramid01,a=e.dataSource,c=e.chronic,s=e.hospital,d=e.user,m=e.isLoaded,u=e.error;console.log(c,"chronic");var p=a.map(function(e){return e.name}),f=this.handleValidSubmit;if(u)return b.a.createElement("div",null,"Error: ",u.message);if(!m)return b.a.createElement("div",null,"Loading...");var _=t.byAge,g=d.byActive,y=c.byIcd10;if(void 0!==y){y.map(function(e){return console.log(e.y,"popiij")});var S=y.map(function(e){return{name:e.name,y:e.y}});if(void 0!==g){var k=g.map(function(e){return{name:e.name,y:e.peple}});if(void 0!==_){var L=_.map(function(e){return e.age}),C=_.map(function(e){return e.female}),F=_.map(function(e){return-Math.abs(e.male)}),j=E()(t.date).tz("Asia/Bangkok"),O=t.undefinedAge+t.undefinedSex;x.a.setOptions({lang:{thousandsSep:","}});var z={chart:{type:"bar"},credits:{enabled:!1},colors:["#008FFB","#FF4560"],title:{text:""!==s?"\u0e1b\u0e34\u0e23\u0e32\u0e21\u0e34\u0e14\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23</b></b></br><br/>".concat(s):"\u0e1b\u0e34\u0e23\u0e32\u0e21\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},subtitle:{text:null},xAxis:[{categories:L,reversed:!1,labels:{step:1}},{opposite:!0,reversed:!1,categories:L,linkedTo:0,labels:{step:1}}],yAxis:{title:{text:null},labels:{formatter:function(){return Math.abs(this.value)}}},plotOptions:{series:{stacking:"normal"}},lang:{thousandsSep:","},tooltip:{formatter:function(){return"<b>".concat(this.series.name,", \u0e0a\u0e48\u0e27\u0e07\u0e2d\u0e32\u0e22\u0e38 ").concat(this.point.category,"</b><br/>")+"\u0e08\u0e33\u0e19\u0e27\u0e19:".concat(x.a.numberFormat(Math.abs(this.point.y),0))}},series:[{name:"\u0e0a\u0e32\u0e22",data:F},{name:"\u0e2b\u0e0d\u0e34\u0e07",data:C}]},B={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},credits:{enabled:!1},colors:["rgb(144, 237, 125)","rgb(247, 163, 92)","#FF4560","#333333"],title:{text:""!==s?"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e2a\u0e39\u0e07\u0e2d\u0e32\u0e22\u0e38 60 \u0e1b\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b</b></br><br/>".concat(s):"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e2a\u0e39\u0e07\u0e2d\u0e32\u0e22\u0e38 60 \u0e1b\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b</br></br>\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"\u0e08\u0e33\u0e19\u0e27\u0e19",colorByPoint:!0,data:k}]},M={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},credits:{enabled:!1},colors:["rgb(144, 237, 125)","rgb(247, 163, 92)","#FF4560","#333333","#008FFB"],title:{text:""!==s?"\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07</b></br><br/>".concat(s):"\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1}}},series:[{name:"\u0e08\u0e33\u0e19\u0e27\u0e19",colorByPoint:!0,data:S}]};return b.a.createElement("div",null,b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-lg-12"},b.a.createElement(function(){return b.a.createElement(o.a,{style:{width:350,Color:"#000"},onChange:f,dataSource:p,defaultValue:s,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}},b.a.createElement(l.a,{suffix:b.a.createElement(i.a,{type:"search",className:"certain-category-icon"})}))},null),"\xa0 \xa0 \xa0",b.a.createElement(n.a,{type:"button",onClick:function e(){window.location.reload(),console.log(e,"option")}}," ",b.a.createElement("span",null,"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14")," "))),b.a.createElement("div",{className:"col-xl-12"},b.a.createElement("br",null),b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement(N.a,{highcharts:x.a,options:z,loading:m,style:{width:"100%",height:"400px"}}),b.a.createElement("div",{className:"d-flex flex-wrap"},b.a.createElement("div",{className:"mr-5 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#008ffb"}}),"\u0e0a\u0e32\u0e22"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.male.toLocaleString())),b.a.createElement("div",{className:"mr-5 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut--danger"}),"\u0e2b\u0e0d\u0e34\u0e07"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.female.toLocaleString())),b.a.createElement("div",{className:"mr-5 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut--success"}),"\u0e44\u0e21\u0e48\u0e23\u0e30\u0e1a\u0e38"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},O.toLocaleString())),b.a.createElement("div",{className:"mr-5 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut--success"}),"\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},t.total.toLocaleString())),b.a.createElement("div",{className:"mr-5 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#ffff99"}}),"\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},j.format("DD MMMM YYYY HH:mm:ss"))))))),b.a.createElement("br",null),b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-xl-6 col-lg-6"},b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement(N.a,{highcharts:x.a,options:M,style:{width:"100%",height:"400px"}}),b.a.createElement(h.a,{onChange:function(e){console.log(e)}},b.a.createElement(w,{header:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07 (\u0e01\u0e14\u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14)",key:"1"},b.a.createElement(r.a,{dataSource:S,columns:[{title:"\u0e0a\u0e37\u0e48\u0e2d",dataIndex:"name",key:"1"},{title:"\u0e08\u0e33\u0e19\u0e27\u0e19",dataIndex:"y",key:"1"}],bordered:!0})))))),b.a.createElement("div",{className:"col-xl-6 col-lg-6"},b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement(N.a,{highcharts:x.a,options:B,style:{width:"100%",height:"400px"}}),b.a.createElement("div",{className:"d-flex flex-wrap"},b.a.createElement("div",{className:"mr-4 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"rgb(144, 237, 125)"}}),"\u0e15\u0e34\u0e14\u0e2a\u0e31\u0e07\u0e04\u0e21"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},d.OK.toLocaleString())),b.a.createElement("div",{className:"mr-4 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"rgb(247, 163, 92)"}}),"\u0e15\u0e34\u0e14\u0e1a\u0e49\u0e32\u0e19"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},d.MID.toLocaleString())),b.a.createElement("div",{className:"mr-4 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#FF4560"}}),"\u0e15\u0e34\u0e14\u0e40\u0e15\u0e35\u0e22\u0e07"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},d.VERYHI.toLocaleString())),b.a.createElement("div",{className:"mr-4 mb-2"},b.a.createElement("div",{className:"text-nowrap text-uppercase text-gray-4"},b.a.createElement("div",{className:"air__utils__donut air__utils__donut",style:{borderColor:"#333333"}}),"\u0e44\u0e21\u0e48\u0e23\u0e30\u0e1a\u0e38"),b.a.createElement("div",{className:"font-weight-bold font-size-18 text-dark"},d.UNKNOWN.toLocaleString()))))))))}}}return b.a.createElement("div",null,m,b.a.createElement(v.Helmet,{title:"Dashboard:\xa0Analytics"}))}}]),t}(b.a.Component);t.default=S}}]);
//# sourceMappingURL=4.67642f8c.chunk.js.map