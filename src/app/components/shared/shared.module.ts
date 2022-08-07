import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "../login/login.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PersonalCabinetComponent } from "../personal-cabinet/personal-cabinet.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        PersonalCabinetComponent
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