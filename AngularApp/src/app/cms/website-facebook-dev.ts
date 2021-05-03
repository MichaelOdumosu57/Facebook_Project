import {objectCopy,zProtoComponent,zProtoChildren, zChildren, xContain, xPosition} from '../customExports'



let website:any = {}

let login_development:Array<zProtoComponent> = [

	{
		"title": "login_page",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				stack:0,
				// width:900,
				// height:900,
				nest:{
					group:[
						{
							name:"login-card",
							type:"regular"
						}
					]
				},
				delta:{
					group:[
						{
							name:"login_card",
							type:"repeat",
							by:3
						}
					]
				},
				navigation:{

					name:"login"
				},

				options:{
					css:{
						// width:"125%"
					},
					judima:{
						mobile:{
							stack:20,
							footerSpace:150
						},
						desktop:{
							footerSpace:240
						}
					},
					extras:{

						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
						appLanguageTranslator:{
							confirm:"true",
							type:["body","part"],
						},
						appFacebookLogin:{
							confirm:"true",
							type:["body"]
						},
						appSection:{
							confirm:"true"
						},
						// section:{
						// 	width:900
						// }
					}
				},

			},
			{
				"key":"facebook_title",
				type:"image",
				imageURL:"login_facebook_title.svg",
				width:200,
				height:70,
				left:30,
				top:70,
				options:{
					css:{
						// "z-index":2
					},
					judima:{
						mobile:{
							top:100
						}
					}
				},

				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				}
			},
			{
				"key":"recent_logins",
				type:"text",
				value:"Recent Logins",
				next:"true",
				options:{
					css:{
						"font-family":"SFProDisplay-Regular"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				},
				width:500,
			},
			{
				"key":"choose_Acct",
				type:"text",
				value:"Click your picture or add an account.",
				next:"true",
				options:{
					css:{
						"font-family":"SFProDisplay-Regular",
						"font-size":"15px"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				},
				width:300,

				// height:70,
			},
			{
				key:"email-phone-number",
				type:"input",
				left:750,
				split:3.3,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"facebook_login_credentials"
					},
					zChildren:[
						{
							bool:"div",
							val:"login-display a_p_p_Glassmorphism",
							group:["facebook_login_credentials"],
							css:{
								"z-index":2,
								"background-color":"white",
							},
							logic:{
								desktop:{
									width:1.1,
									height:1.25,
									top:-40,
									left:-20,
								},
								mobile:{
									width:(devObj)=>{
										let {zSymbol,css,delta,zChildren} = devObj
										let myWidth = delta.current.max.value *.9
										return 650 > myWidth ? delta.current.max.value * .92 : myWidth
									},
									height:1.1,
									top:-10,
									left:-25,
								}
							}
						}
					]
				},
				value:"Email or Phone Number",
				options:{
					css:{
						"font-size":"17px"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						},
						appFacebookLogin:{
							type:["username"]
						},
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"password",
				type:"input",
				left:750,
				split:3.3,
				top:10,
				value:"Password",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"17px"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						},
						appFacebookLogin:{
							type:["password"]
						},
						extend:{
							type:"password",
							placeholder:"Password"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"Login-button",
				type:"button",
				left:750,
				top:10,
				width:340,
				value:"Log In",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"20px"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						},
						appFacebookLogin:{
							type:["loginButton"]
						},

					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"forgot-password",
				type:"anchor",
				left:750,
				top:10,
				width:340,
				value:"Forgot Password?",
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"14px",
						"text-align":"center",
						color:"blue"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"strikethrough",
				type:"div",
				left:750,
				top:30,
				width:340,
				height:1,
				next:"true",
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"background-color":"grey",
						"z-index":"4"
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"create-new-account a_p_p_Create_New_Account",
				type:"button",
				left:800,
				top:30,
				width:240,
				next:"true",
				value:"Create New Account",

				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_credentials"
					},
				},
				options:{
					css:{
						"font-size":"20px"
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				}

			},
			{
				key:"business-page",
				type:"text",
				left:870,
				top:50,
				width:240,
				next:"true",
				value:"for a celebrity, band or business.",
				options:{
					css:{
						"font-size":"14px",

					},
					judima:{
						mobile:{
							left:140,
							top:50,
							widthRatio:.5,
						}
					},
					extras:{
						appLanguageTranslator:{
							group:"translate-group-2",
							type:"text"
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"fb_create_business_page"
					},
					zChildren:[
						{
							bool:"a",
							css:{
								"font-weight":"bold",
								"font-size":"14px",
								"z-index":4
							},
							val:"business-page-link a_p_p_Anchor",
							text:"Create a Page",
							group:["fb_create_business_page"],
							logic:{
								desktop:{
									width:.45,
									height:1.2,
									top:0,
									left:(devObj)=>{
										let {delta,zChildren,zSymbol} = devObj
										try{
											let a = numberParse(zChildren[zSymbol]?.css.width)
											let b = numberParse(zChildren[delta.current.min.key].css.left)

											return b - a
										}
										catch(e){
											let b = numberParse(zChildren[delta.current.min.key].css.left)
											return b -200
										}

									}
								},
								mobile:{
									width:1.2,
									height:1.2,
									top:-20,
									left:40
								}
							},
							extras:{
								appLanguageTranslator:{
									group:"translate-group-2",
									type:"text"
								}
							}
						}
					],

				}

			},
			{
				"key":"login-card a_p_p_Login_Card a_p_p_Glassmorphism",
				type:"div",
				next:"true",
				height:205,
				width:160,
				top:-320,
				options:{
					css:{
						"z-index":4
					},
					judima:{
						mobile:{
							width:260
						}
					},
					extras:{
						appFacebookLogin:{
							type:"head"
						},
						appVanillaTilt:{
							type:"target",
							group:"login-tilt",
							initOptions:{
								perspective:100
							}
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"facebook_login_card"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"z-index":1
							},
							val:"login-main-background a_p_p_MainBackground",
							logic:{
								desktop:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.5,
									top:(devObj)=>{
										let {} = devObj
										return 0
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								},
								mobile:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.15,
									top:(devObj)=>{
										let {} = devObj
										return 0
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								}
							},
							type:["deltaNodeContainer"],
							group:["facebook_login_group","facebook_login_card","facebook_login_credentials","fb_create_business_page"]
						},
						{
							bool:"div",
							css:{
								"background-color":"rgb(240, 242, 245)",
								"z-index":2
							},
							val:"login-overlay a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										let spacing = delta.current.delta.value+120
										let myWidth = numberParse(getComputedStyle( zChildren["&#8353"].element).width) * .8
										return spacing > myWidth? spacing : myWidth

									},
									height:1.3,
									top:(devObj)=>{
										let {} = devObj
										return 50
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}


									}
								},
								mobile:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										let spacing = delta.current.delta.value+12
										let myWidth = numberParse(getComputedStyle( zChildren["&#8353"].element).width) * .9
										return spacing > myWidth? spacing : myWidth

									},
									height:1.05,
									top:(devObj)=>{
										let {} = devObj
										return 50
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}


									}
								}
							},
							type:["deltaNodeContainer"],
							group:["facebook_login_group","facebook_login_card","facebook_login_credentials","fb_create_business_page"]
						},
						{
							bool:"img",
							val:"login-remove",
							css:{
								"z-index":6,

							},
							extras:{
								extend:{
									src:"./assets/media/x-mark.png",
								},
								appVanillaTilt:{
									type:"part",
									group:"login-tilt",
								}
							},
							logic:{
								desktop:{
									width:()=>{
										return 16
									},
									height:()=>{
										return 20
									},
									top:10,
									left:10
								},
								mobile:{
									width:()=>{
										return 16
									},
									height:()=>{
										return 20
									},
									top:3,
									left:3
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"div",
							val:"notifications-count a_p_p_Login_Card_Notifications_Count a_p_p_Glassmorphism",
							css:{
								"z-index":4
							},
							logic:{
								desktop:{
									width:()=>{
										return 30
									},
									height:()=>{
										return 30
									},
									top:-10,
									left:140
								},
								mobile:{
									width:()=>{
										return 30
									},
									height:()=>{
										return 30
									},
									top:-10,
									left:240
								},
							},
							extras:{
								appVanillaTilt:{
									type:"part",
									group:"login-tilt",
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"img",
							val:"account-image a_p_p_Login_Image",
							css:{
								"z-index":5
							},
							extras:{
								extend:{
									src:"./assets/media/python.jpg"
								},
								appFacebookLogin:{
									type:"login-img"
								},
								appVanillaTilt:{
									type:"part",
									group:"login-tilt",
								}
							},
							logic:{
								desktop:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return (.8* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .65 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top +10

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.left +60
										}
										return css.left +15

									}
								},
								mobile:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return (.5* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .65 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top +10

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.left +120
										}
										return css.left +70

									}
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"p",
							val:"account-name a_p_p_Login_Name",
							css:{
								"z-index":5
							},
							extras:{
								appFacebookLogin:{
									type:"login-name"
								},
								appVanillaTilt:{
									type:"part",
									group:"login-tilt",
								}
							},
							text:"Python3",
							logic:{
								desktop:{
									width:1,
									height:.25,
									top:155,
									left:0
								},
								mobile:{
									width:1,
									height:.25,
									top:155,
									left:0
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"div",
							val:"chosen-login  a_p_p_ChosenLogin a_p_p_Glassmorphism",
							css:{
								"z-index":8,
								display:"none"
							},
							logic:{
								desktop:{
									width:2.3,
									height:2.3,
									top:(devObj)=>{

										return judimaPageOffset().y +  80
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
								mobile:{
									width:1.5,
									height:2,
									top:(devObj)=>{

										return judimaPageOffset().y + 100
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
							},
							extras:{
								appFacebookLogin:{
									type:["chosen"]
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"img",
							val:"chosen-login-img a_p_p_ChosenLoginImg",
							css:{
								"z-index":8,
								display:"none"
							},
							logic:{
								desktop:{
									width:(devObj)=>{
										return 160
									},
									height:(devObj)=>{
										return 160
									},
									top:(devObj)=>{

										return judimaPageOffset().y +  120
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
								mobile:{
									width:(devObj)=>{
										return 160
									},
									height:(devObj)=>{
										return 160
									},
									top:(devObj)=>{

										return judimaPageOffset().y + 120
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								}
							},
							extras:{
								appFacebookLogin:{
									type:"chosen-img"
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"p",
							val:"chosen-name a_p_p_Login_Name",
							css:{
								"z-index":8,
								display:"none"
							},
							extras:{
								appFacebookLogin:{
									type:["chosen-name"]
								}
							},
							logic:{
								desktop:{
									width:1,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y + 290
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
								mobile:{
									width:1,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y + 290
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},

							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"i",
							val:"password a_p_p_FacebookInput login-page",
							css:{
								"z-index":8,
								display:"none"
							},
							logic:{
								desktop:{
									width:2,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y +  340
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}


									}
								},
								mobile:{
									width:1.3,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y + 340
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
							},
							extras:{
								extend:{
									placeholder:"Password"
								},
								appFacebookLogin:{
									type:["chosenPassword"]
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"b",
							val:"chosen-login-button a_p_p_Button login-page",
							css:{
								"z-index":8,
								display:"none"
							},
							text:"Log In",
							logic:{
								desktop:{
									width:2,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y + 400
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
								mobile:{
									width:1.3,
									height:.2,
									top:(devObj)=>{

										return judimaPageOffset().y + 400
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
							},
							extras:{
								appFacebookLogin:{
									type:["chosenLoginButton"]
								},
								appLanguageTranslator:{
									group:"translate-group-1",
									type:"text"
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"div",
							val:"chosen-overlay a_p_p_ChosenOverlay",
							css:{
								"z-index":7,
								display:"none"
							},
							extras:{
								appFacebookLogin:{
									type:["chosenOverlay"]
								}
							},

							logic:{
								desktop:{
									width:(devObj)=>{
										let {zChildren} = devObj
										return numberParse(getComputedStyle(zChildren["&#8353"].element).width)
									},
									height:(devObj)=>{
										return 1000
									},
									top:(devObj)=>{

										return  judimaPageOffset().y + 0
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
								mobile:{
									width:(devObj)=>{
										let {zChildren} = devObj
										return numberParse(getComputedStyle(zChildren["&#8353"].element).width)
									},
									height:(devObj)=>{
										return 1000
									},
									top:(devObj)=>{

										return judimaPageOffset().y +0
									},
									left:(devObj)=>{
										let {zChildren,zSymbol,xPosition} = devObj

										try{
											let final = xPosition({
												target: numberParse(zChildren[zSymbol].css["width"]),
												contain: numberParse(getComputedStyle(zChildren["&#8353"].element).width)
											})
											return final
										}
										catch(e){
											return numberParse(getComputedStyle(zChildren["&#8353"].element).width)/2
										}



									}
								},
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
					]
				},
				delta:{
					group:"login_card",
					options:{

						next:function (devObj){
							let {index}= devObj
							return (index+1) % 3 === 0 ? "true":"false"
						} ,// means deltaNode will try to place the object next to
						cssLeft:function(devObj){
							let {index,css}= devObj;
							if( (index+1) % 3 === 1  ){
									return (
									numberParse(css.left) + numberParse(css.width) + 40
									).toString() + "px"
							}

							else if( (index+1) % 3 === 2  ){
								return (
								numberParse(css.left) + ((numberParse(css.width) + 40)* 2)
								).toString() + "px"
							}
							else{
								return css.left
							}
						},
						modify:(devObj)=>{
							let {zChild,x,index,hook,co} = devObj
							// let yourFNs = []  // say if you wanna modify height, top image ...
							if(hook === "latchDirective"){
								let {targets} = zChild[x].extras.appLatch.display
								let myImg = targets[2]
								let myName = targets[3]
								let myMesg  = targets[1]
								let chosenImg = targets[5]
								let chosenName = targets[6]
								switch (index) {
									case undefined:
										myImg = targets[4]
										myName = targets[5]
										myMesg  = targets[3]
										chosenImg = targets[7]
										chosenName = targets[8]
										zChild[chosenImg].element.src = zChild[myImg].extras.extend.src
										zChild[myMesg].innerText.item = "5"
										zChild[chosenName].innerText.item = zChild[myName].innerText.item
										break;
									case 0:
										zChild[chosenImg].element.src = zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/angular.png"
										zChild[chosenName].innerText.item = zChild[myName].innerText.item = "Angular"
										zChild[myMesg].innerText.item = "3"
										break;

									case 1:
										zChild[chosenImg].element.src = zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/ruby_programming.png"
										zChild[chosenName].innerText.item = zChild[myName].innerText.item = "Ruby"
										zChild[myMesg].innerText.item = "2"
										break;
									case 2:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/plus.png"
										zChild[myName].innerText.item = "Add Account"
										zChild[myName].css.color = "blue";
										let addingDelta = 350

										zChild[x].extras.component.top = addingDelta + zChild[x].extras.component.top
										if(co.metadata.section.mediaQuery === "desktop"){
											zChild[x].css.top = (numberParse(zChild[x].css.top)+ addingDelta).toString() + "px"
										}
										break;

									// default:
									// 	addingDelta = 350
									// 	zChild[x].extras.component.top = addingDelta + zChild[x].extras.component.top
									// 	zChild[x].css.top = (numberParse(zChild[x].css.top)+ addingDelta).toString() + "px"

									// 	break;
								}

							}

						}
					}
				}
			},


		].map((x:any,i)=>{
			x.key += " login-page"
			return x
		})
	},
	{
		"title":"site-map",
		"type_slug":"forms",
		"metafields":[
			{
				key:"Body",
				type:"body",
				split:20,
				gap:20,
				// width:1300,
				navigation:{
					name:"login"
				},
				options:{
					judima:{
						moving:{
							point:"bottom",
							target:'login_page',
							coordinates:{x:0,y:0},
							type:"custom"
						},
						mobile:{
							stack:20
							// top:200,
						}
					},
					extras:{
						appLanguageTranslator:{
							confirm:"true",
							type:["body","main"],
						},
						section:{
							// width:1300
							gap:20,
						}
					}
				}
			},
			{
				key:"language-current",
				type:"text",
				value:"English (EN)",
				split:1.2,
				options:{
					css:{
						"font-size":"16px"
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"footer-group"
					},
					zChildren:[
						{
							bool:"div",
							val:"footer-background a_p_p_MainBackground",
							logic:{
								desktop:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.8,
									top:(devObj)=>{
										let {zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).top) -20
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								},
								mobile:{
									width:(devObj)=>{
										let {css,zSymbol,delta,zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

									},
									height:1.15,
									top:(devObj)=>{
										let {zChildren} = devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).top) -40
									},
									left:(devObj)=>{
										let {} = devObj
										return 0
									}
								}
							},
							group:["footer-group"]
						}
					]
				}
			},
			...[
			{
				key:"ES",
				type:"anchor",
				split:1.2,
				value:"Español",
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language:"es"
						}
					}
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
			},
			{
				key:"FR",
				type:"anchor",
				value:"Français",
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language:"fr"
						}
					}
				},
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
			},
			{
				key:"Simplified-Chinese",
				type:"anchor",
				value:"中文(简体)",
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language:"zh"
						}
					}
				}
			},
			{
				key:"Hebrew",
				type:"anchor",
				value:"العربية",
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language: "he",
						}
					}
				}
			},
			{
				key:"Portuguese",
				type:"anchor",
				value:"Português",
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language: "pt",
						}
					}
				}
			},
			{
				key:"Korean",
				type:"anchor",
				value:"한국어",
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "ko",
						}
					}
				}
			},
			{
				key:"Italian",
				type:"anchor",
				value:"Italiano",
				split:1.2,
				left:300,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "it",
						}
					}
				}
			},
			{
				key:"German",
				type:"anchor",
				value:"Deutsch",
				split:1.2,
				left:((300 + 130)*1) + (30*2),
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "de"
						}
					}
				}
			},
			{
				key:"Hindi",
				type:"anchor",
				value:"हिन्दी",
				split:1.2,
				left:300 + (130*2) + (30*4),
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "hi"
						}
					}
				}
			},
			{
				key:"Japanese",
				type:"anchor",
				value:"日本語",
				gap:50,
				// left:300 + (130*3) + (30*6),
				split:1.2,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"container"
					},
					zChildren:[
						{
							bool:"div",
							val:"container a_p_p_Glassmorphism a_p_p_SiteMapAnchorContainer",
							css:{
								"z-index":3,

							},
							logic:{
								desktop:{
									width:1.2,
									height:1.9,
									top:-7.5,
									left:-15
								},
								mobile:{
									width:()=>{
										return 100
									},
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["container"]
						}
					]
				},
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "ja"
						}
					},

				}
			}

			].map((x:any,i)=>{
				// if(x.latch?.display.name){
				// 	x.latch.display.name += "-" + i
				// 	x.latch.zChildren[0].group[0] += "-" + i
				// 	x.latch.zChildren[0].logic.mobile.left -= 15
				// }
				delete x.latch
				x.key += " a_p_p_SiteMap_Anchor a_p_p_Glassmorphism"
				x.options.judima = {
					mobile:{
						// left:40
					}
				}
				return x
			}),
			{
				key:"strikethrough",
				type:"div",
				top:30,
				split:10,
				height:1,
				next:"true",
				options:{
					css:{
						"background-color":"grey",
						"z-index":"4"
					}
				}

			},
			...[
				{
					key:"sign-up",
					type:"anchor",
					value:"Sign Up",

				},
				{
					key:"login",
					type:"anchor",
					value:"Log In"
				},
				{
					key:"fb-mesg",
					type:"anchor",
					value:"Messenger"
				},
				{
					key:"watch",
					type:"anchor",
					value:"Watch"
				},
				{
					key:"ppl",
					type:"anchor",
					value:"People"
				},
				{
					key:"pages",
					type:"anchor",
					value:"Pages"
				},
				{
					key:"page-categories",
					type:"anchor",
					value:"Page Categories"
				},
				{
					key:"games",
					type:"anchor",
					value:"Games",
					left:300
				},
				{
					key:"marketplace",
					type:"anchor",
					value:"Marketplace",
					gap:50
				},
				{
					key:"groups",
					type:"anchor",
					value:"Groups",
					gap:50
				},
				{
					key:"Privacy",
					type:"anchor",
					value:"Privacy",
					gap:50,
					latch:{
						type:"display",
						display:{
							type:"part",
							name:"footer-group"
						}
					}
				}
			].map((x:any,i)=>{
				x.key += " a_p_p_SiteMap_Anchor a_p_p_Glassmorphism"
				x.split = 1.2
				return x
			})
		]
	}
]

