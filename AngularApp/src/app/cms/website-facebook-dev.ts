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
						"z-index":2
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
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"facebook_login_credentials"
					},
					zChildren:[
						{
							bool:"div",
							val:"login-display a_p_p_Container",
							group:["facebook_login_credentials"],
							css:{
								"z-index":3
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

										return delta.current.max.value -80
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
				key:"password",
				type:"input",
				left:750,
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
						"font-size":"14px",
						"text-align":"center",
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
				"key":"login-card a_p_p_Login_Card",
				type:"div",
				next:"true",
				height:205,
				width:160,
				top:-320,
				options:{
					css:{
						"z-index":2
					},
					judima:{
						mobile:{
							width:260
						}
					},
					extras:{
						appFacebookLogin:{
							type:"head"
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
								"background":"radial-gradient(farthest-corner at 40px 40px, white 0, cyan, green 100%)",
							},
							val:"login-main-background",
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
								"z-index":3
							},
							extras:{
								extend:{
									src:"./assets/media/x-mark.png",
								},
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
							group:["facebook_login_card"]
						},
						{
							bool:"div",
							val:"notifications-count a_p_p_Login_Card_Notifications_Count",
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
							group:["facebook_login_card"]
						},
						{
							bool:"img",
							val:"account-image a_p_p_Login_Image",
							css:{
								"z-index":2
							},
							extras:{
								extend:{
									src:"./assets/media/python.jpg"
								},
								appFacebookLogin:{
									type:"login-img"
								},
							},
							logic:{
								desktop:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return 42
										}
										return (1* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .75 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return css.left +60
										}
										return css.left

									}
								},
								mobile:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return 42
										}
										return (.5* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .75 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.element.src === "./assets/media/plus.png" ){
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
								"z-index":3
							},
							extras:{
								appFacebookLogin:{
									type:"login-name"
								},
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
							val:"chosen-login a_p_p_ChosenLogin",
							css:{
								"z-index":5,
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
								"z-index":5,
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
								"z-index":5,
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
							val:"password a_p_p_Input login-page",
							css:{
								"z-index":5,
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
									type:["chosen"]
								}
							},
							needed:["appLatch"],
							group:["facebook_login_card"]
						},
						{
							bool:"b",
							val:"chosen-login-button a_p_p_Button login-page",
							css:{
								"z-index":5,
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
									type:["chosen"]
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
								"z-index":4,
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
										myImg = targets[3]
										myName = targets[4]
										myMesg  = targets[2]
										chosenImg = targets[6]
										chosenName = targets[7]
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
						}
					}
				}
			},
			{
				key:"language-current",
				type:"text",
				value:"English (EN)",
				split:2,
				options:{
					css:{
						"font-size":"16px"
					}
				}
			},
			...[
			{
				key:"ES",
				type:"anchor",
				value:"Español",
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language:"es"
						}
					}
				}
			},
			{
				key:"FR",
				type:"anchor",
				value:"Français (France)",
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							language:"fr"
						}
					}
				}
			},
			{
				key:"Simplified-Chinese",
				type:"anchor",
				value:"中文(简体)",
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
				value:"Português (Brasil)",
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
				options:{
					extras:{
						appLanguageTranslator:{
							group:"translate-group-1",
							type:"link",
							"language": "ja"
						}
					}
				}
			}

			].map((x:any,i)=>{
				x.key += " a_p_p_SiteMap_Anchor"
				return x
			}),
			{
				key:"strikethrough",
				type:"div",
				top:30,
				split:20,
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
					value:"Sign Up"
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
					value:"Games"
				},
				{
					key:"marketplace",
					type:"anchor",
					value:"Marketplace"
				},
				{
					key:"groups",
					type:"anchor",
					value:"Groups"
				},
				{
					key:"Privacy",
					type:"anchor",
					value:"Privacy"
				}
			].map((x:any,i)=>{
				x.key += " a_p_p_SiteMap_Anchor"
				return x
			})
		]
	}
]

// attribute map
// "x-mark.png":Darius Dan x-icons


let facebook_development = [
	...login_development,
]





website.convertCMS = facebook_development




export default website
