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
             urlMedaille:"assets/or1.jpg",
             genre:"Homme",
             annee:2012,
             description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
              },
        {
            id: 2,
            discipline:  "boxe",
            type:  "Contact",
            paysAthlete: "France",
            nomAthlete: "Djamili-Dini Aboudou Moindze",
            urlMedaille:"assets/or1.jpg",
            genre:"Homme",
            annee:2012,
            description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
          },
       {
        id: 3,
        discipline: "Judo",
        type:  "Contact",
        paysAthlete: "France",
        nomAthlete: "Teddy Rinner",
        urlMedaille:"assets/or1.jpg",
        genre:"Homme",
        annee:2020,
        description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
        {
            id: 4,
            discipline: "Judo",
            type: "Contact",
            paysAthlete: "France",
            nomAthlete: "Clarisse Agbegninou",
            urlMedaille:"assets/or1.jpg", 
            genre:"Dame",
            annee:2020,
            description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
        },
       {
        id: 5,
        discipline: "Natation",
        type: "Individuel",
        paysAthlete: "France",
        nomAthlete: "Leon Marchand",
        urlMedaille:"assets/or1.jpg",
        genre:"Homme",
        annee:2020,
        description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
    },
   {
    id: 6,
    discipline:  "Natation",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/or1.jpg",
    genre:"Dame",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
    id: 7,
    discipline:  "Athletisme",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/or1.jpg",
    genre:"Dame",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
    id: 8,
    discipline:  "Saut à la perche",
    type:  "Individuel",
    paysAthlete: "France",
    nomAthlete: "Renaud Lavillenie",
    urlMedaille:"assets/argent4.png",
    genre:"Homme",
    annee:2020,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},

{
    id: 9,
    discipline:  "Karatéka",
    type:  "Contact",
    paysAthlete: "England",
    nomAthlete: "Steven Da Costa",
    urlMedaille:"assets/argent4.png",
    genre:"Homme",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
   id: 10,
   discipline:  "boxe",
   type:  "Contact",
   paysAthlete: "England",
   nomAthlete: "Djamili-Dini Aboudou Moindze",
   urlMedaille:"assets/argent4.png",
   genre:"Homme",
   annee:2012,
   description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 11,
discipline: "Judo",
type:  "Contact",
paysAthlete: "England",
nomAthlete: "Teddy Rinner",
urlMedaille:"assets/argent4.png",
genre:"Homme",
annee:2020,
description: "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
   id: 12,
   discipline:  "Judo",
   type:  "Contact",
   paysAthlete: "England",
   nomAthlete: "Clarisse Agbegninou",
   urlMedaille:"assets/or1.jpg",
   genre:"Dame",
   annee:2020,
   description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
    id: 13,
    discipline: "Natation",
    type: "Individuel",
    paysAthlete: "England",
    nomAthlete: "Leon Marchand",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Homme",
    annee:2020,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
    {
    id: 14,
    discipline:  "Natation",
    type:  "Individuel",
    paysAthlete: "England",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Dame",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
    id: 15,
    discipline:  "Athletisme",
    type:  "Individuel",
    paysAthlete: "England",
    nomAthlete: "Marie Wattel",
    urlMedaille:"assets/bronze1.jpg",
    genre:"Dame",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
    id: 16,
    discipline:  "Saut à la perche",
    type:  "Individuel",
    paysAthlete: "England",
    nomAthlete: "Renaud Lavillenie",
    urlMedaille:"assets/or1.jpg",
    genre:"Homme",
    annee:2020,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{    id: 17, 
    discipline:  "Karatéka",
    type:  "Contact",
    paysAthlete: "Canada",
    nomAthlete: "Steven Da Costa",
    urlMedaille:"assets/or1.jpg", 
    genre:"Homme",
    annee:2012,
    description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
   id: 18,
   discipline:  "boxe",
   type:  "Contact",
   paysAthlete: "Canada",
   nomAthlete: "Djamili-Dini Aboudou Moindze",
   urlMedaille:"assets/or1.jpg",
   genre:"Homme",
   annee:2012,
   description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 19,
discipline: "Judo",
type:  "Contact",
paysAthlete: "Canada",
nomAthlete: "Teddy Rinner",
urlMedaille:"assets/argent4.png",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
   id: 20,
   discipline: "Judo",
   type: "Contact",
   paysAthlete: "Canada",
   nomAthlete: "Clarisse Agbegninou",
   urlMedaille:"assets/or3.png",
   genre:"Dame",
   annee:2020,
  description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 21,
discipline: "Natation",
type: "Individuel",
paysAthlete: "Canada",
nomAthlete: "Leon Marchand",
urlMedaille:"assets/or3.png",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 22,
discipline:  "Natation",
type:  "Individuel",
paysAthlete: "Canada",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 23,
discipline:  "Athletisme",
type:  "Individuel",
paysAthlete: "Canada",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 24,
discipline:  "Saut à la perche",
type:  "Individuel",
paysAthlete: "Canada",
nomAthlete: "Renaud Lavillenie",
urlMedaille:"assets/bronze1.jpg",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},

{
id: 25,
discipline:  "Karatéka",
type:  "Contact",
paysAthlete: "Italie",
nomAthlete: "Steven Da Costa",
urlMedaille:"assets/argent1.jpg",
genre:"Homme",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 26,
discipline:  "boxe",
type:  "Contact",
paysAthlete: "Italie",
nomAthlete: "Djamili-Dini Aboudou Moindze",
urlMedaille:"assets/argent1.jpg",
genre:"Homme",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 27,
discipline: "Judo",
type:  "Contact",
paysAthlete: "Italie",
nomAthlete: "Teddy Rinner",
urlMedaille:"assets/argent1.jpg",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 28,
discipline:  "Judo",
type:  "Contact",
paysAthlete: "Italie",
nomAthlete: "Clarisse Agbegninou",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 29,
discipline: "Natation",
type: "Individuel",
paysAthlete: "Italie",
nomAthlete: "Leon Marchand",
urlMedaille:"assets/bronze1.jpg",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 30,
discipline:  "Natation",
type:  "Individuel",
paysAthlete: "Italie",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 31,
discipline:  "Athletisme",
type:  "Individuel",
paysAthlete: "Italie",
nomAthlete: "Marie Wattel",
urlMedaille:"assets/bronze1.jpg",
genre:"Dame",
annee:2012,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
},
{
id: 32,
discipline:  "Saut à la perche",
type:  "Individuel",
paysAthlete: "Italie",
nomAthlete: "Renaud Lavillenie",
urlMedaille:"assets/bronze1.jpg",
genre:"Homme",
annee:2020,
description:  "Au cœur de l'esprit olympique se trouve l'athlète, un individu dévoué et passionné qui incarne les valeurs d'excellence, d'effort et de respect. Ces hommes et femmes extraordinaires représentent le summum de la compétition sportive, s'entraînant sans relâche pour atteindre les plus hauts sommets de leur discipline"
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