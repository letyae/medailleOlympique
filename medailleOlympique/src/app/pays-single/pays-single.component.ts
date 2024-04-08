import { Component, OnInit, Input } from '@angular/core';
import { PaysComponent } from '../pays/pays.component';
import { PaysServices } from '../services/paysServices';
import { ActivatedRoute } from '@angular/router'; 
import {paysParticipant} from   '../model/paysParticipant-model'

@Component({
  selector: 'app-pays-single',
  standalone: true,
  imports: [PaysComponent],
  templateUrl: './pays-single.component.html',
  styleUrl: './pays-single.component.scss'
})
export class PaysSingleComponent implements OnInit { 
  @Input() pays!: paysParticipant;

  constructor(private paysService: PaysServices, private router: ActivatedRoute ){}
 
    ngOnInit(): void {
      const paysId= +this.router.snapshot.params['id'];
      this.pays=this.paysService.getPaysById(paysId);
    }
}