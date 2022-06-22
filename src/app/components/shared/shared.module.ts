import { NgModule } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }