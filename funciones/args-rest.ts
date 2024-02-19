(()=> {

    const fullName = (firtsName: string, ...restArgs: string[])=>{
        return `${firtsName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);

})();