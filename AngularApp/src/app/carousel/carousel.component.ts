import { Component, OnInit,Input,ElementRef } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


    @Input() options:any
    constructor(
        public el:ElementRef
    ) { }

    ngOnInit(): void {
    }

}
