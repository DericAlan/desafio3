class characterHero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        
    
    }
    attack(){
        let attackUsing = ""
        switch(this.type){
            case "Guerreiro":
                attackUsing = "espada";
                break;
                case "Mago":
                    attackUsing = "magia";
                    break;
                    case "Monge":
                        attackUsing = "artes marciais";
                        break
                        case "Ninja":
                            attackUsing = "shuriken";
                            
    }    
   return `o ${this.type} atacou usando ${attackUsing}`
}
}
const hero = new characterHero("Alan", 19, "Guerreiro")
console.log(hero.attack())
