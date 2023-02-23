import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    PartnersComponent,
    CompaniesComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
})
export class CollectionsModule { }
