class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }



    Smash(self, target, isFaster){
        let damage = 0
        console.log("damage " + damage)
        damage = self.attack - target.defence
        console.log("damage: " + damage) 
        if(damage < 2){
            damage = 2
        }
        target.health -= damage
 
            PrintOutput(self.controller + "s " + self.name + " used smash, dealing " + damage.toString() + " damage.", isFaster)

    }
    
    Grind(self, target, isFaster){
        let damage = 0
        damage = self.attack - target.defence 
        if(damage < 1){
            damage = 1
        }
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used grind, dealing " + damage.toString() + " damage.", isFaster)
    

    }

    Polyfilla(self, target,  isFaster){
        let healing = Math.floor(Math.random() * 4)
        self.health += healing
        PrintOutput(self.controller + "s " + self.name + " used polyfilla, healing " + healing.toString() + " health", isFaster)

    }

    Spark(self, target,  isFaster){
        let damage = 0
        damage = self.attack - target.defence 
        if(damage < 1){
            damage = 2
        }
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used spark, dealing " + damage.toString() + " damage.", isFaster)

    }


    ContactLense(self, target,  isFaster){
        self.defence += 3

        PrintOutput(self.controller + "s " + self.name + " used ContactLense, raising its defence by 3", isFaster)

    }

    Stare(self, target,  isFaster){

        target.speed -= 1
        PrintOutput(self.controller + "s " + self.name + " used Stare, reducing "+ target.name+"s speed", isFaster)

    }

    Slap(self, target,  isFaster){
        let damage = 0
        damage = (self.attack + 2) - target.defence 
        console.log(damage)
        if(damage < 1){
            damage = 1
        }
        console.log("Damage: " + damage)
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Slap, dealing " + damage.toString() + " damage.", isFaster)

    }

    Scratch(self, target,  isFaster){
        let damage = 0
        damage = self.attack - (target.defence-2) 
        if(damage < 1){
            damage = 1
        }
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)
    }


    Slice(self, target,  isFaster){
        let damage = 0
        damage = self.attack - target.defence 
        if(damage > 1){
            damage += 2
        }
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)
    }

    
    Sharpen(self, target,  isFaster){
        self.attack += 4
        PrintOutput(self.controller + "s " + self.name + " used Sharpen, increasing its attack by 4", isFaster)
    }

    
    RunWithScissors(self, target,  isFaster){
        let damage = 0
        let chance = Math.floor(Math.random() * 3)
        if(chance > 1){
             damage = (self.attack*self.attack) - target.defence 
            target.health -= damage
            PrintOutput(self.controller + "s " + self.name + " is running with scissors, dealing " + damage.toString() + " damage.", isFaster)
        }
        else{
            self.health -= 9999
            PrintOutput(self.name + " tripped :(", true)
        }
        
    }

}

