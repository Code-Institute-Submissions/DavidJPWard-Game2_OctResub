class MonsterDeck{
    constructor(deck){
        this.MonsterDeck = deck

    }

    smash(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)

    }

    grind(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)

    }

    polyfilla(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)

    }

    spark(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)

    }

}
