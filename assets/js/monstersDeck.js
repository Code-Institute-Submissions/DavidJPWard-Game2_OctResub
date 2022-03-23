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
        console.log(this.name)
    }

    grind(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)
        console.log(this.name)
    }

    polyfilla(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)
        console.log(this.name)
    }

    spark(controller, target, activePlayerMonster, activeEnemyMonster){
        if(controller == "player"){
            target = activeEnemyMonster
        }else{
            target = activePlayerMonster
        }
        console.log(target)
        console.log(this.name)
    }

}
