(()=>{

    interface hero  {
        name: string,
        age:number,
        powers:number[],
        getName?:() => string
    }

    let Flash: hero= { 
        name : "Barry Allen",
        age: 24,
        powers: [1, 2],
    }

    let superman: hero = { 
        name : "clark kent",
        age: 60,
        powers: [3, 4],
        getName(){
            return this.name;
        }
    }


})();