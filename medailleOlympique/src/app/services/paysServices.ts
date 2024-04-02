import { Injectable } from "@angular/core";
import { paysParticipant } from "../model/paysParticipant-model";
import { error } from "console";

@Injectable({
    providedIn:'root'
})
export class PaysServices{
    list_pays =[
        {
             id: 1,
             nom:  "France",
             codeIso:  "FR",
             comtinent: "Europe",
             nombreMedaille: 840
        },
        {
            id: 2,
            nom:  "England",
            codeIso:  "En",
            comtinent: "Europe",
            nombreMedaille: 776
       },
       {
        id: 3,
        nom:  "Italie",
        codeIso:  "ITA",
        comtinent: "Europe",
        nombreMedaille: 738
   },
    {
        id: 4,
        nom:  "Canada",
        codeIso:  "CAN",
        comtinent: "Amerique",
        nombreMedaille: 551
    }
    ]


    getAllPays():paysParticipant[]
    {
    return this.list_pays;
    }

    getPaysById(paysId: number): paysParticipant
    {
        const  pays = this.list_pays.find(pays => pays.id === paysId);
        if(pays){ 
        return pays;
        }else{
        throw new Error("Pays non trouvé");
        }
    }   
}