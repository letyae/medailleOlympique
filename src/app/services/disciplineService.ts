import { Injectable } from "@angular/core";
import { DisciplineSportive } from "../model/DisciplineSportive-model";
import { error } from "console";

@Injectable({
    providedIn:'root'
})
export class DisciplineServices{
    list_discipline =[
        {
          id: 1,
          nom: "Boxe",
          type: "",
          popularite: "",
          histoire: ""
        },
         {
            id: 2,
            nom: "Natation",
            type: "",
            popularite: "",
            histoire: ""
        },
    ];

    getAllDisciplines():DisciplineSportive[]
    {
        return this.list_discipline ;
    }

    getDisciplineById(disciplineId: number): DisciplineSportive
    { 
        const  discipline = this.list_discipline.find(discipline => discipline.id === disciplineId);
        if(discipline){ 
        return discipline;
        }else{
        throw new Error("Discipline non trouvé");
        }
    } 

}