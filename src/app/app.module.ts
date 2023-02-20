import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from "./elements/elements.module";
import { CollectionsModule } from './collections/collections.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NotFoundComponentComponent
  ],
  //the order of the imports matters!!
  //home first, not found last
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    AppRoutingModule,//this is not found and should be last
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
