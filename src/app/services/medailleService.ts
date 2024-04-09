import { Injectable } from "@angular/core";
import { medailleOlympique } from "../model/medailleOlympique-model";
import { error } from "console";

@Injectable({
    providedIn:'root'
})
export class MedailleServices{
    list_medaille =[
        {
             id: 1,
             discipline:  "Karatéka",
             type:  "Contact",
             paysAthlete: "France",
             nomAthlete: "Akakpo",
             urlMedaille:"assets/Flag_of_french.jpeg"
        },
        {
            id: 2,
            discipline:  "Judo",
            type:  "Contact",
            paysAthlete: "France",
            nomAthlete: "Akakpo",
            urlMedaille:"assets/Flag_of_french.jpeg"
       },
    ]


    getAllMedaille():medailleOlympique[]
    {
    return this.list_medaille;
    }

    getMedailleById(medailleId: number): medailleOlympique
    { 
        const  medaille = this.list_medaille.find(medaille => medaille.id=== medailleId);
        if(medaille){ 
        return medaille;
        }else{
        throw new Error("Medaille non trouvé");
        }
    } 
}
   