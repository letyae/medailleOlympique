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
          type: "combat à deux",
          popularite: "",
          histoire: "La boxe anglaise, aussi appelée le noble art, est un sport de combat dans lequel deux adversaires, de même catégorie de poids et de même sexe, se rencontrent sur un ring, munis de gants rembourrés afin de limiter le risque de coupure, et s'échangent des coups de poing, portés au visage et au buste. Le combat est divisé en intervalles de temps, les rounds, ou reprises en français, séparés par une minute de repos annoncée par une cloche où le pugiliste pourra être conseillé et soigné si besoin. \n Que ce soit en boxe olympique ou professionnelle, les boxeurs tentent d\'éviter les coups de poing de leur adversaire tout en essayant de le toucher. Des points sont attribués à chaque coup considéré comme net, puissant et précis. À la fin du combat, le boxeur ayant le plus de points est déclaré vainqueur. La victoire peut également être atteinte si un combattant met son adversaire hors de combat (par knockout ou KO), c\'est-à-dire dans l\'incapacité de se relever et de reprendre le combat après le compte de dix secondes de l\'arbitre. Un combattant est également déclaré vainqueur si son adversaire blessé ne peut continuer le combat (KO technique ou TKO).",
          url:"assets/boxing_mens.png"
        },
         {
            id: 2,
            nom: "Natation",
            type: "epreuve personnel",
            popularite: "",
            histoire: "La natation figure au programme des Jeux olympiques d'été depuis la première édition des Jeux olympiques modernes en 1896. Avec l'athlétisme, c'est le sport attribuant généralement le plus de médailles (37 épreuves pour 111 médailles décernées lors des Jeux olympiques de 2024). \n C\'est également le sport dont le nombre de participants est le plus élevé aux Jeux avec l\'athlétisme. Partageant avec ce dernier une médiatisation et une couverture plus importantes que la plupart des autres sports olympiques, la natation est au centre des attentions durant les compétitions.",
            url:"assets/natation1.jpg"
        },
        {
            id: 3,
            nom: "Athlétisme",
            type: "epreuve personnel",
            popularite: "",
            histoire: "L'athlétisme figure au programme des Jeux olympiques depuis la première édition en 1896 pour les hommes et depuis 1928 pour les femmes. Il est le sport qui compte le plus grand nombre d\'épreuves lors des Jeux olympiques (48 épreuves depuis 2020) avec la natation. Les compétitions se déroulent généralement dans le stade olympique. \n L\'athlétisme (du grec ancien ἀθλητής / athlêtês, « participant à une compétition », dérivé de ἆθλος  / áthlos, « concours ») est un ensemble d'épreuves sportives codifiées comprenant les courses, sauts, lancers, épreuves combinées et marche. Il s'agit de l'art de dépasser la performance des adversaires en vitesse ou en endurance, en distance ou en hauteur. Les épreuves athlétiques, individuelles ou par équipes, ont varié avec le temps et les mentalités. L'athlétisme est l'un des rares sports universellement pratiqués, que ce soit dans le monde amateur ou au cours de nombreuses compétitions de tous niveaux. La simplicité, le caractère naturel et le peu de moyens nécessaires à sa pratique expliquent en partie ce succès. Les premières traces de concours athlétiques remontent aux civilisations antiques. La discipline s'est développée au cours des siècles, des premières épreuves à sa codification.",
            url:"assets/athletisme1.jpg"
        },
        {
            id: 4,
            nom: "Footbal masculin",
            type: "Sport collectif",
            popularite: "",
            histoire: "Le football aux Jeux olympiques d'été est une discipline olympique depuis les Jeux olympiques de 1900 à Paris. Les Jeux olympiques furent la première compétition internationale de l'histoire du football, et subirent plusieurs changements en raison du professionnalisme, de la création de la coupe du monde ou du développement du football à travers le monde. Les champions olympiques en titre sont chez les hommes le Brésil et chez les femmes le Canada. \n Autrefois réservé aux amateurs, le tournoi olympique s\'est ouvert aux professionnels à partir des Jeux de 1984, mais sous certaines conditions. Actuellement le comité international olympique n\'autorise que les joueurs de moins de 23 ans à prendre part à la compétition pour les équipes masculines (trois joueurs peuvent faire exception depuis 1996). En outre, la FIFA n\'inscrit pas les olympiades dans son calendrier, rendant donc les clubs moins enclins à prêter leurs joueurs, ce qui peut poser problème à certaines sélections disputant les Jeux olympiques2. En revanche, de telles restrictions et conditions n\'existent pas en ce qui concerne le tournoi féminin, où les équipes alignées ne diffèrent donc pas de celles disputant par ailleurs la Coupe du monde de la FIFA.",
            url:"assets/foot1.jpg"
        },
        {
            id: 5,
            nom: "Footbal feminin",
            type: "Sport collectif",
            popularite: "",
            histoire: "Le football aux Jeux olympiques d'été est une discipline olympique depuis les Jeux olympiques de 1900 à Paris. Les Jeux olympiques furent la première compétition internationale de l'histoire du football, et subirent plusieurs changements en raison du professionnalisme, de la création de la coupe du monde ou du développement du football à travers le monde. Les champions olympiques en titre sont chez les hommes le Brésil et chez les femmes le Canada. \n Autrefois réservé aux amateurs, le tournoi olympique s\'est ouvert aux professionnels à partir des Jeux de 1984, mais sous certaines conditions. Actuellement le comité international olympique n\'autorise que les joueurs de moins de 23 ans à prendre part à la compétition pour les équipes masculines (trois joueurs peuvent faire exception depuis 1996). En outre, la FIFA n\'inscrit pas les olympiades dans son calendrier, rendant donc les clubs moins enclins à prêter leurs joueurs, ce qui peut poser problème à certaines sélections disputant les Jeux olympiques2. En revanche, de telles restrictions et conditions n\'existent pas en ce qui concerne le tournoi féminin, où les équipes alignées ne diffèrent donc pas de celles disputant par ailleurs la Coupe du monde de la FIFA.",
            url:"assets/foot2.jpg"
        },
        {
            id: 6,
            nom: "Athlétisme feminin",
            type: "Sport collectif",
            popularite: "",
            histoire: "L'athlétisme figure au programme des Jeux olympiques depuis la première édition en 1896 pour les hommes et depuis 1928 pour les femmes. Il est le sport qui compte le plus grand nombre d\'épreuves lors des Jeux olympiques (48 épreuves depuis 2020) avec la natation. Les compétitions se déroulent généralement dans le stade olympique. \n L\'athlétisme (du grec ancien ἀθλητής / athlêtês, « participant à une compétition », dérivé de ἆθλος  / áthlos, « concours ») est un ensemble d'épreuves sportives codifiées comprenant les courses, sauts, lancers, épreuves combinées et marche. Il s'agit de l'art de dépasser la performance des adversaires en vitesse ou en endurance, en distance ou en hauteur. Les épreuves athlétiques, individuelles ou par équipes, ont varié avec le temps et les mentalités. L'athlétisme est l'un des rares sports universellement pratiqués, que ce soit dans le monde amateur ou au cours de nombreuses compétitions de tous niveaux. La simplicité, le caractère naturel et le peu de moyens nécessaires à sa pratique expliquent en partie ce succès. Les premières traces de concours athlétiques remontent aux civilisations antiques. La discipline s'est développée au cours des siècles, des premières épreuves à sa codification.",
            url:"assets/athletisme3.jpg"
        },
        {
            id: 7,
            nom: "Saut à la perche",
            type: "Sport individuel",
            popularite: "",
            histoire: "Le saut à la perche masculin figure au programme des Jeux olympiques depuis la première édition, en 1896 à Athènes. Les femmes ne participent à cette épreuve que depuis les Jeux olympiques de Sydney, en 2000.  Avec deux médailles d\'or remportées, l\'Américain Bob Richards et la Russe Yelena Isinbayeva sont les athlètes les plus titrés dans cette épreuve. Les États-Unis ont remporté les 16 premiers titres masculins, de 1896 à 1968. \n  Les records olympiques de la discipline sont actuellement détenus par le Brésilien Thiago Braz da Silva, auteur de 6,03 m en finale des Jeux olympiques de 2016, à Rio1, et par Yelena Isinbayeva, créditée de 5,05 m aux Jeux olympiques de 2008, à Pékin2." ,
            url: "assets/saut0.jpg"
        },
        
        {
            id: 8,
            nom: "Lancé javelot",
            type: "Sport individuel",
            popularite: "",
            histoire: " Le lancer du javelot masculin figure au programme des Jeux olympiques depuis la quatrième édition, en 1908 à Londres. Les femmes participent à cette épreuve depuis les Jeux de 1932, à Los Angeles. Avec trois médailles d\'or remportées, le Tchèque Jan Železný est l\'athlète le plus titré dans cette épreuve. Sa compatriote Barbora Špotáková et l'Allemande Ruth Fuchs, avec deux titres, détiennent quant à elles le record de victoires féminines. \n Les records olympiques de la discipline sont actuellement détenus par le Norvégien Andreas Thorkildsen, auteur de 90,57 m en finale des Jeux olympiques de 2008, à Pékin1, et par la Cubaine Olisdeilys Menéndez, créditée de 71,53 m lors des Jeux olympiques de 2004, à Athènes2." ,
            url: "assets/lance00.jpg"
        },
        {
            id: 9,
            nom: "Judo",
            type: "Sport individuel",
            popularite: "",
            histoire: "Le judo (jūdō?, litt. « voie de la souplesse ») est un art martial, créé au Japon en 1882 par Jigorō Kanō en tant que pédagogie physique, mentale et morale. Par rapport au Kobudō1, ou « voie martiale traditionnelle », le judo est ce qu'on appelle un shin budō, c'est-à-dire une « voie martiale moderne », dont une branche a évolué en sport de combat puis en sport olympique à l'occasion des Jeux olympiques de Tokyo de 1964. \n L\'objectif principal du judoka en compétition est de projeter son adversaire sur le dos, soit de l\'amener au sol et de l'immobiliser (techniques de maîtrise), ou de l'obliger à abandonner à l'aide de clés articulaires et d'étranglements. Les règles du judo ont évolué depuis la création de l\'art martial et les techniques de percussion ainsi que les armes traditionnelles ne sont autorisées que dans sa forme théorique (kata) ; elles ne sont pas autorisées en compétition, ni même en pratique libre (randori).",
            url: "assets/judo3.jpg"
        }
       
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