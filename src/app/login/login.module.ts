import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { LoginComponent } from "./Login.component"; // Import all components that will be used in the lazy loaded module
import { LoginRoutingModule } from "./Login.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [LoginComponent], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class LoginModule { }