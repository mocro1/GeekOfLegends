export class Boss{
    constructor(nom,nbrPntVie,nbrPntAttaque){
        this.nom = nom;
        this.nbrPntVie = nbrPntVie;
        this.nbrPntAttaque = nbrPntAttaque
        this.attaqueSpe = () =>{
        }
    }
    attaqueSpe = () =>{
        if (Boss.nbrPntVie <= ((Boss.nbrPntVie)/100)*20) {
            let enigme = prompt("Repond à l'énigme : Combien fais 1 + 1 ?")
            if (enigme==2) {
                console.log("Bien jouer");
            }
            else{
                console.log("Mauvaise reponse");
            }
        }
    }
}

export let Sauron = new Boss("Sauron",4000,400);
export let Chronos = new Boss("Chronos",4000,400);
export let Lilith = new Boss("Sauron",4000,400);

export let question1 = "Repond à l'énigme : Combien fais 1 + 1 ?"
export let question2 = "quel est la capital de la belgique?"
export let question3 = "on est dans quelle année?"
export function enigmeHasard() {
    if (Sauron.nbrPntVie <= ((Boss.nbrPntVie)/100)*20) {
        let tableauQuestion = [question1,question2,question3]
        console.log(tableauQuestion[Math.floor(Math.random()*tableauQuestion.length)]);
    }
}

export class Heros{
    constructor(nom,nbrPntVie,nbrPntAttaque){
        this.nom = nom;
        this.nbrPntVie = nbrPntVie;
        this.nbrPntAttaque = nbrPntAttaque;
    }
}
export class Mage extends Heros{
    constructor(nom,nbrPntVie,nbrPntAttaque,pntRage){
        super(nom,nbrPntVie,nbrPntAttaque)
        this.pntRage = pntRage
        attaque = () => {
        },
        deffense = () => {

        }
    }
}
let mage =new Mage();

export class Guerrier{
    constructor(nom,nbrPntVie,nbrPntAttaque,pntMana){
        this.nom = nom;
        this.nbrPntVie = nbrPntVie;
        this.nbrPntAttaque = nbrPntAttaque;
        this.pntMana = ();
        attaque = () => {
        },
        deffense = () => {

        }
    }
}
let guerrier =new guerrier();