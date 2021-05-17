import { Component, OnInit, Input, ElementRef, } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

    @Input() options:any

    constructor(
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

}
