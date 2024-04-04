import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { PaysComponent } from './pays/pays.component';

export const routes: Routes = [
    {path:'pays', component: PaysComponent},
    {path:'', component: LandingpageComponent}
];
