class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }

    findTarget(controller, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            return activeEnemyMonster
        }else{
            return activePlayerMonster
        }
    }


    Smash(self, target){
            PrintOutput(self.name + " used smash")
            target.health--
    }
    
    Grind(self, target){
        target.health--
        PrintOutput(self.name + " used grind")
    }

    Polyfilla(self, target){
        PrintOutput(self.name + " used polyfilla")
        self.health++
    }

    Spark(self, target){
        PrintOutput(self.name + " used spark")
        target.health--
    }

    ContactLense(self, target){
        PrintOutput(self.name + " used ContactLense")
        target.health--
    }

    Stare(self, target){
        PrintOutput(self.name + " used Stare")
        target.health--
    }

    Slap(self, target){
        PrintOutput(self.name + " used Slap")
        target.health--
    }

    Scratch(self, target){

        PrintOutput(self.name + " used Scratch")
        target.health--
    }


    Slice(self, target){
        PrintOutput(self.name + " used Scratch")
        target.health--
    }

    
    Sharpen(self, target){
        PrintOutput(self.name + " used Sharpen")
        target.health--
    }

    
    RunWithScissors(self, target){
        PrintOutput(self.name + " is running with scissors")
        target.health--
    }

}
