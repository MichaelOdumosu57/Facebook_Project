import {objectCopy,zProtoComponent,zProtoChildren, zChildren} from '../customExports'



let website:any = {}


let navigation_development:Array<zProtoComponent> = [
	{
		"title": "navigation",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				// "left":200,
				stack:50,
				navigation:{
					"group":[
						{
							name:"isha",
							type:"direct_link"
						},
						{
							name:"thy",
							type:"direct_link"
						},
						{
							name:"mike",
							type:"direct_link"
						},
					],
					name:"isha"
				},

				options:{
					css:{
						// width:"125%"
					},
					judima:{
						mobile:{
							stack:20,
							footerSpace:50
						}
					},
					extras:{
						appSection:{
							confirm:"true"
						},
						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
					}
				},

			},
			{
				"key": "heading",
				type:"heading",
				"value":"Roomate App",
				"split": "4",
				left:"350",
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"roomate-heading"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"blue"
							},
							val:"a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:1.2,
									height:1.5,
									top:-10,
									left:-50
								},
								mobile:{
									width:1.1,
									height:1.1,
									top:0,
									left:0
								}
							},
							group:["roomate-heading"],
							extras:{
								appVanillaTilt:{
									type:"target",
									group:"my-tilt-1"
								},
							},
						},
						{
							bool:"div",
							css:{
								"background-color":"tan"
							},
							val:"a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:function (devObj){
										let {zChildren} =devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)


									},
									height:1.5,
									top:-30,
									left:function (devObj){
										let {zChildren} =devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).left)


									},
								},
								mobile:{
									width:function (devObj){
										let {zChildren} =devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).width)


									},
									height:1.1,
									top:0,
									left:function (devObj){
										let {zChildren} =devObj
										return numberParse(getComputedStyle( zChildren["&#8353"].element).left)


									},
								}
							},
							group:["roomate-heading","isha-heading","mike-heading"],
							extras:{

							},
						},
					],

				},
				options:{
					css:{
						height:"200px",
						"font-family":"Gilgongo Doro",
						"text-align":"center",
					},
					extras:{
						// appVanillaTilt:{
						// 	type:"part",
						// 	group:"my-tilt-1"
						// }
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					},
				},

			},
			{
				"key": "isha",
				type:"text",
				"value":"Ishita Rahman",
				"split": "3",
				next:"true",
				navigation:{
					group:"isha",
					type:"direct_link"
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"isha-heading"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"red"
							},
							val:"a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:1.2,
									height:1.5,
									top:-10,
									left:-50
								},
								mobile:{
									width:1.1,
									height:1.1,
									top:0,
									left:0
								}
							},
							group:["isha-heading"],
							extras:{
							},
						},

					],

				},
				options:{
					css:{
						height:"200px",
						"font-family":"Gilgongo Doro",
						"text-align":"left",
					},
					extras:{
						appVanillaTilt:{
							type:"part",
							group:"isha-tilt"
						}
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					}
				},

			},
			{
				"key": "thy",
				type:"text",
				"value":"Thy A. Bui",
				// "split": "2",
				width:200,
				navigation:{
					group:"thy",
					type:"direct_link"
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"thy-heading"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"red"
							},
							val:"a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:1.2,
									height:1.5,
									top:-10,
									left:-30
								},
								mobile:{
									width:1.1,
									height:1.1,
									top:0,
									left:0
								}
							},
							group:["thy-heading"],
							extras:{
								// appVanillaTilt:{
								// 	type:"target",
								// 	group:"thy-tilt"
								// },
							},
						},
					],

				},
				options:{
					css:{
						height:"200px",
						"font-family":"Gilgongo Doro",
						"text-align":"left",
					},
					judima:{
						mobile:{
							widthRatio:.7
						}
					},
					extras:{
						appVanillaTilt:{
							type:"part",
							group:"thy-tilt"
						}
					}
				},

			},
			{
				"key": "mike",
				type:"text",
				"value":"Michael Odumosu",
				// "split": "2",
				width:330,
				navigation:{
					group:"mike",
					type:"direct_link"
				},
				latch:{
					type:"display",
					display:{
						type:"target",
						name:"mike-heading"
					},
					zChildren:[
						{
							bool:"div",
							css:{
								"background-color":"red"
							},
							val:"a_p_p_Glassmorphism",
							logic:{
								desktop:{
									width:1.2,
									height:1.5,
									top:-10,
									left:-30
								},
								mobile:{
									width:1.1,
									height:1.1,
									top:0,
									left:0
								}
							},
							group:["mike-heading"],
							extras:{
								// appVanillaTilt:{
								// 	type:"target",
								// 	group:"mike-tilt"
								// },
							},
						},
					],

				},
				options:{
					css:{
						height:"200px",
						"font-family":"Gilgongo Doro",
						"text-align":"left",
					},
					extras:{
						// appVanillaTilt:{
						// 	type:"part",
						// 	group:"mike-tilt"
						// }
					},

					judima:{
						mobile:{
							widthRatio:.7
						}
					},
				},

			},

		]
	},
]
let prefix_navigation_development = objectCopy(navigation_development)
let login_development:Array<zProtoComponent> = [

	{
		"title": "login_page",
		"type_slug": "forms",
		"metafields": [

			{
				"key": "Body",
				"type": "body",
				stack:0,
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
							footerSpace:50
						}
					},
					extras:{

						appVanillaTilt:{
							confirm:"true",
							type:"body",
							zSymbolNeeded:"true"
						},
						appRoommate:{
							confirm:"true",
							type:"body",
						},
						appSection:{
							confirm:"true"
						}
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
					}
				},
				latch:{
					type:"display",
					display:{
						type:"part",
						name:"facebook_login_group"
					},
				},
				width:200,
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
									width:1,
									height:1,
									top:0,
									left:0,
								}
							}
						}
					]
				},
				value:"Email or Phone Number",
				options:{
					css:{
						"font-size":"17px"
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
					}
				}

			},
			{
				"key":"login-card a_p_p_Login_Card",
				type:"div",
				next:"true",
				height:205,
				width:160,
				top:-250,
				options:{
					css:{
						"z-index":2
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
								"background-color":"rgb(240, 242, 245)"
							},
							val:"login-overlay",
							logic:{
								desktop:{
									width:1.2,
									height:1.5,
									top:1,
									left:1
								},
								mobile:{
									width:3,
									height:3,
									top:3,
									left:3
								}
							},
							type:["deltaNodeContainer"],
							group:["facebook_login_group","facebook_login_card","facebook_login_credentials"]
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
							bool:"img",
							val:"account-image a_p_p_Login_Card",
							css:{
								"z-index":2
							},
							extras:{
								extend:{
									src:"./assets/media/python.jpg"
								}
							},
							logic:{
								desktop:{
									width:(devObj)=>{
										let {delta,zChildren,css,zSymbol} = devObj

										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return (1* css.width)

									},
									height:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return 42
										}
										return ( .75 * css.height)

									},
									top:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.top+ 50
										}
										return css.top

									},
									left:(devObj)=>{
										// console.log(devObj)
										let {delta,zChildren,css,zSymbol} = devObj
										if(zChildren[zSymbol]?.extras.extend.src === "./assets/media/plus.png" ){
											return css.left +60
										}
										return css.left

									}
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
							bool:"p",
							val:"account-name a_p_p_Login_Name",
							css:{
								"z-index":3
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
							let {zChild,x,index,hook} = devObj
							// let yourFNs = []  // say if you wanna modify height, top image ...
							if(hook === "latchDirective"){
								let {targets} = zChild[x].extras.appLatch.display
								let myImg = targets[2]
								let myName = targets[3]
								let myMesg  = targets[1]
								switch (index) {
									case undefined:
										myImg = targets[3]
										myName = targets[4]
										myMesg  = targets[2]
										zChild[myMesg].innerText.item = "5"
										break;
									case 0:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/angular.png"
										zChild[myName].innerText.item = "Angular"
										zChild[myMesg].innerText.item = "3"
										break;

									case 1:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/ruby_programming.png"
										zChild[myName].innerText.item = "Ruby"
										zChild[myMesg].innerText.item = "2"
										break;
									case 2:
										zChild[myImg].extras.extend.src = zChild[myImg].element.src = "./assets/media/plus.png"
										zChild[myName].innerText.item = "Add Account"
										zChild[myName].css.color = "blue";
										zChild[x].css.top = (numberParse(zChild[x].css.top)+ 150).toString() + "px"
										break;
									default:
										break;
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
]

// attribute map
// "x-mark.png":Darius Dan x-icons


let facebook_development = [
	...login_development,
]





website.convertCMS = facebook_development




export default website