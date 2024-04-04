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
             continent: "Europe",
             storie: "",
             nombreMedaille: 840,
             urlFlag:"assets/Flag_of_french.jpeg"
        },
        {
            id: 2,
            nom:  "England",
            codeIso:  "En",
            continent: "Europe",
            storie: "",
            nombreMedaille: 776,
            urlFlag:"assets/Flag_of_England.jpg"
       },
       {
        id: 3,
        nom:  "Italie",
        codeIso:  "ITA",
        continent: "Europe",
        storie: "",
        nombreMedaille: 738,
        urlFlag:"assets/Flag_of_Italy.jpg"
   },
    {
        id: 4,
        nom:  "Canada",
        codeIso:  "CAN",
        continent: "Amerique",
        storie: "",
        nombreMedaille: 551,
        urlFlag:""
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