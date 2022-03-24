class Monster{
    constructor(config){
        Object.keys(config).forEach(key => {
            this[key] = config[key];
        })
    }
}