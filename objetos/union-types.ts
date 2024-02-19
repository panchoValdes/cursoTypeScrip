(()=>{

    type hero = {
        name: string,
        age:number,
        powers:number[],
        getName?:() => string
    }

    let myCustomVariable: string | number | hero = "Flash";
    
    myCustomVariable = 25;
    console.log(typeof myCustomVariable);

    myCustomVariable = { 
        name : "Barry Allen",
        age: 24,
        powers: [1, 2],
    }
    console.log( myCustomVariable);

})();