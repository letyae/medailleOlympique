import { Component, OnInit, Input } from '@angular/core';
import { MedailleComponent } from '../medaille/medaille.component';
import { ActivatedRoute } from '@angular/router'; 
import {medailleOlympique} from '../model/medailleOlympique-model'
import {MedailleServices} from '../services/medailleService'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MedailleComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  @Input() medaille!: medailleOlympique;

  constructor(private medailleService: MedailleServices, private router: ActivatedRoute){}
 
  ngOnInit(): void {
    const paysId= +this.router.snapshot.params['id'];
    this.medaille=this.medailleService.getMedailleById(paysId);
  }
  
}