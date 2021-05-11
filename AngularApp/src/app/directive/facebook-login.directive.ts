


import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType, zChildren } from '../customExports'
import { catchError, delay,first,take } from 'rxjs/operators'
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
            let {ryber,extras,zChildren,subscriptions,renderer2,logIn} = this
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
                    let key = x[0]
                    let val = x[1]
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
                                zChildren
                            })
                        })
                        val.subscriptions.push(loginEvent)
                    })
                    //

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

    logIn(devObj:{user:Array<string>,pass:Array<string>,zChildren:zChildren,type?:String}){
        let {type,user,pass,zChildren} = devObj
        let {http,ryber,renderer2} = this

        http.post(
            env.facebook.url,
            {
                user:zChildren[user[0]].innerText.item || zChildren[user[0]].element.value ,
                pass:zChildren[pass[0]].element.value,
                env:"login"
            },
            {
                responseType:"text"
            }
        )
        .subscribe({
            next:(result:any)=>{
                if(result === "Allow user to proceed"){

                    // change the path
                    ryber.appCO0.metadata.navigation.full.navigated = "true"
                    ryber.appCurrentNav = "/home"
                    //

                    // unlock the website
                    renderer2.removeClass(
                        document.body,"a_p_p_BodyOverFlowHidden"
                    )
                    //

                    // reset the posts as necessary
                    http.post(
                        env.facebook.url,
                        {
                            env :"resetPostsTrack"
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

