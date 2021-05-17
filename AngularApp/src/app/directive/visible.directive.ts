import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy, navigationType,zDirectiveGroup } from '../customExports'
import { catchError, delay, distinctUntilChanged, distinctUntilKeyChanged, first, take,skip } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appVisible]'
})
export class VisibleDirective {


    @Input() visible: any;
    extras: any;
    zChildren: any;
    subscriptions: Array<Subscription> = []
    group: any;
    ref: ChangeDetectorRef

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer2: Renderer2,
        private ryber: RyberService
    ) { }





    ngOnInit() {
        this.extras = this.visible

        if (this.extras?.confirm === 'true' && this.extras?.type.includes("body")) {
            if (env.directive?.visible?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol + ' VisibleDirective ngOnInit fires on mount')
            let { ryber, extras, zChildren, subscriptions } = this
            let { co } = extras
            let { group, suffix } = ryber[co].metadata.visible

            // detects navigation
            let action: any = navigationType({
                type: ["full"],
                fn: () => {
                    if (
                        ryber.appCO0.metadata.navigation.full.navigated === "true" &&
                        ryber[co].metadata.judima.init === "true"
                    ) {
                        return "return"
                    }
                },
                ryber
            })
            //



            let mainSubscription =
                ryber[co].metadata.zChildrenSubject
                .subscribe((result: any) => {
                    zChildren = ryber[co].metadata.zChildren
                    let ref = result.ref || this.ref


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
                        .forEach((x: any, i) => {


                            // if an element doesnt belong it doesnt belong
                            if (x[1].extras?.appVisible === undefined) {
                                return
                            }
                            //

                            // start to organize the elements into groups
                            // for latch determine which duplicate it belongs to
                            let myGroup = x[1].extras.appVisible?.group || "default"
                            let myType: Array<string> = x[1].extras.appVisible?.type || ["default"]
                            let deltaNodeGroup = x[1].extras?.appDeltaNode?.group || x[1].extras.appLatch?.deltaNode?.group
                            // determine if there is a duplicate and which duplicate it belongs to
                            let count = 0
                            ryber[co].metadata.deltaNode.groups[deltaNodeGroup]?.deltas
                                .forEach((y: any, j) => {

                                    let targetZSymbols = [x[0], x[1].extras.appLatch?.deltaNode?.zSymbol]

                                    let included = y.some(ai => targetZSymbols.includes(ai));
                                    // console.log(included)
                                    if (included) {
                                        count = j + 1
                                    }
                                })
                            //
                            myGroup = myGroup.split(suffix + count)[0] + suffix + count
                            if (group[myGroup] === undefined) {
                                group[myGroup] = {

                                    deltaNode: {},
                                    types: {},
                                    suffix,
                                    count,
                                    subscriptions: []
                                }

                            }

                            // organize by type
                            myType
                            .forEach((y: any, i) => {
                                if (group[myGroup].types[y] === undefined) {
                                    group[myGroup].types[y] = new Set()
                                }
                                group[myGroup].types[y].add(x[0])
                            })
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

                        //groupType === click
                            let clickTarget = Array.from(val.types['clickTarget'] || [])
                            let clickPart = Array.from(val.types['clickPart'] || [])

                            // toggle show/hide of clickParts
                            clickTarget
                            .forEach((y:any,j)=>{

                                let toggle = fromEvent(zChildren[y].element,"click")
                                .subscribe((result:any)=>{

                                    clickPart
                                    .forEach((z:any,k)=>{
                                        zChildren[z].css.display = zChildren[z].css.display === "none" ? "block" : "none"
                                    })
                                    ref.detectChanges()
                                })
                                val.subscriptions.push(toggle)
                            })
                            //

                        //

                        // groupType == section
                            let sectionDesktop = Array.from(val.types['sectionDesktop'] || [])
                            let sectionMobile =  Array.from(val.types['sectionMobile'] || [])

                            // give all a display object
                            ;[...sectionMobile,...sectionDesktop]
                            .forEach((y:any,j)=>{
                                zChildren[y].extras.appVisible.display = {
                                    desktop:{},
                                    mobile:{}
                                }
                            })

                            // show on desktop
                            sectionDesktop
                            .forEach((y:any,j)=>{

                                // do something when navigation happens
                                zChildren[y].extras.appVisible.display.desktop = {
                                    on:zChildren[y].css.display || "block",
                                    off:"none",
                                    onSet:"false",
                                    offSet:"false"
                                }

                                //
                                let mediaQueryEvent = ryber.appCO0.metadata.ryber.sectionDefault.app.width.mediaQuerySubject
                                .pipe(delay(10),skip(1),distinctUntilKeyChanged("media"))
                                .subscribe((result:any)=>{
                                    if(result.media === "desktop"){


                                        zChildren[y].css.display =zChildren[y].extras.appVisible.display.desktop.on || "block"
                                        zChildren[y].extras.appVisible.display.desktop.onSet = "true"

                                    }
                                    else{


                                        if(zChildren[y].extras.appVisible.display.desktop.onSet === "true"){
                                            zChildren[y].extras.appVisible.display.desktop.on = zChildren[y].css.display
                                            zChildren[y].css.display = zChildren[y].extras.appVisible.display.desktop.off
                                        }
                                        else {
                                            zChildren[y].css.display = zChildren[y].extras.appVisible.display.desktop.off
                                        }
                                        // zChildren[y].css.display =
                                        // zChildren[y].extras.appVisible.display.desktop.offSet === "true" ?
                                        // zChildren[y].extras.appVisible.display.desktop.off : "none"

                                        zChildren[y].extras.appVisible.display.desktop.offSet = "true"
                                    }
                                    ref.detectChanges()
                                })

                                val.subscriptions.push(mediaQueryEvent)

                            })
                            //

                            // show on mobile
                            sectionMobile
                            .forEach((y:any,j)=>{

                                //
                                zChildren[y].extras.appVisible.display.mobile ={
                                    on:zChildren[y].css.display || "block",
                                    off:"none",
                                    onSet:"false",
                                    offSet:"false"
                                }
                                //
                                let mediaQueryEvent = ryber.appCO0.metadata.ryber.sectionDefault.app.width.mediaQuerySubject
                                .pipe(skip(1),distinctUntilKeyChanged("media"))
                                .subscribe((result:any)=>{
                                    if(result.media === "mobile"){


                                        zChildren[y].css.display =zChildren[y].extras.appVisible.display.desktop.on || "block"
                                        zChildren[y].extras.appVisible.display.mobile.onSet = "true"

                                    }
                                    else{


                                        if(zChildren[y].extras.appVisible.display.mobile.onSet === "true"){
                                            zChildren[y].extras.appVisible.display.mobile.on = zChildren[y].css.display
                                            zChildren[y].css.display = zChildren[y].extras.appVisible.display.mobile.off
                                        }
                                        else {
                                            zChildren[y].css.display = zChildren[y].extras.appVisible.display.mobile.off
                                        }
                                        // zChildren[y].css.display =
                                        // zChildren[y].extras.appVisible.display.desktop.offSet === "true" ?
                                        // zChildren[y].extras.appVisible.display.desktop.off : "none"

                                        zChildren[y].extras.appVisible.display.mobile.offSet = "true"
                                    }
                                    ref.detectChanges()
                                })
                                val.subscriptions.push(mediaQueryEvent)

                            })
                            //

                        //


                        subscriptions.push(...val.subscriptions)

                    })


                })
            subscriptions.push(mainSubscription)

        }
    }


    ngOnDestroy() {
        if (this.extras?.confirm === 'true') {
            if (env.directive?.visible?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol + ' visible ngOnDestroy fires on dismount')
            this.subscriptions
                .forEach((x: any, i) => {
                    try {
                        x.unsubscribe()
                    }
                    catch (e) { }

                })
            delete this.subscriptions
        }
    }

}

