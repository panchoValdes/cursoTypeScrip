(()=>{
    
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
    const villians: string[] = ['Omega Red', 'Magneto', 'Juggernaut'];  
    villians.forEach(v => console.log(v.toUpperCase()));
    numbers.forEach(v => console.log(v));

    villians.forEach((v => console.log(v.toUpperCase())));

    numbers.forEach((v => console.log(v)));

})();