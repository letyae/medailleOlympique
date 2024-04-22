import { Component, Input } from '@angular/core';
import { DisciplineSportive } from '../model/DisciplineSportive-model';
import { DisciplineServices } from '../services/disciplineService';
@Component({
  selector: 'app-discipline',
  standalone: true,
  imports: [],
  templateUrl: './discipline.component.html',
  styleUrl: './discipline.component.scss'
})
export class DisciplineComponent {
  @Input() current_discipline!: DisciplineSportive;
  constructor(private disciplineService: DisciplineServices){}
  }