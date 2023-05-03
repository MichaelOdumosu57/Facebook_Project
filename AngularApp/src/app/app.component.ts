import { Component, OnInit, OnDestroy, ViewChildren, Inject, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Renderer2, QueryList } from '@angular/core';
import { RyberService } from './ryber.service';
import { fromEvent, Subject, Observable, of, Subscription, interval, ReplaySubject, BehaviorSubject, combineLatest, merge } from 'rxjs';
import { eventDispatcher, esInit, coInit } from './customExports'
import { catchError, take, timeout, debounceTime, tap, first,delay } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { environment as env} from 'src/environments/environment';
import website from './website';



declare global {
    interface Window { Modernizr: any;createMap:any }
    // not let or else local to this file
    let gapi: any
    let google:any
    let Modernizr: any
    let SignaturePad: any
    let seeeb: any
    let faker: any
    let Pikaday: any

    // globals for webRTC Lab
    let localConnection :any
    let remoteConnection :any
    let room:any
    let io:any
    let stream:any
    let adapter:any
    let buf:any
    //

    // globals for web vitals lab
    let getCLS:any
    let getFID:any
    let getLCP:any
	//

	// globals for gsap
	let gsap:any
	//

	// globals for randomTextGenerator
	let RandomTextGenerator
	//

    //globals for vanillaTilt
    let  VanillaTilt
    //
}

@Component({
    selector: 'app-root',
    templateUrl:    './app.component.html',
    // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef,
    ) { }

    title = 'Judima';
    CO$: Subscription
    subscriptions:Array<Subscription> = []
    @ViewChildren('myTemp', {read:ElementRef}) templateMyComponents: QueryList<ElementRef>;


    ngOnInit() {
        alert(`Just Click the Login Button
        `)
        if (env.component.app.lifecycleHooks) {console.log('app ngOnInit fires on mount ')}
        let {ryber,subscriptions,ref} = this
		ryber.ref = (()=>{
			return ref
		})()




        /* App Setup*/
        esInit(ryber, ryber.appCO0.metadata.ES)


        this.CO$ = merge(
            ...this.ryber.appCO0.metadata.CO.map((x, i) => {
                return this.ryber[x.valueOf()]
            })
        )
        .subscribe((coArray: any) => {
            coInit(
                this.ryber,
                coArray,
                ((devObj) => {
                    let { co } = devObj

                    // dev additions
                    if(["homeContent","myMarket","findFriends"].includes(co.quantity[1][1].signature)){
                        co.quantity[0][0].ngCss[0][0]["z-index"] += 2
                    }

                    //
                    co.metadata.judima = {
                        desktop:{
                            stack:{
                                keep:null
                            },
                            xContain:{
                                align:null
                            }
                        },
                        init:"false"
                    }
					co.metadata.board = {}
                    co.metadata.formData = {}
                    co.metadata.refresh = {}
                    co.metadata.latch = {
                        updateZChild : new ReplaySubject<any>(),
                        zChild:{},
                        falseDestroy:[],
                        display:{
                            suffix:"display_",
                            deltaNode:{}
                        }
					}
                    co.metadata.deltaNode = {
						updateZChild : new Subject<any>(),
						groups:{},
						current:null,
						component:{
							confirm:"false"
						},
                        falseDestroy:[]

                    }
                    co.metadata.section = {
                        mediaQuery:null
                    }
                    co.metadata.navigation ={
                        groups:{},
                    }
					co.metadata.nest= {
						groups:{}
					}
                    co.metadata.agGrid = {
                        zSymbol: new Subject<any>(),
                    }
                    // I rather use group than groups the extra s can be misleading
                    co.metadata.templateDirective = {
                        group:{},
                        suffix:"_tD_"
                    }
                    co.metadata.visible = {
                        group:{},
                        suffix:"_vI_"
                    }
                    co.metadata.vanillaTilt = {
                        group:{},
                        suffix:"_vT_"
                    }
                    co.metadata.components = {
                        group:{},
                        suffix:"_vT_"
                    }


                    // dev additions
                    co.metadata.languageTranslator = {
                        group:{},
                        suffix:"_lT_"
                    }
                    co.metadata.facebookLogin = {
                        group:{},
                        suffix:"_fL_"
                    }
                    co.metadata.carousel = {
                        group:{},
                        suffix:"_cL_"
                    }
                    co.metadata.homeMenu = {
                        group:{},
                        suffix:"_hM_"
                    }

                    //
                    co.metadata.zChildrenSubject = new Subject<any>()
                    .pipe(
                        tap((val) => {
							co.metadata.zChildren = val.directivesZChild
							co.metadata.templateMyElements = val.templateMyElements
							co.metadata.ref = val.ref
                            co.metadata.zChildren$ = of(val.directivesZChild)
                        }),
                    )
                    co.metadata.ngAfterViewInitFinished = new Subject<any>()
                })
            )
        })
        subscriptions.push(this.CO$)

        if (this.ryber.appReloaded === 'true') {


            this.ryber.appCurrentNav = ryber.appCO0.metadata.navigation.full.startURL


        }

        subscriptions.push(
            this.ryber.appViewComplete.subscribe(() => {


            if (window.name === '') {


                window.name = '/'


            }


            if (this.ryber.appReloaded !== 'true') {


                window.name = this.ryber.appCurrentNav


            }


            // async the navigation
            if(ryber.appCO0.metadata.navigation.type === "full"){
                if (
                    ryber.appViewNavigation.routes[ryber.appCurrentNav].size ===ryber.appViewNavigation.routeLengths[ryber.appCurrentNav]
                ) {



                    this.routeDispatch({
                        arr: Array.from(ryber.appViewNavigation.routes[ryber.appCurrentNav]).sort(),
                    })


                    // console.log(ryber.appViewNavigation.routes)
                }
            }

            else if(ryber.appCO0.metadata.navigation.type === "SPA"){
                this.routeDispatch({
                    arr: [...this.ryber["formCO"]].sort(),
                })
            }
            //




            })
        )

	}

    routeDispatch(
        devObj: {
            arr: Array<any>
        }
    ) {
        let { arr } = devObj
        arr = arr.sort()
        this.ryber.appViewCompleteArray = this.ryber.appViewCompleteArray.sort()

        if (
            arr
                .filter((x, i) => {
                    return this.ryber.appViewCompleteArray[i] !== x
                })
                .length === 0 &&
            arr.length === this.ryber.appViewCompleteArray.length
        ) {



            // window.onload  sometimes the elements dont resize prorply, dispatch when the window is fully loaded
            eventDispatcher({
                element: window,
                event: 'resize'
            })


            this.ryber.appViewCompleteArray = []
            // not perfect find a better way to wait for the route to initalize before modifying this value

            //


            if (this.ryber.appReloaded === 'true') {


                this.ryber.appReloaded = 'false'


            }


        }

	}

	ngAfterViewInit(){
        if (env.component.app.lifecycleHooks) {console.log('app ngAfterViewInit fires on mount ')}
		let {templateMyComponents,ryber,subscriptions} = this


        // listen for route changes
        subscriptions.push(
            templateMyComponents.changes
            .subscribe((result:any)=>{
                ryber.appCO0.metadata.navigation.full.navigated = "false"
            })
        )
        //
	}

    ngOnDestroy() {
        if (env.component.app.lifecycleHooks){ console.log('app ngOnDestroy fires on dismount')}
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




