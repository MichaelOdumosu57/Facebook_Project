import { Component, OnInit, Input } from '@angular/core';
import { iif,of } from 'rxjs';
import { RyberService } from '../ryber.service';
import { environment as env } from 'src/environments/environment';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

    @Input() options:any
    constructor(
        public ryber: RyberService,
    ) { }

    ngOnInit(): void {

        let styleDefaults =  {position:"static"}
        if(this.options.style === undefined){
            this.options.style = styleDefaults
        }
        else{
            Object.assign(this.options.style,styleDefaults)
        }
    }


    profileCard ={
        defaultPic:(devObj)=>{
            let {options} = this
            try {
                options.pic.src = options?.alt || mediaPrefix({
                    media:'friends/' + ['user.png','uae.png'][Math.round(Math.random())]
                })
            }
            catch (error) {
                options.pic = {
                    src:options?.alt || mediaPrefix({
                        media:'friends/' + ['user.png','uae.png'][Math.round(Math.random())]
                    })
                }
            }
        }
    }

    dropDown = {
        onChange:(event)=>{
            let {ryber,options}= this
            let childFn = options.options
            .filter((x:any,i)=>{
                return x.name ===  event.value.name
            })[0].onChange || options.items.container.onChange

            if(childFn){
                if(event.value.name === "Log Out"){

                }

                iif(
                    ()=> event.value.name === "Log Out",
                    ryber.http.post(
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
                    ),
                    of({})
                )
                .subscribe({
                    next:()=>{
                        childFn({ryber,option:event.value})
                    }
                })

            }
        }
    }


}
