export class paysParticipant{
    constructor(
        public id: number,
        public nom:  string,
        public codeIso:  string,
        public continent: string,
        public storie: string,
        public nombreMedaille: number,
        public urlFlag:string
    ){}
}