


import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType } from '../customExports'
import { catchError, delay,first,take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
            let {ryber,extras,zChildren,subscriptions} = this
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
                    let chosenOverlay = Array.from(val.types["chosenOverlay"] || [])

                    // attach the img and the name
                    loginName
                    .forEach((y:any,j)=>{
                        zChildren[chosenName[j]].innerText.item  =zChildren[y].innerText.item
                    })
                    loginImg
                    .forEach((y:any,j)=>{
                        zChildren[chosenImg[j]].element.src  =zChildren[y].extras.extend.src
                    })
                    //

                    // setup the click events
                    ;[[...loginName,...loginImg]]
                    .forEach((y:any,j)=>{
                        if(y.length === 0){
                            return
                        }
                        let showChosen = fromEvent([zChildren[y[0]].element,zChildren[y[1]].element,],"click")
                        .subscribe((result:any)=>{
                            ;[...chosen,...chosenImg,...chosenName,...chosenOverlay]
                            .forEach((z:any,k)=>{
                                zChildren[z].css.display = zChildren[z].cssDefault.display || "block"
                            })
                        })
                        val.subscriptions.push(showChosen)
                    })

                    chosenOverlay
                    .forEach((y:any,j)=>{
                        let hideChosen = fromEvent(zChildren[y].element,"click")
                        .subscribe((result:any)=>{
                            ;[...chosen,...chosenImg,...chosenName,...chosenOverlay]
                            .forEach((z:any,k)=>{
                                zChildren[z].css.display = "none"
                            })
                        })
                        val.subscriptions.push(hideChosen)
                    })

                    subscriptions.push(...val.subscriptions)
                    //
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

}

