import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaysComponent} from '../pays/pays.component';
import { paysParticipant } from '../model/paysParticipant-model';
import { PaysServices } from '../services/paysServices';
@Component({
  selector: 'app-pays-list',
  standalone: true,
  imports: [CommonModule,PaysComponent],
  templateUrl: './pays-list.component.html',
  styleUrl: './pays-list.component.scss'
})
export class PaysListComponent implements OnInit {
  list_pays!: paysParticipant[];

  constructor(private paysService: PaysServices){}
  
  ngOnInit(): void {
      this.list_pays = this.paysService.getAllPays();
  }
}
