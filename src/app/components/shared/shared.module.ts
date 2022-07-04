import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "../login/login.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        LoginComponent
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }