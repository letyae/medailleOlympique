import { Injectable } from "@angular/core";
import { medailleOlympique } from "../model/medailleOlympique-model";
import { error } from "console";

@Injectable({
    providedIn:'root'
})
export class MedailleServices{
    list_medaille =[
        {    id: 1, 
             discipline:  "Karatéka",
             type:  "Contact",
             paysAthlete: "France",
             nomAthlete: "Steven Da Costa",
             urlMedaille:"assets/or2.jpg",
             genre:"Homme",
             annee:2012
        },
        {
            id: 2,
            discipline:  "boxe",
            type:  "Contact",
            paysAthlete: "France",
            nomAthlete: "Djamili-Dini Aboudou Moindze",
            urlMedaille:"assets/or1.jpg",
            genre:"Homme",
            annee:2012
       },
       {
        id: 3,
        discipline: "Judo",
        type:  "Contact",
        paysAthlete: "France",
        nomAthlete: "Teddy Rinner",
        urlMedaille:"assets/argent.jpg",
        genre:"Homme",
        annee:2020
   },
        {
            id: 4,
            discipline: "Judo",
            type: "Contact",
            paysAthlete: "France",
            nomAthlete: "Clarisse Agbegninou",
            urlMedaille:"assets/or3.png",
            genre:"Dame",
            annee:2020
       },
       {
        id: 5,
        discipline: "Natation",
        type: "Individuel",
        paysAthlete: "France",
        nomAthlete: "Leon Marchand",
        urlMedaille:"assets/or3.png",
        genre:"Homme",
        annee:2020
   },
   {
    id: 6,
    discipline:  "Natation",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Dame",
    annee:2012
},
{
    id: 7,
    discipline:  "Athletisme",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Dame",
    annee:2012
},
{
    id: 8,
    discipline:  "Saut à la perche",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Renaud Lavillenie",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Homme",
    annee:2020
},

{
    id: 9,
    discipline:  "Karatéka",
    type:  "Contact",
    paysAthlete: "Angleterre",
    nomAthlete: "Steven Da Costa",
    urlMedaille:"assets/or2.jpg",
    genre:"Homme",
    annee:2012
},
{
   id: 10,
   discipline:  "boxe",
   type:  "Contact",
   paysAthlete: "Angleterre",
   nomAthlete: "Djamili-Dini Aboudou Moindze",
   urlMedaille:"assets/or1.jpg",
   genre:"Homme",
   annee:2012
},
{
id: 11,
discipline: "Judo",
type:  "Contact",
paysAthlete: "Angleterre",
nomAthlete: "Teddy Rinner",
urlMedaille:"assets/argent.jpg",
genre:"Homme",
annee:2020
},
{
   id: 12,
   discipline:  "Judo",
   type:  "Contact",
   paysAthlete: "Angleterre",
   nomAthlete: "Clarisse Agbegninou",
   urlMedaille:"assets/or3.png",
   genre:"Dame",
   annee:2020
},
{
id: 13,
discipline: "Natation",
type: "Individuel",
paysAthlete: "Angleterre",
nomAthlete: "Leon Marchand",
urlMedaille:"assets/or3.png",
genre:"Homme",
annee:2020
},
{
id: 14,
discipline:  "Natation",
type:  "Individuel",
paysAthlete: "Angleterre",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012
},
{
id: 15,
discipline:  "Athletisme",
type:  "Individuel",
paysAthlete: "Angleterre",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012
},
{
    id: 16,
    discipline:  "Saut à la perche",
    type:  "Individuel",
    paysAthlete: "Angleterre",
    nomAthlete: "Renaud Lavillenie",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Homme",
    annee:2020
}
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
