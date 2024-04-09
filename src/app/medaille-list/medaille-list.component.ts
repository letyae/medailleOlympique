import { Component, OnInit } from '@angular/core';
import { MedailleComponent } from '../medaille/medaille.component';
import { MedailleServices } from '../services/medailleService';
import { medailleOlympique } from '../model/medailleOlympique-model';
@Component({
  selector: 'app-medaille-list',
  standalone: true,
  imports: [MedailleComponent],
  templateUrl: './medaille-list.component.html',
  styleUrl: './medaille-list.component.scss'
})
export class MedailleListComponent implements OnInit {
  list_medaille!: medailleOlympique[];
  constructor(private medailleService: MedailleServices){}

  ngOnInit(): void {
    this.list_medaille=this.medailleService.getAllMedaille(); 
    const  one=this.list_medaille[0];
    console.log(one.nomAthlete);
    console.log(one.paysAthlete);
    console.log(one.urlMedaille);


  }
}