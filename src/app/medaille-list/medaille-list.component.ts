import { Component, OnInit } from '@angular/core';
import { MedailleComponent } from '../medaille/medaille.component';
import { MedailleServices } from '../services/medailleService';
import { medailleOlympique } from '../model/medailleOlympique-model';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-medaille-list',
  standalone: true,
  imports: [CommonModule,MedailleComponent],
  templateUrl: './medaille-list.component.html',
  styleUrl: './medaille-list.component.scss'
})
export class MedailleListComponent implements OnInit {
  list_medaille!: medailleOlympique[];
  constructor(private medailleService: MedailleServices){}

  ngOnInit(): void {
    this.list_medaille=this.medailleService.getAllMedaille(); 
    //const  one=this.list_medaille[1];
   // console.log("nom: "+one.nomAthlete);
   // console.log("pays: "+one.paysAthlete);
   // console.log("urlMedaille: "+one.urlMedaille);
  }
}