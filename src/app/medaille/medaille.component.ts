import { Component,Input } from '@angular/core';
import {medailleOlympique} from '../model/medailleOlympique-model'
import {MedailleServices} from '../services/medailleService'

@Component({
  selector: 'app-medaille',
  standalone: true,
  imports: [],
  templateUrl: './medaille.component.html',
  styleUrl: './medaille.component.scss'
})
export class MedailleComponent {
@Input() current_medaille!: medailleOlympique;
constructor(private medailleService: MedailleServices){}
}