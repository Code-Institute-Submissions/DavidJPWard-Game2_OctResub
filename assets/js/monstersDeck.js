class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }



    Smash(self, target, isFaster){
        let damage = 1
        target.health -= damage
            PrintOutput(self.controller + "s " + self.name + " used smash, dealing " + damage.toString() + " damage.", isFaster)

    }
    
    Grind(self, target, isFaster){
        let damage =  1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used grind, dealing " + damage.toString() + " damage.", isFaster)
    }

    Polyfilla(self, target,  isFaster){
        let damage = 1
        self.health += damage
        PrintOutput(self.controller + "s " + self.name + " used polyfilla, dealing " + damage.toString() + " damage.", isFaster)
    }

    Spark(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used spark, dealing " + damage.toString() + " damage.", isFaster)
    }

    ContactLense(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used ContactLense, dealing " + damage.toString() + " damage.", isFaster)

    }

    Stare(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Stare, dealing " + damage.toString() + " damage.", isFaster)
        target.health--
    }

    Slap(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Slap, dealing " + damage.toString() + " damage.", isFaster)

    }

    Scratch(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)

    }


    Slice(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)
        
    }

    
    Sharpen(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Sharpen, dealing " + damage.toString() + " damage.", isFaster)

    }

    
    RunWithScissors(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " is running with scissors, dealing " + damage.toString() + " damage.", isFaster)

    }

}
