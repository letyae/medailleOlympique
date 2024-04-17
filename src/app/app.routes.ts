import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { PaysComponent } from './pays/pays.component';
import { PaysListComponent } from './pays-list/pays-list.component';
import { PaysSingleComponent } from './pays-single/pays-single.component';
import { MedailleListComponent } from './medaille-list/medaille-list.component';
import { DetailComponent } from './detail/detail.component';
    
export const routes: Routes = [
    {path:'allmedaille', component: MedailleListComponent}, 
    {path:'allmedaille/:id', component: DetailComponent},
    {path:'allpays', component: PaysListComponent},
    {path:'allpays/:id', component: PaysSingleComponent},
    {path:'', component: LandingpageComponent}
];