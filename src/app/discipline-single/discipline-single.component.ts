import { Component, OnInit, Input } from '@angular/core';
import { DisciplineComponent } from '../discipline/discipline.component';
import { DisciplineSportive } from '../model/DisciplineSportive-model';
import { DisciplineServices } from '../services/disciplineService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-discipline-single',
  standalone: true,
  imports: [],
  templateUrl: './discipline-single.component.html',
  styleUrl: './discipline-single.component.scss'
})
export class DisciplineSingleComponent implements OnInit {
  @Input() discipline!: DisciplineSportive;

  constructor(private disciplineService: DisciplineServices, private router: ActivatedRoute){}
 
  ngOnInit(): void {
    const disciplineId= +this.router.snapshot.params['id'];
    this.discipline=this.disciplineService.getDisciplineById(disciplineId);
  }
}
