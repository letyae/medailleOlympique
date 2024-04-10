export class medailleOlympique{
    constructor(
        public  id: number,
        public discipline:  string,
        public type:  string,
        public paysAthlete: string,
        public nomAthlete: string,  
        public urlMedaille: string,
        public genre: string,
        public annee: number,           
         
    ){}
}