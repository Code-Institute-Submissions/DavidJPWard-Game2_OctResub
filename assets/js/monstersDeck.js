class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }



    Smash(self, target, isFaster){
        let damage = 1
        target.health -= damage
            PrintOutput(self.controller + "s " + self.name + " used smash, dealing " + damage.toString() + " damage.", isFaster)
            console.log(self.controller + "s " + 
            self.name + " at " + self.health.toString() + " using smash, dealing " + 
            damage.toString() + " damage to " + target.controller + "s " + target.name)
    }
    
    Grind(self, target, isFaster){
        let damage =  1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used grind, dealing " + damage.toString() + " damage.", isFaster)
    
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using grind, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    Polyfilla(self, target,  isFaster){
        let damage = 1
        self.health += damage
        PrintOutput(self.controller + "s " + self.name + " used polyfilla, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using polyfilla, healing " + 
        damage.toString() + " health.")
    }

    Spark(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used spark, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using spark, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }


    ContactLense(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used ContactLense, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using contactlense, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    Stare(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Stare, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using stare, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    Slap(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Slap, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using slap, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    Scratch(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + 
        self.name + " at " + self.health.toString() + " using scratch, dealing " + 
        damage.toString() + " damage to " + target.controller + "s " + target.name)
    }


    Slice(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Scratch, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + self.name + " at " + self.health.toString() + " using slice, dealing " + damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    
    Sharpen(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " used Sharpen, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + self.name + " at " + self.health.toString() + " using sharpen, dealing " + damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

    
    RunWithScissors(self, target,  isFaster){
        let damage = 1
        target.health -= damage
        PrintOutput(self.controller + "s " + self.name + " is running with scissors, dealing " + damage.toString() + " damage.", isFaster)
        console.log(self.controller + "s " + self.name + " at " + self.health.toString() + " using playwithsc dealing " + damage.toString() + " damage to " + target.controller + "s " + target.name)
    }

}

