import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { PaysComponent } from './pays/pays.component';
import { PaysListComponent } from './pays-list/pays-list.component';
import { PaysSingleComponent } from './pays-single/pays-single.component';
import { MedailleListComponent } from './medaille-list/medaille-list.component';
import { DetailComponent } from './detail/detail.component';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineSingleComponent } from './discipline-single/discipline-single.component';
    
export const routes: Routes = [
    {path:'alldiscipline', component: DisciplineListComponent}, 
    {path:'alldiscipline/:id', component: DisciplineSingleComponent},
    {path:'allmedaille', component: MedailleListComponent}, 
    {path:'allmedaille/:id', component: DetailComponent},
    {path:'allpays', component: PaysListComponent},
    {path:'allpays/:id', component: PaysSingleComponent},
    {path:'', component: LandingpageComponent}
];
