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
        this.attaque = attaque;
    }
}

export class Guerrier{
    constructor(nom,nbrPntVie,nbrPntAttaque,pntRage){
        super(nom,nbrPntVie,nbrPntAttaque);
        this.pntRage = pntRage;
        attaque = () => {
            this.pntRage++;
            if (this.pntRage >= 4) {
                this.attaque3  *= 1.25;
                this.pntRage = 0;
            }
        }
    }


let guerrier =new Guerrier();


export class Mage extends Heros{
    constructor(nom,nbrPntVie,nbrPntAttaque,pntMana){
        super(nom,nbrPntVie,nbrPntAttaque);
        this.pntMana = pntMana(Math.floor(Math.random() * 3) + 7);
        attaque = () => {
        },
        deffense = () => {

        }
    }
}
let mage =new Mage();

class Archer extends Heros {
    constructor(nom, nbrPntVie, nbrPntAttaque) {
        super(this.nom, nbrPntVie, nbrPntAttaque),
        this.fleches = Math.floor(Math.random() * 5) + 7;
    }

    attaque() {
        if (this.fleches <= 0) {
        this.fleches += 6;
        return;
    }
}
}