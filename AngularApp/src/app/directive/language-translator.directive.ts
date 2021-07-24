import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, ChangeDetectorRef, ɵɵsetComponentScope } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest, pipe } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy,navigationType } from '../customExports'
import { catchError, delay,distinctUntilKeyChanged,first,skip,take } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {ibmLanguages} from '../ibmLanguageLibrary'


@Directive({
    selector: '[appLanguageTranslator]'
})
export class LanguageTranslatorDirective {


    @Input() languageTranslator: any;
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

        this.extras = this.languageTranslator

        if (this.extras?.confirm === 'true' &&   this.extras?.type.includes("body")  ) {
            if(env.directive?.languageTranslator?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' languageTranslator ngOnInit fires on mount')
            let {ryber,extras,zChildren,subscriptions,http} = this
            let {co} = extras
            let {group,suffix}  = ryber[co].metadata.languageTranslator

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
                    if(x[1].extras?.appLanguageTranslator === undefined){
                        return
                    }
                    //

                    // start to organize the elements into groups
                        // for latch determine which duplicate it belongs to
                    let myGroup = x[1].extras.appLanguageTranslator?.group || "default"
                    let myType =  x[1].extras.appLanguageTranslator?.type || "default"
                    let deltaNodeGroup =  x[1].extras?.appDeltaNode?.group || x[1].extras.appLatch?.deltaNode?.group
                    // determine if there is a duplicate and which duplicate it belongs to
                    let count = 0
                    ryber[co].metadata.deltaNode.groups[deltaNodeGroup]?.deltas
                    .forEach((y:any,j)=>    {

                        let targetZSymbols = [x[0],x[1].extras.appLatch?.deltaNode?.zSymbol]

                        let included = y.some( ai => targetZSymbols.includes(ai) );
                        // console.log(included)
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
                // console.log(group)


                Object.entries(group)
                .forEach((x:any,i)=>{
                    let key = x[0]
                    let val = x[1]

                    let link = Array.from(val.types['link'] || [])
                    let text = Array.from(val.types['text'] || [])
                    let label = Array.from(val.types['label'] || [])

                    link
                    .forEach((y:any,j)=>{
                        // get the ibmLanguage corresponding object
                        zChildren[y].extras.appLanguageTranslator.ibmLanguage = ibmLanguages.list
                        .filter((z:any,k)=>{
                            return z.language ===  zChildren[y].extras.appLanguageTranslator.language
                        })[0]
                        // console.log(zChildren[y].extras.appLanguageTranslator.ibmLanguage)
                        //

                        // click event to change the object
                        let changeLanguage =fromEvent(zChildren[y].element,"click")
                        .subscribe((result:any)=>{

                            ryber.appCO0.metadata.ibmLanguage.current.next(zChildren[y].extras.appLanguageTranslator.ibmLanguage)
                        })
                        val.subscriptions.push(changeLanguage)
                        //
                    })

                    text
                    .forEach((y:any,j)=>{

                        let changeLanguage = ryber.appCO0.metadata.ibmLanguage.current
                        .pipe(distinctUntilKeyChanged("language"))
                        .subscribe((result:any)=>{
                            


                            http.post(
                                env.facebook.url,
                                {
                                    text:["i","ta"].includes(zChildren[y].bool) ? zChildren[y].element.placeholder : zChildren[y].innerText.item,
                                    source:zChildren[y].extras.appLanguageTranslator.ibmLanguage?.language || "en",
                                    target:result.language,
                                    // env:"list"
                                    env:"translate"
                                    // env:"dummy"
                                },
                                {
                                    responseType:"text"
                                }
                            )
                            .subscribe({
                                next:(result:string)=>{
                                    // modify the value

                                    let answer = JSON.parse(result)
                                    if(["i","ta"].includes(zChildren[y].bool)){
                                        zChildren[y].element.placeholder = answer.translations[0].translation
                                    }
                                    else {
                                        zChildren[y].innerText.item = answer.translations[0].translation
                                    }
                                    ref.detectChanges()
                                    //
                                },
                                error:(err:HttpErrorResponse)=>{
                                    // console.log("Error")
                                    // console.log(err)
                                }
                            })
                            zChildren[y].extras.appLanguageTranslator.ibmLanguage = result
                        })
                        val.subscriptions.push(changeLanguage)
                    })

                    label
                    .forEach((y:any,j)=>{

                        let changeLanguage = ryber.appCO0.metadata.ibmLanguage.current
                        .pipe(distinctUntilKeyChanged("language"))
                        .subscribe((result:any)=>{


                            let replacement = result.native_language_name + " ("+result.language.toUpperCase()+")"
                            if(["i","ta"].includes(zChildren[y].bool)){
                                zChildren[y].element.placeholder = replacement
                            }
                            else {
                                zChildren[y].innerText.item = replacement
                            }
                            ref.detectChanges()

                            zChildren[y].extras.appLanguageTranslator.ibmLanguage = result
                        })
                        val.subscriptions.push(changeLanguage)
                    })


                })


            })
            subscriptions.push(mainSubscription)
        }
    }

	ngOnDestroy() {
		if (this.extras?.confirm === 'true' ) {
            if(env.directive?.languageTranslator?.lifecycleHooks) console.log(this.extras.co + " " + this.extras.zSymbol+ ' languageTranslator ngOnDestroy fires on dismount')
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



