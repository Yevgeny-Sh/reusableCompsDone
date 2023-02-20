import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule,//this is not found and should be last

    //lazy loading: we deleted all refrences to ElementsModule first, to implement lazy loading
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
