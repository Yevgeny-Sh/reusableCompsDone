import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
//once we go to the elements path, we invoke the loadchildren function,
// that will try to import that module dynamiclly, after its done (.then) it will return the elemnts module
const routes: Routes = [{path:'collections',loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)},{path:'elements',loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule)},{path:'',component:HomeComponentComponent},{path:'**',component:NotFoundComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
