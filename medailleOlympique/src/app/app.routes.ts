import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { PaysComponent } from './pays/pays.component';
import { PaysListComponent } from './pays-list/pays-list.component';

export const routes: Routes = [
    {path:'allpays', component: PaysListComponent},
    {path:'pays', component: PaysComponent},
    {path:'', component: LandingpageComponent}
];
