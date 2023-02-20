import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
//to implemnt lazy loading of the module, we specify relative path
//relative to the path we specified in the appRoutingModule
//so in this scenerio path will be empty string
const routes: Routes = [{path:'',component:ElementsHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
