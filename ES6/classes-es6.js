(()=>{
    class Avenger{
        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name = name;
            this.power = power;
        }
    }

    class Flyable extends Avenger{
        fly(){
            console.log('I can fly');
        }
        constructor (name , power){
            super();
            this.fly = true;
        }
    }

    const hulk = new Avenger('Hulk', 9000);
    const falcon = new Flyable('Falcon', 50);
    console.log(hulk);
    console.log(falcon);

})();