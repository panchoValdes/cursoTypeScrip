(()=>{

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number,
    }

    const avenger: Avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.23213,
    };

    // const {poder, vision, } = avenger;

    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ironman, ...resto}:Avengers)=>{
        console.log(ironman, resto);
    }
    // printAvenger(avenger);

    const avengersArr:any[] = ['Capitan America', true, 150.15];

    const [ capitan , thor, seriaUnNumero] = avengersArr;
    //console.log({capitan, thor});

})();