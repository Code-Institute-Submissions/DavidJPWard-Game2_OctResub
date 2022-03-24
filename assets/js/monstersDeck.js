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
            console.log("SHITTAAAAAAAAAA")
    }
    
    Grind(controller, activePlayerMonster, activeEnemyMonster){
        console.log(activePlayerMonster)
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        target.health--
        PrintOutput(activePlayerMonster.name + " used grind")
    }

    Polyfilla(controller, activePlayerMonster, activeEnemyMonster){
        console.log(activePlayerMonster)
        let target = null;
        if(controller == "player"){
            target = activePlayerMonster
        }else{
            target = activeEnemyMonster
        }
        PrintOutput(activePlayerMonster.name + " used polyfilla")
        target.health++
    }

    Spark(controller, activePlayerMonster, activeEnemyMonster){
        console.log(activePlayerMonster)
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + " used spark")
        target.health--
    }

    ContactLense(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + " used ContactLense")
        target.health--
    }

    Stare(controller, activePlayerMonster, activeEnemyMonster){
        console.log(activePlayerMonster)
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + " used Stare")
        target.health--
    }

    Slap(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + " used Slap")
        target.health--
    }

    Scratch(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
            PrintOutput(activePlayerMonster.name + " used Scratch")
        }else{
            target = activePlayerMonster
        }

        target.health--
    }


    Slice(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
            PrintOutput(activePlayerMonster.name + " used Scratch")
        }else{
            target = activePlayerMonster
        }

        target.health--
    }

    
    Sharpen(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
            PrintOutput(activePlayerMonster.name + " used Scratch")
        }else{
            target = activePlayerMonster
        }

        target.health--
    }

    
    RunWithScissors(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
            PrintOutput(activePlayerMonster.name + " is running with scissors")
        }else{
            target = activePlayerMonster
        }

        target.health--
    }

}
