import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy, navigationType } from '../customExports'
import { catchError, delay, first, take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appCarousel]'
})
export class CarouselDirective {


    @Input() carousel: any;
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
        this.extras = this.carousel

        if (this.extras?.confirm === 'true' && this.extras?.type.includes("body")) {
            if (env.directive?.carousel?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol + ' carousel ngOnInit fires on mount')
            let { ryber, extras, zChildren, subscriptions,renderer2 } = this
            let { co } = extras
            let { group, suffix } = ryber[co].metadata.carousel

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
                    // Object.entries(group)
                    // .forEach((x:any,i)=>{
                    //     let key = x[0]
                    //     let val = x[1]
                    //     val.subscriptions?.forEach((y,j)=>{
                    //         y.unsubscribe()
                    //     })
                    // })
                    group = {}
                    //

                    Object.entries(zChildren)
                    .slice(2)
                    .forEach((x: any, i) => {


                        // if an element doesnt belong it doesnt belong
                        if (x[1].extras?.appCarousel === undefined) {
                            return
                        }
                        //

                        // start to organize the elements into groups
                        // for latch determine which duplicate it belongs to
                        let myGroup = x[1].extras.appCarousel?.group || "default"
                        let myType: Array<string> = x[1].extras.appCarousel?.type || ["default"]
                        let deltaNodeGroup = x[1].extras?.appDeltaNode?.group || x[1].extras.appLatch?.deltaNode?.group
                        // determine if there is a duplicate and which duplicate it belongs to
                        let count = 0
                        if (x[1].extras.appCarousel?.duplicateIgnore !== "true") {
                            ryber[co].metadata.deltaNode.groups[deltaNodeGroup]?.deltas
                            .forEach((y: any, j) => {

                                let targetZSymbols = [x[0], x[1].extras.appLatch?.deltaNode?.zSymbol]

                                let included = y.some(ai => targetZSymbols.includes(ai));
                                // console.log(included)
                                if (included) {
                                    count = j + 1
                                }
                            })
                        }
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

                        let target:any = Array.from(val.types['target'] || [])
                        let card = Array.from(val.types['card'] || [])

                        
                    })

                })
            subscriptions.push(mainSubscription)

        }
    }


    ngOnDestroy() {
        if (this.extras?.confirm === 'true') {
            if (env.directive?.carousel?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol + ' carousel ngOnDestroy fires on dismount')
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

