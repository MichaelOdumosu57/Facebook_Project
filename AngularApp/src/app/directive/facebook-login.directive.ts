


import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest, pipe } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType, zChildren } from '../customExports'
import { catchError, delay,first,take,skip,exhaustMap, tap, finalize } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appFacebookLogin]'
  })
  export class FacebookLoginDirective {


    @Input() facebookLogin: any;
    extras: any;
    zChildren: any;
    subscriptions:Array<Subscription> = []
    group:any;
    ref:ChangeDetectorRef

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer2: Renderer2,
        private ryber: RyberService
    ) { }





    ngOnInit() {
        this.extras = this.facebookLogin
        if (this.extras?.confirm === 'true' && this.extras?.type.includes("body")  ) {
            if(env.directive?.facebookLogin?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' facebookLogin ngOnInit fires on mount')
            let {ryber,extras,zChildren,subscriptions,renderer2,logIn,http} = this
            let {co} = extras
            let {group,suffix}  = ryber[co].metadata.facebookLogin

            // detects navigation
			let action:any = navigationType({
				type:["full"],
				fn:()=>{
					if(
						ryber.appCO0.metadata.navigation.full.navigated === "true" &&
						ryber[co].metadata.judima.init === "true"
					){
						return "return"
					}
				},
				ryber
			})
            //



            let mainSubscription =combineLatest([
                ryber[co].metadata.zChildrenSubject,
            ])
            .subscribe((result:any) => {
                zChildren = ryber[co].metadata.zChildren
                let ref = result[0].ref || this.ref


                // feature element organization

                // reset the group for navigation and duplication
                    // if you have subscriptions unsub here
                Object.entries(group)
                .forEach((x:any,i)=>{
                    let key = x[0]
                    let val = x[1]
                    val.subscriptions?.forEach((y,j)=>{
                        y.unsubscribe()
                    })
                })
                group = {}
                //

                Object.entries(zChildren)
                .slice(2)
                .forEach((x:any,i)=>{


                    // if an element doesnt belong it doesnt belong
                    if(x[1].extras?.appFacebookLogin === undefined){
                        return
                    }
                    //

                    // start to organize the elements into groups
                        // for latch determine which duplicate it belongs to
                    let myGroup = x[1].extras.appFacebookLogin?.group || "default"
                    let myType =  x[1].extras.appFacebookLogin?.type || "default"
                    let deltaNodeGroup =  x[1].extras?.appDeltaNode?.group || x[1].extras.appLatch?.deltaNode?.group
                    // determine if there is a duplicate and which duplicate it belongs to
                    let count = 0

                    ryber[co].metadata.deltaNode.groups[deltaNodeGroup]?.deltas
                    .forEach((y:any,j)=>    {

                        let targetZSymbols = [x[0],x[1].extras.appLatch?.deltaNode?.zSymbol]

                        let included = y.some( ai => targetZSymbols.includes(ai) );

                        if(included){
                            count = j +1
                        }
                    })
                    //
                    myGroup = myGroup.split(suffix + count)[0] + suffix + count
                    if(group[myGroup]===undefined){
                        group[myGroup] ={
                            deltaNode:{},
                            types:{},
                            suffix,
                            count,
                            subscriptions:[]
                        }

                    }

                    // organize by type
                    if(group[myGroup].types[myType] === undefined){
                        group[myGroup].types[myType] = new Set()
                    }
                    group[myGroup].types[myType].add(x[0])
                    //

                })
                //

                this.zChildren = zChildren
                this.group = group
                this.ref = ref


                Object.entries(group)
                .forEach((x:any,i)=>{
                    let [key,val] = x
                    let loginImg = Array.from(val.types["login-img"] || [])
                    let loginName = Array.from(val.types["login-name"] || [])
                    let chosen =Array.from(val.types.chosen || [])
                    let chosenImg:any = Array.from(val.types["chosen-img"] || [])
                    let chosenName:any = Array.from(val.types["chosen-name"] || [])
                    let chosenPassword:any = Array.from(val.types["chosenPassword"] || [])
                    let chosenOverlay = Array.from(val.types["chosenOverlay"] || [])
                    let head = Array.from(val.types["head"] || [])
                    let loginButton = Array.from(val.types["loginButton"] || [])
                    let chosenLoginButton = Array.from(val.types["chosenLoginButton"] || [])
                    let username:Array<string> = Array.from(val.types["username"] || [])
                    let password:Array<string> = Array.from(val.types["password"] || [])
                    let avatarName = Array.from(val.types['avatarName'] || [])
                    let avatarImg = Array.from(val.types['avatarImg'] || [])
                    let checkLogin = Array.from(val.types['checkLogin'] || [])
                    let logoutButton:Array<string> = Array.from(val.types['logoutButton'] || [])
                    // check to see if the user is logged in

                    checkLogin
                    .forEach((y:any,z)=>{
                        if(zChildren[y].extras.appFacebookLogin.loginCheck !== "true"){
                            zChildren[y].extras.appFacebookLogin.loginCheck = "true"
                            let myCheck = http.post(
                                env.facebook.url,
                                JSON.stringify({
                                    env:"refresh_page"
                                }),
                                {
                                    withCredentials:true,
                                    headers:{
                                        "Content-Type":"text/plain"
                                    }
                                }
                            )
                            .subscribe({
                                next:(result:any)=>{
                                    console.log(result)
                                    if(result.message === "allow user to proceed"){


                                        // send the avatar metadata to the appropriate subject
                                        ryber.appCO0.metadata.facebookLogin.current.next({
                                            user:result.user,
                                            avatar:result.avatar
                                        })
                                        //

                                        // place the token and credentials in memory
                                        ryber.appCO0.metadata.facebookLogin.credentials = {
                                            token:result.token,
                                            user:result.user
                                        }
                                        //

                                        // change the path
                                        ryber.appCO0.metadata.navigation.full.navigated = "true"
                                        ryber.appCurrentNav = "/home"
                                        //

                                        // reset the posts and listings as necessary
                                        http.post(
                                            env.facebook.url,
                                            {
                                                env :"resetTracks"
                                            },
                                            {
                                                responseType:"text"
                                            }
                                        )
                                        .subscribe((result:any)=>{

                                        })
                                        //
                                    }
                                },
                                error:(error:HttpErrorResponse)=>{
                                    console.log(error)
                                }
                            })

                        }

                    })


                    //

                    // update the avator place holders on all pages when the user is logged in

                    let avatarUpdate = ryber.appCO0.metadata.facebookLogin.current
                    .subscribe((result:any)=>{

                        avatarName
                        .forEach((y:any,j)=>{
                            zChildren[y].innerText.item = result.user
                        })

                        avatarImg
                        .forEach((y:any,j)=>{
                            zChildren[y].element.src = zChildren[y].extras.extend.src = mediaPrefix({media:result.avatar})
                        })
                    })
                    val.subscriptions.push(avatarUpdate)
                    //

                    // setup the click events
                    let myChosen = [...chosen,...chosenPassword,...chosenLoginButton,...chosenImg,...chosenName,...chosenOverlay]
                    ;[[...loginName,...loginImg,...head]]
                    .forEach((y:any,j)=>{

                        if(y.length <= 1){
                            return
                        }

                        let showChosen = fromEvent([0,1,2].map((z:any,k)=>{return zChildren[y[z]].element}),"click")
                        .subscribe((result:any)=>{
                            renderer2.addClass(
                                document.body,"a_p_p_BodyOverFlowHidden"
                            )
                            myChosen
                            .forEach((z:any,k)=>{
                                zChildren[z].css.display = zChildren[z].cssDefault.display || "block"
                            })
                            ref.detectChanges()
                        })
                        val.subscriptions.push(showChosen)
                    })

                    chosenOverlay
                    .forEach((y:any,j)=>{
                        let hideChosen = fromEvent(zChildren[y].element,"click")
                        .subscribe((result:any)=>{
                            renderer2.removeClass(
                                document.body,"a_p_p_BodyOverFlowHidden"
                            )
                            myChosen
                            .forEach((z:any,k)=>{
                                zChildren[z].css.display = "none"
                            })
                            ref.detectChanges()
                        })
                        val.subscriptions.push(hideChosen)
                    })
                    //

                    // login setup
                    loginButton
                    .forEach((y:any,j)=>{
                        let loginEvent = fromEvent(zChildren[y].element,"click")
                        .subscribe((result:any)=>{

                            this.logIn({
                                user:username,
                                pass:password,
                                zChildren,
                                myChosen
                            })

                        })
                        val.subscriptions.push(loginEvent)
                    })

                    chosenLoginButton
                    .forEach((y:any,j)=>{
                        let loginEvent = fromEvent(zChildren[y].element,"click")
                        .subscribe((result:any)=>{
                            this.logIn({
                                user:chosenName,
                                pass:chosenPassword,
                                zChildren,
                                myChosen
                            })
                        })
                        val.subscriptions.push(loginEvent)
                    })
                    //


                    // logout Setup

                    logoutButton
                    .forEach((y:any,j)=>{
                        let logout = zChildren[y]

                        let logoutEvent = fromEvent(logout.element,"click")
                        .pipe(
                            exhaustMap(()=>{
                                return http.post(
                                    env.facebook.url,
                                    {
                                        env:"logout",
                                        user:ryber.appCO0.metadata.facebookLogin.credentials.user
                                    },
                                    {
                                        withCredentials:true,
                                        headers:{
                                            "Content-Type":"text/plain"
                                        }

                                    }
                                )
                            }),

                        )
                        .subscribe({
                            next:()=>{

                                // change the path
                                ryber.appCO0.metadata.navigation.full.navigated = "true"
                                ryber.appCurrentNav = "/login"
                                //
                            },
                            error:(error:HttpErrorResponse)=>{
                                alert("there was an issue logging out try again later")
                            }
                        })
                        val.subscriptions.push(logoutEvent)

                    })
                    subscriptions.push(...val.subscriptions)
                })



            })
            subscriptions.push(mainSubscription)

        }
    }


	ngOnDestroy() {
		if (this.extras?.confirm === 'true') {
            if(env.directive?.facebookLogin?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' facebookLogin ngOnDestroy fires on dismount')
			this.subscriptions
			.forEach((x: any, i) => {
				try{
					x.unsubscribe()
				}
				catch(e){}

			})
			delete this.subscriptions
		}
	}

    logIn(devObj:{user:Array<string>,pass:Array<string>,zChildren:zChildren,type?:String,myChosen:Array<string>}){
        let {type,user,pass,zChildren,myChosen} = devObj
        let {http,ryber,renderer2} = this

        let myUser = zChildren[user[0]].innerText.item || zChildren[user[0]].element.value
        let myPass = zChildren[pass[0]].element.value

            of({})
            .pipe(
                finalize(()=>{
                    // change the path
                    ryber.appCO0.metadata.navigation.full.navigated = "true"
                    ryber.appCurrentNav = "/home"
                    //


                    // unlock the website
                    renderer2.removeClass(
                        document.body,"a_p_p_BodyOverFlowHidden"
                    )
                    myChosen
                    .forEach((z:any,k)=>{
                        zChildren[z].css.display = "none"
                    })
                    //
                })
            )
            .subscribe({
                next:(result:any)=>{


                    if(result.message === "allow user to proceed"){

                        // send the avatar metadata to the appropriate subject
                        ryber.appCO0.metadata.facebookLogin.current.next({
                            user:myUser,
                            avatar:result.avatar
                        })
                        //

                        // place the token and credentials in memory
                        ryber.appCO0.metadata.facebookLogin.credentials = {
                            token:result.token,
                            user:myUser
                        }
                        //


                        // reset the posts and listings as necessary
                        http.post(
                            env.facebook.url,
                            {
                                env :"resetTracks"
                            },
                            {
                                responseType:"text"
                            }
                        )
                        .subscribe((result:any)=>{

                        })
                        //
                    }
                },
                error:(err:HttpErrorResponse)=>{
                    console.log(err)
                }
            })



    }

}

