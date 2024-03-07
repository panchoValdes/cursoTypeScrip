(()=>{

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }
    const captainAmerica: Avenger = {
        name: 'capitan america',
        weapon: 'escudo',
    }   
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir',
    }
    
    const avenger = [ironman, captainAmerica, thor];

    for (const av of avenger) {
        //console.log(av.name, av.weapon);
    }

})();