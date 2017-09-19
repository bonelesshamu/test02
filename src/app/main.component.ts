import {Component} from "@angular/core";
import {AppComponent} from "./app.component";

export const ROUTES = [
    {path: "", component: AppComponent}
]

@Component({
    selector: "body",
    template: "<router-outlet></router-outlet>"
})
export class MainComponent {

    constructor() {
        console.log("@@@constructor");
    }

    ngOnChanges() {
        console.log("@@@ngOnChanges");
    }

    ngOnInit() {
        console.log("@@@ngOnInit");
    }

    ngDoCheck() {
        console.log("@@@ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("@@@ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log("@@@ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("@@@ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("@@@ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("@@@ngOnDestroy");
    }

}
