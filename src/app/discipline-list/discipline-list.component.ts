import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DisciplineComponent } from '../discipline/discipline.component';
import { DisciplineSportive } from '../model/DisciplineSportive-model';
import {DisciplineServices} from '../services/disciplineService';
@Component({
  selector: 'app-discipline-list',
  standalone: true,
  imports: [CommonModule, DisciplineComponent],
  templateUrl: './discipline-list.component.html',
  styleUrl: './discipline-list.component.scss'
})

export class DisciplineListComponent {
  list_discipline!: DisciplineSportive[];
  constructor(private disciplineService: DisciplineServices){}

  ngOnInit(): void {
    this.list_discipline =this.disciplineService.getAllDisciplines(); 
  }
}
