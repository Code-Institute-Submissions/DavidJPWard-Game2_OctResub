class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }


    smash(controller, activePlayerMonster, activeEnemyMonster){
            let target = null;
            if(controller == "player"){
                target = activeEnemyMonster
            }else{
                target = activePlayerMonster
            }
            target.health--
            PrintOutput(activePlayerMonster.name + "used smash")
    }
    
    grind(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + "used grind")
    }

    polyfilla(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + "used polyfilla")
    }

    spark(controller, activePlayerMonster, activeEnemyMonster){
        let target = null;
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        PrintOutput(activePlayerMonster.name + "used spark")
    }

}
