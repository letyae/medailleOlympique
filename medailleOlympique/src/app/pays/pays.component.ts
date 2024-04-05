import { Component, Input, OnInit } from '@angular/core';
import { paysParticipant } from '../model/paysParticipant-model';
import { PaysServices } from '../services/paysServices';
import {CommonModule} from  '@angular/common';
@Component({
  selector: 'app-pays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pays.component.html',
  styleUrl: './pays.component.scss'
})
export class PaysComponent {
  @Input() pays!: paysParticipant;

  constructor(private paysService: PaysServices ){}
/** 
  ngOnInit(): void {
    const paysId= this.router.snapshot.params['id'];
    this.pays=this.paysService.getPaysById(2);
  } */

}