let home_development :Array<zProtoComponent> = [
	{
		title:"homeNavigation",
		type_slug:"forms",
		metafields:[
			{
				key:"Body",
				type:"body",
				navigation:{
					name:"home"
				},

				options:{
					extras:{
						section:{
							left:-55,
							width:1500,
							split:20,
							gap:10,
							stack:30
						}
					}
				}
			},
			{
				key:"facebok-logo",
				type:"image",
				imageURL:"facebook_circular.png",
				height:30,
				split:.8,
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"navGroup"
					},
					zChildren:[
						{
							bool:"div",
							val:"navOverlay a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:(devObj)=>{
										let {zChildren} = devObj
										return numberParse(getComputedStyle(zChildren["&#8353"].element).width)-20
									},
									height:2,
									top:(devObj)=>{

										return 15
									},
									left:(devObj)=>{
										return 15
									},
								},
								mobile:{
									width:1.2,
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["navGroup",...Array.from(Array(3),(x,i)=>{return "navUserIcon_"+i})]
						}
					]
				}
				// left:0
			},
			{
				key:"seach-facebook",
				type:"input",
				height:10,
				split:4,
				options:{
					css:{
						"font-size":"16px",
						"background":"rgb(240, 242, 245)",
						"box-shadow":"none"
					},
					extras:{
						extend:{
							placeholder:"Search Facebook"
						}
					}
				}
			},
			...[
				{
					key:"house-icon",
					type:"image",
					height:30,
					split:.8,
					gap:120,
					imageURL:"	house.png"
				},
				{
					key:"friend-icon",
					type:"image",
					height:30,
					imageURL:"group.png"
				},
				{
					key:"group-icon",
					type:"image",
					height:30,
					imageURL:"tv-monitor.png"
				},
				{
					key:"marketplace-icon",
					type:"image",
					height:30,
					imageURL:"marketplace.png"
				},
				{
					key:"group-icon",
					type:"image",
					height:30,

					imageURL:"crowd.png"
				},
			].map((x:zProtoChildren,i)=>{

				x.gap = x.gap ||80
				x.split = x.split||.6

				x.latch = {
					type:"display",
					display:{
						type:"target",
						name:"navIcon_"+i
					},
					zChildren:[
						{
							bool:"div",
							css:{
								background:"radial-gradient(farthest-corner at 100% 0px, cyan 0%, blue 200%)",
								"z-index":5,
								display:i === 0 ? "block":"none"
							},
							logic:{
								desktop:{
									width:1.2,
									height:.15,
									top:(devObj)=>{
										let {zChildren,zSymbol} = devObj
										try {
											let navOverlay = zChildren[zSymbol]?.extras?.appLatch?.navOverlay ||
											(()=>{
												let navOverlay =Object.entries(zChildren).filter((x:any,i)=>{
													return x[1].val.includes("f_o_r_m_navOverlay")
												})[0][0]
												zChildren[zSymbol].extras.appLatch = {
													navOverlay
												}
												return navOverlay
											})()

												return numberParse(zChildren[navOverlay].css.height) +
												numberParse(zChildren[navOverlay].css.top) -
												numberParse(zChildren[zSymbol].css.height)

										}

										catch (error) {
											return 0
										}
										// console.log(zSymbol,zChildren)



									},
									left:-5
								},
								mobile:{
									width:1.2,
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["navIcon_"+i]
						}
					]
				}
				return x
			}),
			{
				key:"profile-icon",
				type:"image",
				height:20,
				split:.6,
				left:1100,
				imageURL:"python.jpg",
				options:{
					css:{
						"border-radius":"50px",
						"border":"10px soild black"
					}
				}
			},
			{
				key:"profile-name",
				type:"text",
				height:20,
				left:1140,
				// split:.6,
				options:{
					css:{
						"font-size":"15px",
						"font-family":"Segoe UI Historic",
						"font-weight":"1000"
					}
				},
				value:"Python3"
			},
			...[
				{
					key:"messenger",
					type:"image",
					gap:50,
					imageURL:"messenger.png"
				},
				{
					key:"bell",
					type:"image",
					imageURL:"bell.png"
				},
				{
					key:"bell",
					type:"image",
					imageURL:"down-arrow.png"
				}
			].map((x:zProtoChildren,i)=>{
				x.key += "-icon"
				x.gap = x.gap ||30
				x.height = 20
				x.split = .6
				x.latch = {
					type:"display",
					display:{
						type:"target",
						name:"navUserIcon_"+i,
					},
					zChildren:[
						{
							bool:"div",
							val:"navIcon a_p_p_NavIcon_Container",
							logic:{
								desktop:{
									width:1.4,
									height:2.0,
									top:-10,
									left:-7
								},
								mobile:{
									width:1.2,
									height:1.2,
									top:0,
									left:0
								}
							},
							group:["navUserIcon_"+i]
						}
					]
				}

				return x
			})


		]
	},
	{
		title:"homeContent",
		type_slug:"forms",
		metafields:[
			{
				key:"Body",
				type:"body",
				options:{
					judima:{
						moving:{
							point:"bottom",
							target:'homeNavigation',
							coordinates:{x:-70,y:0},
							type:"custom"
						},
					},
					extras:{
						section:{
							// left:-50,
							width:1560,
							split:4,
							gap:10,
							stack:0
						},
						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
					}
				},
				navigation:{
					name:"home"
				},
				delta:{
					group:[
						{
							name:"sideNav",
							type:"repeat",
							by:10,
						},
						{
							name:"sponsored",
							type:"repeat",
							by:1,
						},
						{
							name:"yourPagesDesc",
							type:"repeat",
							by:1,
						},
						{
							name:"contacts",
							type:"repeat",
							by:6,
						},
						{
							name:"onYourMind",
							type:"repeat",
							by:2,
						}
					]
				},
				nest:{
					group:[
						{
							name:"sideNav",
							type:"regular"
						},
						{
							name:"homeMisc",
							type:"regular"
						},
						{
							name:"newsFeed",
							type:"regular"
						}
					]
				}

			},
			...[
				...[
					{
						key:"subNavigation a_p_p_subNav a_p_p_Glassmorphism a_p_p_HomeMiscContainer",
						type:"div",
						split:1,

						latch:{
							type:"display",
							display:{
								type:"target",
								name:"homeOverlay"
							},
							zChildren:[
								{
									bool:"div",
									val:"home-background a_p_p_MainBackground",
									css:{
										"z-index":2,
									},
									logic:{
										desktop:{
											width:(devObj)=>{
												let {css,zSymbol,delta,zChildren} = devObj
												return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

											},
											height:1.5,
											top:(devObj)=>{
												let {} = devObj
												return 0
											},
											left:(devObj)=>{
												let {} = devObj
												return 0
											}
										},
										mobile:{
											width:(devObj)=>{
												let {css,zSymbol,delta,zChildren} = devObj
												return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

											},
											height:1.15,
											top:(devObj)=>{
												let {} = devObj
												return 0
											},
											left:(devObj)=>{
												let {} = devObj
												return 0
											}
										}
									},

									group:["homeOverlay"]
								}
							]
						},
						nest:{
							group:"sideNav",
							name:"A1"
						},


					},
					{
						key:"item-container a_p_p_ItemContainer ",
						type:"div",
						nest:{
							group:"sideNav",
							name:"B1",
							under:"A1"
						},
						options:{
							extras:{
								appVanillaTilt:{
									type:"target",
									group:"sideNav",
								}
							}
						},
						delta:{
							group: "sideNav",
						}
					},
					{
						key:"item-icon a_p_p_ItemIcon",
						type:"image",
						nest:{
							group:"sideNav",
							name:"C1",
							under:"B1"
						},
						delta:{
							group: "sideNav",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === "deltaNodeBootstrap"){
										let icons = ["find_friends_sidenav.png",
										"timer.png",
										"star.png",
										"groups.png",
										"marketplace.png",
										"watch.png",
										"events.png",
										"memories.png",
										"saved.png"
										].map((x:string,i)=>{
											return "sideNav/" +x
										})
										zChild[x].element.src = mediaPrefix({media:icons[index]})
									}
								}
							}
						}
					},
					{
						key:"item-text a_p_p_ItemText",
						type:"text",
						nest:{
							group:"sideNav",
							name:"C2",
							under:"B1"
						},
						options:{
							css:{
								"font-size":"16px"
							}
						},
						value:"Python3",
						delta:{
							group: "sideNav",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === "deltaNodeBootstrap"){
										let titles = ["Find Friends",
										"timer",
										"star",
										"groups",
										"marketplace",
										"watch",
										"events",
										"memories",
										"saved"
										].map((x:string,i)=>{
											return x.charAt(0).toUpperCase() + x.slice(1)
										})
										zChild[x].innerText.item = titles[index]
									}
								}
							}
						}
					},
				],
				...[
					{
						key:"subNavigation",
						type:"div",
						split:1.9,
						nest:{
							group:"newsFeed",
							name:"A1"
						},
						options:{
							css:{
								opacity:1
							}
						},

					},
					{
						key:"newsFeedContainer a_p_p_ItemContainer a_p_p_NewsFeedItemContainer",
						type:"div",
						options:{
							css:{
								"margin-left":"10px",
								"flex-direction":"column",
								opacity:1,
							}
						},

						nest:{
							group:"newsFeed",
							name:"B1",
							under:"A1"
						}
					},
					{
						key:"newsFeedContainer",
						type:"div",
						options:{
							css:{
								opacity:1,
								display: "flex",
								"flex-direction":"row",
								"margin":"10px 0 0 10px",
								"flex-wrap":"wrap",
								"width":"90%"
							}
						},
						nest:{
							group:"newsFeed",
							name:"C1",
							under:"B1"
						}
					},
					{
						key:"newsFeedIcon  a_p_p_NewsFeedIcon",
						type:"image",
						imageURL:"python.jpg",
						options:{
							css:{
								opacity:1,
								margin:"10px 0 0 0"
							}
						},
						nest:{
							group:"newsFeed",
							name:"D1",
							under:"C1"
						}
					},
					{
						key:"newsFeedInput a_p_p_NewsFeedInput",
						type:"input",
						options:{
							css:{
								opacity:1,
								"flex-grow":1
							},
							extend:{
								placeholder:"What's on your mind?",
								disabled:"true"
							},

						},
						latch:{
							type:"display",
							display:{
								type:"target",
								name:"createPost",
							},
							zChildren:[
								{
									bool:"div",
									css:{
										"background-color":"grey",
										"z-index":9
									},
									logic:{
										desktop:{
											width:(devObj)=>{
												let {css,zSymbol,delta,zChildren} = devObj
												return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

											},
											height:1.5,
											top:(devObj)=>{
												let {} = devObj
												return 0
											},
											left:(devObj)=>{
												let {} = devObj
												return 0
											}
										},
										mobile:{
											width:(devObj)=>{
												let {css,zSymbol,delta,zChildren} = devObj
												return numberParse(getComputedStyle( zChildren["&#8353"].element).width)

											},
											height:1.15,
											top:(devObj)=>{
												let {} = devObj
												return 0
											},
											left:(devObj)=>{
												let {} = devObj
												return 0
											}
										}
									},
									group:["createPost"]
								}
							]
						},
						nest:{
							group:"newsFeed",
							name:"D2",
							under:"C1"
						}
					},
					{
						key:"strikethrough a_p_p_NewsFeedStrikeThrough",
						type:"div",
						options:{

						},
						nest:{
							group:"newsFeed",
							name:"C2",
							under:"B1"
						}
					},
					{
						key:"newsFeedContainer a_p_p_newsFeedItemContainer",
						type:"div",
						options:{
							css:{
								opacity:1,
								display: "flex",
								"flex-direction":"row",
								"margin":"10px 0 10px 10px",
								"flex-wrap":"wrap",
								"width":"90%"
							}
						},
						nest:{
							group:"newsFeed",
							name:"C3",
							under:"B1"
						}
					},
					{
						key:"newsFeedImage a_p_p_newsFeedImage",
						type:"image",
						imageURL:"home/liveVideo.png",
						options:{
							css:{
								"border-radius":"50px",

							},

						},
						delta:{
							group:"onYourMind",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === 'deltaNodeBootstrap'){
										let items = ["home/photoVideo.png","home/smiley.png"]
										zChild[x].element.src = mediaPrefix({media:items[index]})
									}
								}
							}
						},
						nest:{
							group:"newsFeed",
							name:"D3",
							under:"C3"
						}
					},
					{
						key:"newsFeedText a_p_p_NewsFeedText",
						type:"text",
						value:"Live Video",
						options:{
							css:{
								"margin-top":"10px"
							}
						},
						delta:{
							group:"onYourMind",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === 'deltaNodeBootstrap'){
										let items = ['Photo/Video','Feeling/Activity']
										zChild[x].innerText.item = items[index]
									}
								}
							}
						},
						nest:{
							group:"newsFeed",
							name:"D4",
							under:"C3"
						}
					},
				],
				...[
					{
						key:"subNavigation a_p_p_HomeMisc a_p_p_HomeMiscContainer",
						type:"div",
						split:1,
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"A1"
						}
					},
					{
						key:"sponsoredContainer a_p_p_ItemContainer a_p_p_HomeMisc",
						type:"div",
						options:{
							css:{
								"margin-left":"10px",
								// "background-color": "white",
								overflow:"hidden",
								opacity:1,
								"flex-direction":"column"
							}
						},

						nest:{
							group:"homeMisc",
							name:"B1",
							under:"A1"
						}
					},
					{
						key:"sponsoredHeading a_p_p_ItemContainerSponsoredSubHeading",
						type:"sub-heading",
						value:"Sponsored",
						options:{
							css:{
								opacity:1
							},
						},
						nest:{
							group:"homeMisc",
							name:"C2",
							under:"B1"
						},
					},
					{
						key:"sponsoredItemContainer a_p_p_ItemContainerSponsored a_p_p_ItemContainer a_p_p_HomeMisc",
						type:"div",
						options:{
							css:{
								// margin:0,
								"margin-left":"10px",
								"margin-top":"10px",
								opacity:1
							},
							extras:{
								appVanillaTilt:{
									type:"target",
									group:"sideNav",
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"C1",
							under:"B1"
						},
						delta:{
							group:"sponsored"
						}
					},
					{
						key:"sponsoredItemImage a_p_p_ItemContainerSponsoredImage",
						type:"image",
						imageURL:"home/pexels-artem-beliaikin-2668308.jpg",
						options:{
							css:{

							}
						},
						delta:{
							group:"sponsored",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === "deltaNodeBootstrap"){
										let sponsoredImages = ["home/pexels-martin-péchy-1292294.jpg"]
										zChild[x].element.src = mediaPrefix({media:sponsoredImages[index]})
									}
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"D2",
							under:"C1"
						}
					},
					{
						key:"sponsoredItemText a_p_p_ItemContainerSponsoredText",
						type:"text",
						value:"Coca-Cola",

						delta:{
							group:"sponsored",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === "deltaNodeBootstrap"){
										let sponsoredText = ["Pepsi"]
										zChild[x].innerText.item = sponsoredText[index]
									}
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"D3",
							under:"C1"
						}
					},
					{
						key:"strikethrough a_p_p_StrikeThrough",
						type:"div",
						value:"Coca-Cola",
						nest:{
							group:"homeMisc",
							name:"B2",
							under:"A1",
						},

					},
				],
				...[
					{
						key:"yourPagesContainer a_p_p_ItemContainer a_p_p_HomeMisc",
						type:"div",
						options:{
							css:{
								"margin-left":"10px",
								// "background-color": "white",
								opacity:1,
								"flex-direction":"column"
							}
						},

						nest:{
							group:"homeMisc",
							name:"B3",
							under:"A1"
						}
					},
					{
						key:"yourPagesSubHeading a_p_p_yourPagesSubHeading",
						type:"sub-heading",
						value:"Your Pages",
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"C3",
							under:"B3"
						},
					},
					{
						key:"yourPagesItemContainer a_p_p_yourPagesItemContainer",
						type:"div",
						value:"Your Pages",
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"C4",
							under:"B3"
						},
					},
					{
						key:"yourPagesIcon a_p_p_yourPagesIcon",
						type:"image",
						imageURL:"home/windmillcode.png",
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"D1",
							under:"C4"
						},
					},
					{
						key:"yourPagesText a_p_p_yourPagesText",
						type:"text",
						value:"WindMillCode",
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"D4",
							under:"C4"
						},
					},
					{
						key:"yourPagesDescContainer a_p_p_yourPagesDescContainer",
						type:"div",

						nest:{
							group:"homeMisc",
							name:"D5",
							under:"C4"
						},
					},
					{
						key:"yourPagesText a_p_p_yourPagesDescText",
						type:"text",
						value:"14 Notifications",

						delta:{
							group:"yourPagesDesc",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === "deltaNodeBootstrap"){
										let yourPagesDescText = ["Create Promotion"]
										zChild[x].innerText.item = yourPagesDescText[index]
									}
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"E5",
							under:"D5"
						},
					},
					{
						key:"strikethrough a_p_p_StrikeThrough",
						type:"div",
						value:"Coca-Cola",
						nest:{
							group:"homeMisc",
							name:"B4",
							under:"A1",
						},

					},
				],
				...[
					{
						key:"ContactsContainer a_p_p_ItemContainer",
						type:"div",
						options:{
							css:{
								"margin-left":"10px",
								opacity:1,
								"flex-wrap":"wrap"

							}
						},

						nest:{
							group:"homeMisc",
							name:"B5",
							under:"A1"
						}
					},
					{
						key:"ContactsSubHeading a_p_p_ContactsSubHeading",
						type:"sub-heading",
						value:"Contacts",
						options:{
							css:{
								opacity:1
							}
						},
						nest:{
							group:"homeMisc",
							name:"C5",
							under:"B5"
						},
					},
					{
						key:"ContactsItemContainer a_p_p_ContactsItemContainer",
						type:"div",
						options:{
							css:{
								opacity:1
							}
						},
						delta:{
							group:"contacts",
						},
						nest:{
							group:"homeMisc",
							name:"C6",
							under:"B5"
						},
					},
					{
						key:"ContactsIcon a_p_p_ContactsIcon",
						type:"image",
						imageURL:"angular.png",
						options:{
							css:{
								opacity:1
							}
						},
						delta:{
							group:"contacts",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === 'deltaNodeBootstrap'){
										let ContactsImg = ['ruby_programming.png',"scss.png","typescript.jpg","gcp.jpg","ibm_cloud.png","sql.png"]
										zChild[x].element.src = mediaPrefix({media:ContactsImg[index]})
									}
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"D6",
							under:"C6"
						},
					},
					{
						key:"ContactsText a_p_p_ContactsText",
						type:"text",
						value:"Angular",
						options:{
							css:{
								opacity:1
							}
						},
						delta:{
							group:"contacts",
							options:{
								modify:(devObj)=>{
									let {zChild,x,index,hook,co} = devObj
									if(hook === 'deltaNodeBootstrap'){
										let ContactsText = ['Ruby',"SCSS","TypeScript","GCP","IBM Cloud","SQL"]
										zChild[x].innerText.item = ContactsText[index]
									}
								}
							}
						},
						nest:{
							group:"homeMisc",
							name:"D7",
							under:"C6"
						},
					},
				],
			].map((x:zProtoChildren | any,i)=>{
				if(x?.nest?.under){
					return x
				}
				x.height = 700
				x.key += " a_p_p_Glassmorphism"
				return x
			}),

		]
	}
]

// attribute map
// "x-mark.png":Darius Dan x-icons


let facebook_development = [
	...login_development,
	...home_development
]





website.convertCMS = facebook_development




export default website
