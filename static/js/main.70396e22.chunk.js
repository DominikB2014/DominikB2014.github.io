(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{23:function(e,a,t){e.exports=t(52)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},35:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),o=t.n(r),i=t(2),c=(t(28),t(9)),m=(t(29),function(e){return l.a.createElement("button",{onClick:function(){document.getElementById(e.formName).classList.toggle(e.formName)},className:"button-style"},e.children)}),u=t(8),s=(t(30),function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({lat:43.0896,lng:-79.0849}),c=Object(u.a)(o,2),m=c[0],s=c[1];function E(e){s({lat:e.coords.latitude,lng:e.coords.longitude}),document.querySelector(".search .fa-location-arrow").style.color="#0b7dda",r(!0)}return l.a.createElement("form",{className:"search"},l.a.createElement("input",{type:"text",placeholder:"Search..",name:"search"}),l.a.createElement("div",{onClick:function(){navigator.geolocation&&!t?navigator.geolocation.getCurrentPosition(E):(document.querySelector(".search .fa-location-arrow").style.color="#cccccc",r(!1),s({lat:43.0896,lng:-79.0849}))},title:"Click me to toggle search by location!",className:"search-location-button"},l.a.createElement("i",{className:"fas fa-location-arrow"})),l.a.createElement(i.b,{className:"search-button",to:{pathname:"/Results",locationProp:{lat:m.lat,lng:m.lng}},type:"button"},l.a.createElement("i",{className:"fa fa-search"})))}),E=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"buttons-main"},l.a.createElement(m,{formName:"login"},"Login"),l.a.createElement(m,{formName:"signup"},"Sign Up")),l.a.createElement("div",{className:"search-main"},l.a.createElement(s,null)," "))},v=function(){var e={longitude:!1,latitude:!1};function a(a){e={longitude:a.coords.longitude,latitude:a.coords.latitude},document.querySelector("input[name='longitude']").value=e.longitude,document.querySelector("input[name='latitude']").value=e.latitude}return l.a.createElement("form",{id:"full-page-form",className:"form-style"},l.a.createElement("h1",null,"Add an Area!"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"areaName"},"Area Name"),l.a.createElement("input",{type:"text",name:"areaName",placeholder:"Name of area..",pattern:"^([a-zA-Z]+\\s)*[a-zA-Z]+$",required:!0,autoFocus:!0}),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"areaCity"},"City"),l.a.createElement("input",{type:"text",name:"areaCity",placeholder:"City Name..",pattern:"^([a-zA-Z]+\\s)*[a-zA-Z]+$",required:!0}),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"areaCountry"},"Country"),l.a.createElement("select",null,l.a.createElement("option",{value:"CA"},"Canada"),l.a.createElement("option",{value:"US"},"United States"),l.a.createElement("option",{value:"AF"},"Afghanistan"),l.a.createElement("option",{value:"AX"},"\xc5land Islands"),l.a.createElement("option",{value:"AL"},"Albania"),l.a.createElement("option",{value:"DZ"},"Algeria"),l.a.createElement("option",{value:"AS"},"American Samoa"),l.a.createElement("option",{value:"AD"},"Andorra"),l.a.createElement("option",{value:"AO"},"Angola"),l.a.createElement("option",{value:"AI"},"Anguilla"),l.a.createElement("option",{value:"AQ"},"Antarctica"),l.a.createElement("option",{value:"AG"},"Antigua and Barbuda"),l.a.createElement("option",{value:"AR"},"Argentina"),l.a.createElement("option",{value:"AM"},"Armenia"),l.a.createElement("option",{value:"AW"},"Aruba"),l.a.createElement("option",{value:"AU"},"Australia"),l.a.createElement("option",{value:"AT"},"Austria"),l.a.createElement("option",{value:"AZ"},"Azerbaijan"),l.a.createElement("option",{value:"BS"},"Bahamas"),l.a.createElement("option",{value:"BH"},"Bahrain"),l.a.createElement("option",{value:"BD"},"Bangladesh"),l.a.createElement("option",{value:"BB"},"Barbados"),l.a.createElement("option",{value:"BY"},"Belarus"),l.a.createElement("option",{value:"BE"},"Belgium"),l.a.createElement("option",{value:"BZ"},"Belize"),l.a.createElement("option",{value:"BJ"},"Benin"),l.a.createElement("option",{value:"BM"},"Bermuda"),l.a.createElement("option",{value:"BT"},"Bhutan"),l.a.createElement("option",{value:"BO"},"Bolivia, Plurinational State of"),l.a.createElement("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba"),l.a.createElement("option",{value:"BA"},"Bosnia and Herzegovina"),l.a.createElement("option",{value:"BW"},"Botswana"),l.a.createElement("option",{value:"BV"},"Bouvet Island"),l.a.createElement("option",{value:"BR"},"Brazil"),l.a.createElement("option",{value:"IO"},"British Indian Ocean Territory"),l.a.createElement("option",{value:"BN"},"Brunei Darussalam"),l.a.createElement("option",{value:"BG"},"Bulgaria"),l.a.createElement("option",{value:"BF"},"Burkina Faso"),l.a.createElement("option",{value:"BI"},"Burundi"),l.a.createElement("option",{value:"KH"},"Cambodia"),l.a.createElement("option",{value:"CM"},"Cameroon"),l.a.createElement("option",{value:"CV"},"Cape Verde"),l.a.createElement("option",{value:"KY"},"Cayman Islands"),l.a.createElement("option",{value:"CF"},"Central African Republic"),l.a.createElement("option",{value:"TD"},"Chad"),l.a.createElement("option",{value:"CL"},"Chile"),l.a.createElement("option",{value:"CN"},"China"),l.a.createElement("option",{value:"CX"},"Christmas Island"),l.a.createElement("option",{value:"CC"},"Cocos (Keeling) Islands"),l.a.createElement("option",{value:"CO"},"Colombia"),l.a.createElement("option",{value:"KM"},"Comoros"),l.a.createElement("option",{value:"CG"},"Congo"),l.a.createElement("option",{value:"CD"},"Congo, the Democratic Republic of the"),l.a.createElement("option",{value:"CK"},"Cook Islands"),l.a.createElement("option",{value:"CR"},"Costa Rica"),l.a.createElement("option",{value:"CI"},"C\xf4te d'Ivoire"),l.a.createElement("option",{value:"HR"},"Croatia"),l.a.createElement("option",{value:"CU"},"Cuba"),l.a.createElement("option",{value:"CW"},"Cura\xe7ao"),l.a.createElement("option",{value:"CY"},"Cyprus"),l.a.createElement("option",{value:"CZ"},"Czech Republic"),l.a.createElement("option",{value:"DK"},"Denmark"),l.a.createElement("option",{value:"DJ"},"Djibouti"),l.a.createElement("option",{value:"DM"},"Dominica"),l.a.createElement("option",{value:"DO"},"Dominican Republic"),l.a.createElement("option",{value:"EC"},"Ecuador"),l.a.createElement("option",{value:"EG"},"Egypt"),l.a.createElement("option",{value:"SV"},"El Salvador"),l.a.createElement("option",{value:"GQ"},"Equatorial Guinea"),l.a.createElement("option",{value:"ER"},"Eritrea"),l.a.createElement("option",{value:"EE"},"Estonia"),l.a.createElement("option",{value:"ET"},"Ethiopia"),l.a.createElement("option",{value:"FK"},"Falkland Islands (Malvinas)"),l.a.createElement("option",{value:"FO"},"Faroe Islands"),l.a.createElement("option",{value:"FJ"},"Fiji"),l.a.createElement("option",{value:"FI"},"Finland"),l.a.createElement("option",{value:"FR"},"France"),l.a.createElement("option",{value:"GF"},"French Guiana"),l.a.createElement("option",{value:"PF"},"French Polynesia"),l.a.createElement("option",{value:"TF"},"French Southern Territories"),l.a.createElement("option",{value:"GA"},"Gabon"),l.a.createElement("option",{value:"GM"},"Gambia"),l.a.createElement("option",{value:"GE"},"Georgia"),l.a.createElement("option",{value:"DE"},"Germany"),l.a.createElement("option",{value:"GH"},"Ghana"),l.a.createElement("option",{value:"GI"},"Gibraltar"),l.a.createElement("option",{value:"GR"},"Greece"),l.a.createElement("option",{value:"GL"},"Greenland"),l.a.createElement("option",{value:"GD"},"Grenada"),l.a.createElement("option",{value:"GP"},"Guadeloupe"),l.a.createElement("option",{value:"GU"},"Guam"),l.a.createElement("option",{value:"GT"},"Guatemala"),l.a.createElement("option",{value:"GG"},"Guernsey"),l.a.createElement("option",{value:"GN"},"Guinea"),l.a.createElement("option",{value:"GW"},"Guinea-Bissau"),l.a.createElement("option",{value:"GY"},"Guyana"),l.a.createElement("option",{value:"HT"},"Haiti"),l.a.createElement("option",{value:"HM"},"Heard Island and McDonald Islands"),l.a.createElement("option",{value:"VA"},"Holy See (Vatican City State)"),l.a.createElement("option",{value:"HN"},"Honduras"),l.a.createElement("option",{value:"HK"},"Hong Kong"),l.a.createElement("option",{value:"HU"},"Hungary"),l.a.createElement("option",{value:"IS"},"Iceland"),l.a.createElement("option",{value:"IN"},"India"),l.a.createElement("option",{value:"ID"},"Indonesia"),l.a.createElement("option",{value:"IR"},"Iran, Islamic Republic of"),l.a.createElement("option",{value:"IQ"},"Iraq"),l.a.createElement("option",{value:"IE"},"Ireland"),l.a.createElement("option",{value:"IM"},"Isle of Man"),l.a.createElement("option",{value:"IL"},"Israel"),l.a.createElement("option",{value:"IT"},"Italy"),l.a.createElement("option",{value:"JM"},"Jamaica"),l.a.createElement("option",{value:"JP"},"Japan"),l.a.createElement("option",{value:"JE"},"Jersey"),l.a.createElement("option",{value:"JO"},"Jordan"),l.a.createElement("option",{value:"KZ"},"Kazakhstan"),l.a.createElement("option",{value:"KE"},"Kenya"),l.a.createElement("option",{value:"KI"},"Kiribati"),l.a.createElement("option",{value:"KP"},"Korea, Democratic People's Republic of"),l.a.createElement("option",{value:"KR"},"Korea, Republic of"),l.a.createElement("option",{value:"KW"},"Kuwait"),l.a.createElement("option",{value:"KG"},"Kyrgyzstan"),l.a.createElement("option",{value:"LA"},"Lao People's Democratic Republic"),l.a.createElement("option",{value:"LV"},"Latvia"),l.a.createElement("option",{value:"LB"},"Lebanon"),l.a.createElement("option",{value:"LS"},"Lesotho"),l.a.createElement("option",{value:"LR"},"Liberia"),l.a.createElement("option",{value:"LY"},"Libya"),l.a.createElement("option",{value:"LI"},"Liechtenstein"),l.a.createElement("option",{value:"LT"},"Lithuania"),l.a.createElement("option",{value:"LU"},"Luxembourg"),l.a.createElement("option",{value:"MO"},"Macao"),l.a.createElement("option",{value:"MK"},"Macedonia, the former Yugoslav Republic of"),l.a.createElement("option",{value:"MG"},"Madagascar"),l.a.createElement("option",{value:"MW"},"Malawi"),l.a.createElement("option",{value:"MY"},"Malaysia"),l.a.createElement("option",{value:"MV"},"Maldives"),l.a.createElement("option",{value:"ML"},"Mali"),l.a.createElement("option",{value:"MT"},"Malta"),l.a.createElement("option",{value:"MH"},"Marshall Islands"),l.a.createElement("option",{value:"MQ"},"Martinique"),l.a.createElement("option",{value:"MR"},"Mauritania"),l.a.createElement("option",{value:"MU"},"Mauritius"),l.a.createElement("option",{value:"YT"},"Mayotte"),l.a.createElement("option",{value:"MX"},"Mexico"),l.a.createElement("option",{value:"FM"},"Micronesia, Federated States of"),l.a.createElement("option",{value:"MD"},"Moldova, Republic of"),l.a.createElement("option",{value:"MC"},"Monaco"),l.a.createElement("option",{value:"MN"},"Mongolia"),l.a.createElement("option",{value:"ME"},"Montenegro"),l.a.createElement("option",{value:"MS"},"Montserrat"),l.a.createElement("option",{value:"MA"},"Morocco"),l.a.createElement("option",{value:"MZ"},"Mozambique"),l.a.createElement("option",{value:"MM"},"Myanmar"),l.a.createElement("option",{value:"NA"},"Namibia"),l.a.createElement("option",{value:"NR"},"Nauru"),l.a.createElement("option",{value:"NP"},"Nepal"),l.a.createElement("option",{value:"NL"},"Netherlands"),l.a.createElement("option",{value:"NC"},"New Caledonia"),l.a.createElement("option",{value:"NZ"},"New Zealand"),l.a.createElement("option",{value:"NI"},"Nicaragua"),l.a.createElement("option",{value:"NE"},"Niger"),l.a.createElement("option",{value:"NG"},"Nigeria"),l.a.createElement("option",{value:"NU"},"Niue"),l.a.createElement("option",{value:"NF"},"Norfolk Island"),l.a.createElement("option",{value:"MP"},"Northern Mariana Islands"),l.a.createElement("option",{value:"NO"},"Norway"),l.a.createElement("option",{value:"OM"},"Oman"),l.a.createElement("option",{value:"PK"},"Pakistan"),l.a.createElement("option",{value:"PW"},"Palau"),l.a.createElement("option",{value:"PS"},"Palestinian Territory, Occupied"),l.a.createElement("option",{value:"PA"},"Panama"),l.a.createElement("option",{value:"PG"},"Papua New Guinea"),l.a.createElement("option",{value:"PY"},"Paraguay"),l.a.createElement("option",{value:"PE"},"Peru"),l.a.createElement("option",{value:"PH"},"Philippines"),l.a.createElement("option",{value:"PN"},"Pitcairn"),l.a.createElement("option",{value:"PL"},"Poland"),l.a.createElement("option",{value:"PT"},"Portugal"),l.a.createElement("option",{value:"PR"},"Puerto Rico"),l.a.createElement("option",{value:"QA"},"Qatar"),l.a.createElement("option",{value:"RE"},"R\xe9union"),l.a.createElement("option",{value:"RO"},"Romania"),l.a.createElement("option",{value:"RU"},"Russian Federation"),l.a.createElement("option",{value:"RW"},"Rwanda"),l.a.createElement("option",{value:"BL"},"Saint Barth\xe9lemy"),l.a.createElement("option",{value:"SH"},"Saint Helena, Ascension and Tristan da Cunha"),l.a.createElement("option",{value:"KN"},"Saint Kitts and Nevis"),l.a.createElement("option",{value:"LC"},"Saint Lucia"),l.a.createElement("option",{value:"MF"},"Saint Martin (French part)"),l.a.createElement("option",{value:"PM"},"Saint Pierre and Miquelon"),l.a.createElement("option",{value:"VC"},"Saint Vincent and the Grenadines"),l.a.createElement("option",{value:"WS"},"Samoa"),l.a.createElement("option",{value:"SM"},"San Marino"),l.a.createElement("option",{value:"ST"},"Sao Tome and Principe"),l.a.createElement("option",{value:"SA"},"Saudi Arabia"),l.a.createElement("option",{value:"SN"},"Senegal"),l.a.createElement("option",{value:"RS"},"Serbia"),l.a.createElement("option",{value:"SC"},"Seychelles"),l.a.createElement("option",{value:"SL"},"Sierra Leone"),l.a.createElement("option",{value:"SG"},"Singapore"),l.a.createElement("option",{value:"SX"},"Sint Maarten (Dutch part)"),l.a.createElement("option",{value:"SK"},"Slovakia"),l.a.createElement("option",{value:"SI"},"Slovenia"),l.a.createElement("option",{value:"SB"},"Solomon Islands"),l.a.createElement("option",{value:"SO"},"Somalia"),l.a.createElement("option",{value:"ZA"},"South Africa"),l.a.createElement("option",{value:"GS"},"South Georgia and the South Sandwich Islands"),l.a.createElement("option",{value:"SS"},"South Sudan"),l.a.createElement("option",{value:"ES"},"Spain"),l.a.createElement("option",{value:"LK"},"Sri Lanka"),l.a.createElement("option",{value:"SD"},"Sudan"),l.a.createElement("option",{value:"SR"},"Suriname"),l.a.createElement("option",{value:"SJ"},"Svalbard and Jan Mayen"),l.a.createElement("option",{value:"SZ"},"Swaziland"),l.a.createElement("option",{value:"SE"},"Sweden"),l.a.createElement("option",{value:"CH"},"Switzerland"),l.a.createElement("option",{value:"SY"},"Syrian Arab Republic"),l.a.createElement("option",{value:"TW"},"Taiwan, Province of China"),l.a.createElement("option",{value:"TJ"},"Tajikistan"),l.a.createElement("option",{value:"TZ"},"Tanzania, United Republic of"),l.a.createElement("option",{value:"TH"},"Thailand"),l.a.createElement("option",{value:"TL"},"Timor-Leste"),l.a.createElement("option",{value:"TG"},"Togo"),l.a.createElement("option",{value:"TK"},"Tokelau"),l.a.createElement("option",{value:"TO"},"Tonga"),l.a.createElement("option",{value:"TT"},"Trinidad and Tobago"),l.a.createElement("option",{value:"TN"},"Tunisia"),l.a.createElement("option",{value:"TR"},"Turkey"),l.a.createElement("option",{value:"TM"},"Turkmenistan"),l.a.createElement("option",{value:"TC"},"Turks and Caicos Islands"),l.a.createElement("option",{value:"TV"},"Tuvalu"),l.a.createElement("option",{value:"UG"},"Uganda"),l.a.createElement("option",{value:"UA"},"Ukraine"),l.a.createElement("option",{value:"AE"},"United Arab Emirates"),l.a.createElement("option",{value:"GB"},"United Kingdom"),l.a.createElement("option",{value:"UM"},"United States Minor Outlying Islands"),l.a.createElement("option",{value:"UY"},"Uruguay"),l.a.createElement("option",{value:"UZ"},"Uzbekistan"),l.a.createElement("option",{value:"VU"},"Vanuatu"),l.a.createElement("option",{value:"VE"},"Venezuela, Bolivarian Republic of"),l.a.createElement("option",{value:"VN"},"Viet Nam"),l.a.createElement("option",{value:"VG"},"Virgin Islands, British"),l.a.createElement("option",{value:"VI"},"Virgin Islands, U.S."),l.a.createElement("option",{value:"WF"},"Wallis and Futuna"),l.a.createElement("option",{value:"EH"},"Western Sahara"),l.a.createElement("option",{value:"YE"},"Yemen"),l.a.createElement("option",{value:"ZM"},"Zambia"),l.a.createElement("option",{value:"ZW"},"Zimbabwe"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"areaOverview"},"Overview"),l.a.createElement("input",{type:"text",name:"areaOverview",placeholder:"Short overview on the area..."}),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"areaCords"},"Co-ordinates"),l.a.createElement("input",{type:"number",id:"areaCords",name:"latitude",placeholder:"Latitude..."}),l.a.createElement("input",{type:"number",id:"areaCords",name:"longitude",placeholder:"Longitude.."}),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(a):alert("Geolocation unsupported")}},"Enter my current coordinates")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"pic"},"Picture"),l.a.createElement("input",{type:"file",id:"pic",name:"pic",accept:"image/*"})),l.a.createElement("input",{type:"submit",value:"Submit"}))},p=(t(35),t(11)),d={width:"100%",height:"100%"},g=Object(p.GoogleApiWrapper)({apiKey:"AIzaSyDZ-7P4_Z6trtzAZgL3s_Oq3SEY_Q8TKzw"})((function(e){console.log(e);var a=function(e){for(var a=document.getElementsByClassName("list-item"),t=0;t<a.length;t++)a.item(t).id===e?a.item(t).style.backgroundColor="white":a.item(t).style.backgroundColor="#547ec2"};return l.a.createElement(p.Map,{google:e.google,zoom:10,style:d,initialCenter:e.center},l.a.createElement(p.Marker,{position:{lat:43.256531,lng:-79.87442},onClick:function(){return a("item2")}}),l.a.createElement(p.Marker,{position:{lat:43.0896,lng:-79.0849},onClick:function(){return a("item1")}}),l.a.createElement(p.Marker,{position:{lat:44.3894,lng:-79.6903},onClick:function(){return a("item3")}}))})),b=function(e){for(var a=[],t=0;t<e.value;t++)a.push(l.a.createElement("i",{className:"fas fa-star star"}));return l.a.createElement(l.a.Fragment,null,a)},h={textDecoration:"none",color:"black"},f=function(e){return l.a.createElement(i.b,{to:e.to,style:h},l.a.createElement("li",{id:e.id,className:"list-item"},l.a.createElement("div",{className:"item-image"}),l.a.createElement("div",null,l.a.createElement("h2",null,e.title,l.a.createElement(b,{value:e.stars})," "),l.a.createElement("p",null," ",e.children," "))))},N=function(){document.querySelector(".toggle-switch").classList.toggle("toggle-map"),document.querySelector(".map-view").classList.toggle("map-view-enable")},w=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"list-view"},l.a.createElement("ul",null,l.a.createElement(f,{to:"../Area",id:"item1",stars:4,title:"Niagara Region"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio!"),l.a.createElement(f,{to:"../Area",id:"item2",stars:4,title:"Hamilton"},"Hamilton features many types of factories. Big factories, small factories, and even medium factories."),l.a.createElement(f,{to:"../Area",id:"item3",stars:4,title:"Barrie"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, perspiciatis!"),l.a.createElement(f,{to:"../Area",id:"item4",stars:4,title:"Barrie"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse placeat suscipit."),l.a.createElement(f,{to:"../Area",id:"item5",stars:4,title:"Barrie"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, provident!"),l.a.createElement(f,{to:"../Area",id:"item6",stars:4,title:"Barrie"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, magnam."))),l.a.createElement("div",{className:"map-view"},l.a.createElement(g,{center:e.location.locationProp?e.location.locationProp:{lat:43.0896,lng:-79.0849}})),l.a.createElement("div",{id:"toggle-background"},l.a.createElement("p",{className:"toggle noselect"},"LIST"),l.a.createElement("div",{className:"toggle",onClick:N},l.a.createElement("div",{className:"toggle-switch"})),l.a.createElement("p",{className:"toggle noselect"},"MAP")))},S=(t(48),function(){return l.a.createElement("div",{className:"area-container"},l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,"Niagara Region"),l.a.createElement("li",{className:"known-for"},l.a.createElement("span",null,"Tourist Region"),l.a.createElement("span",null,"Waterfall"),l.a.createElement("span",null,"Nature")),l.a.createElement("p",null,"Tourist region in Canada Ontario most known for Niagara Falls, the most powerful falls in North America")),l.a.createElement("div",{className:"obj-overview-content"},l.a.createElement("div",{id:"remove-style",className:"obj-pictures"},l.a.createElement("div",{className:"overview-main-image"},l.a.createElement("h1",null,"Photo (22)")),l.a.createElement("div",{className:"side-image overview-side-image1"}),l.a.createElement("div",{className:"side-image overview-side-image2"}),l.a.createElement("div",{className:"side-image overview-side-image3"})),l.a.createElement("div",{className:"obj-review-overview"},l.a.createElement("h1",null,"Review Overview"),l.a.createElement("div",{className:"obj-overview-rating"},l.a.createElement("span",null,"Rating",l.a.createElement(b,{value:5})),l.a.createElement("a",{href:"#reviews",className:"obj-overview-rating-allreviews"}," 39 Reviews")),l.a.createElement("div",{className:"obj-overview-list"},l.a.createElement("li",null,l.a.createElement("div",{className:"active-review left-style five-overview "},"5 Star Reviews"),l.a.createElement("div",{className:"right-style five-overview-bar"},"95%")),l.a.createElement("li",null,l.a.createElement("div",{className:"left-style four-overview"},"4 Star Reviews"),l.a.createElement("div",{className:"right-style four-overview-bar"},"5%")),l.a.createElement("li",null,l.a.createElement("div",{className:"left-style three-overview"},"3 Star Reviews"),l.a.createElement("div",{className:"right-style three-overview-bar"},"0%")),l.a.createElement("li",null,l.a.createElement("div",{className:"left-style two-overview"},"2 Star Reviews"),l.a.createElement("div",{className:"right-style two-overview-bar"},"0%")),l.a.createElement("li",null,l.a.createElement("div",{className:"left-style one-overview"},"1 Star Reviews"),l.a.createElement("div",{className:"right-style one-overview-bar"},"0%"))),l.a.createElement("div",{className:"obj-overview-reviews"},l.a.createElement("div",{className:"overview-review-list"},l.a.createElement("li",null,l.a.createElement("h3",null,"Username1"),l.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, soluta!")),l.a.createElement("li",null,l.a.createElement("h3",null,"Username2"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur voluptatum beatae sint voluptate illo, ipsa quis labore assumenda excepturi dignissimos adipisci. Dolorum esse ab ipsam molestiae sequi vero voluptas.")),l.a.createElement("li",null,l.a.createElement("h3",null,"Username3"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi dolore dicta at quasi nisi.")),l.a.createElement("li",null,l.a.createElement("h3",null,"Username4"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis odio eligendi consequatur perspiciatis earum officia modi dolorum illum voluptatem sit!"))))),l.a.createElement("div",{className:"obj-travel-overview"},l.a.createElement("div",{className:"travel-info"},l.a.createElement("h2",null,"Travel Overview"),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-globe","aria-hidden":"true"})," Location: ",l.a.createElement("br",null)," Canada, Ontario"),l.a.createElement("h3",null,l.a.createElement("i",{className:"fas fa-map"})," Area: ",l.a.createElement("br",null)," Niagara"),l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," Latitute, Longitude: ",l.a.createElement("br",null)," 43.0582 N, 79.2902 W"))),l.a.createElement("div",{className:"overview-map"},l.a.createElement(g,{center:{lat:43.0896,lng:-79.0849}}))),l.a.createElement("div",{className:"obj-location-overview"},l.a.createElement("h2",null," Location Overview"),l.a.createElement("p",null,"Niagara is a region located in south Ontario, Canada, between Lake Ontario and Lake Erie. It is an 'area of wonder' with a breathtaking waterfall, nature trails, events and festivities and lush vineyards"),l.a.createElement("h3",null,l.a.createElement("i",{className:"fas fa-desktop"})," https://niagarafalls.ca/"),l.a.createElement("h3",null,l.a.createElement("i",{className:"fas fa-clock"})," Closes In: 5H"),l.a.createElement("h3",null,l.a.createElement("i",{className:"fas fa-clock"})," People typically spend: 3H here"))),l.a.createElement("div",{className:"obj-reviews"},l.a.createElement("div",{className:"submit-review-form"},l.a.createElement("div",{className:"submit-review-border"},l.a.createElement("h1",null,"Submit Your Own Review!"),l.a.createElement("form",{className:"review-form",action:""},l.a.createElement("div",{className:"review-form-item"},l.a.createElement("label",null,"Rating"),l.a.createElement(b,{value:5})),l.a.createElement("div",{className:"review-form-item"},l.a.createElement("label",{htmlFor:"review-title"},"Title"),l.a.createElement("input",{type:"text",id:"review-title",name:"Title",placeholder:""})),l.a.createElement("div",{className:"review-form-item"},l.a.createElement("label",{htmlFor:"review-description"},"Description"),l.a.createElement("textarea",{id:"review-description",name:"message",rows:"100",cols:"100"})),l.a.createElement("div",{className:"review-form-item"},l.a.createElement("input",{type:"submit",value:"Submit"}))))),l.a.createElement("div",{id:"reviews",className:"obj-review"},l.a.createElement("div",{className:"obj-review-list"},l.a.createElement("li",null,l.a.createElement("span",null,"Username1"),l.a.createElement(b,{value:5}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, pariatur?")),l.a.createElement("li",null,l.a.createElement("span",null,"Username2"),l.a.createElement(b,{value:5}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis, ipsa culpa reprehenderit animi voluptatibus.")),l.a.createElement("li",null,l.a.createElement("span",null,"Username3"),l.a.createElement(b,{value:5}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque accusamus aspernatur optio blanditiis dicta tempore excepturi quibusdam qui incidunt!")),l.a.createElement("li",null,l.a.createElement("span",null,"Username4"),l.a.createElement(b,{value:5}),l.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quidem sed pariatur!"))))))}),y=(t(49),function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement("nav",{id:"navbar"},l.a.createElement(i.b,{to:"/",id:"nav-brand"}),l.a.createElement("div",{className:"search-nav"},l.a.createElement(s,null)),l.a.createElement("div",{className:"buttons-nav"},l.a.createElement(m,{formName:"login"}," Login "),l.a.createElement(m,{formName:"signup"}," Sign Up ")),l.a.createElement("div",{className:"hamburger",onClick:function(){return r(!t)}},l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"})),l.a.createElement("ul",{className:"nav-links ".concat(t?"open":"")},l.a.createElement(i.b,{to:"/Submission"},"Add an Area"),l.a.createElement(i.b,{to:"/Submission"},"About"),l.a.createElement(i.b,{to:"/Submission"},"Contact")))}),C=(t(50),function(){return l.a.createElement("footer",{className:"web-footer"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h4",null,"Contact Us:"),l.a.createElement("h5",null,"Phone Number: (905) 525-9140"),l.a.createElement("h5",null,"Address: 1280 Main St W, Hamilton, ON L8S 4L8"),l.a.createElement("h6",null,l.a.createElement("br",null),l.a.createElement("br",null),"Areago \xa9 2019")),l.a.createElement("div",{className:"right-side"},l.a.createElement("a",null,l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",null,l.a.createElement("i",{className:"fab fa-facebook-f"}))))}),A=t(7);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var L=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)({}),o=Object(u.a)(r,1)[0],i=function(e){var a,t,n=e.value.length;switch(e.name){case"displayName":o[e.name]=(a={},Object(A.a)(a,"inputError",e.value.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)?null:"invalid name, your name can only contain letters"),Object(A.a)(a,"lengthError",n>2&&n<20?null:"invalid name length"),a);break;case"userEmail":o[e.name]=Object(A.a)({},"inputError",e.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?null:"invalid email");break;case"userName":o[e.name]=(t={},Object(A.a)(t,"inputError",e.value.match(/^[a-zA-Z0-9]+$/)?null:"invalid username, your name can only contain letters and numbers"),Object(A.a)(t,"lengthError",n>4&&n<20?null:"invalid user name length"),t);break;case"userPassword":o[e.name]=Object(A.a)({},"lengthError",n>6&&n<30?null:"invalid password length");break;case"terms":o[e.name]=Object(A.a)({},"inputError",e.checked?null:"You must accept the terms")}};return{handleSubmit:function(e){var a=!1;e&&e.preventDefault();for(var t=0,n=Object.values(o);t<n.length;t++)for(var l=n[t],r=0,i=Object.values(l);r<i.length;r++){if(null!=i[r]){a=!0;break}}a?alert("errors"):alert("No Errors")},handleInputChange:function(e){e.persist(),i(e.target),l((function(a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(t,!0).forEach((function(a){Object(A.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},a,Object(A.a)({},e.target.name,e.target.value))}))},displayError:function(e){if(o[e.target.name])for(var a=0,t=Object.values(o[e.target.name]);a<t.length;a++){var n=t[a];if(null!=n){document.querySelector("p[for=".concat(e.target.name,"]")).innerHTML=n;break}document.querySelector("p[for=".concat(e.target.name,"]")).innerHTML=null}},inputs:t,validationErrors:o}},O=function(){var e=L(),a=e.inputs,t=e.handleInputChange,n=e.handleSubmit,r=e.displayError,o=e.validationErrors;console.log({validationErrors:o});return l.a.createElement("div",{className:"blur-background"},l.a.createElement("form",{onSubmit:n,id:"pop-up-form",className:"form-style"},l.a.createElement("a",{onClick:function(){document.getElementById("signup").classList.toggle("signup")},className:"close"}),l.a.createElement("h1",null,"Create an Account"),l.a.createElement("div",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{onBlur:r,type:"text",name:"displayName",onChange:t,value:a.displayName,required:!0}),l.a.createElement("br",null),l.a.createElement("p",{htmlFor:"displayName",className:"error-message myclass"})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{onBlur:r,type:"email",name:"userEmail",onChange:t,value:a.userEmail,required:!0}),l.a.createElement("br",null),l.a.createElement("p",{htmlFor:"userEmail",className:"error-message"})),l.a.createElement("div",null,l.a.createElement("label",null,"Username"),l.a.createElement("input",{onBlur:r,type:"text",name:"userName",onChange:t,value:a.userName,required:!0}),l.a.createElement("br",null),l.a.createElement("p",{htmlFor:"userName",className:"error-message"})),l.a.createElement("div",null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{onBlur:r,type:"password",name:"userPassword",onChange:t,value:a.userPassword,required:!0}),l.a.createElement("br",null),l.a.createElement("p",{htmlFor:"userPassword",className:"error-message"})),l.a.createElement("div",{className:"terms-and-conditions"},l.a.createElement("input",{type:"checkbox",id:"terms",name:"terms",onChange:t,value:"true"}),"I accept the Terms and Conditions"),l.a.createElement("input",{type:"submit",value:"Sign Up"})))},B=(t(51),function(){var e=L(),a=e.inputs,t=e.handleInputChange,n=e.handleSubmit,r=e.validationErrors;console.log({validationErrors:r});return l.a.createElement("div",{className:"blur-background"},l.a.createElement("form",{onSubmit:n,id:"pop-up-form",className:"form-style"},l.a.createElement("a",{onClick:function(){document.getElementById("login").classList.toggle("login")},className:"close"}),l.a.createElement("h1",null,"Login"),l.a.createElement("div",null,l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"userName",onChange:t,value:a.userName,required:!0}),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"userPassword",onChange:t,value:a.userPassword,required:!0}),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Login"})))}),I=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(y,null)," ",l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",component:E,exact:!0}),l.a.createElement(c.a,{path:"/Submission",component:v}),l.a.createElement(c.a,{path:"/Results",component:w}),l.a.createElement(c.a,{path:"/Area",component:S})),l.a.createElement("div",{id:"signup",className:"signup"},l.a.createElement(O,null)),l.a.createElement("div",{id:"login",className:"login"},l.a.createElement(B,null)),l.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,{basename:""},l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.70396e22.chunk.js.map