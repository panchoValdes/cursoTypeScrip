(()=>{
    const fullName = (firstName: string, lastName: string): string => {
        if (!firstName){
            throw new Error('firstName is required');
        }
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Clark', 'Kent');

    console.log(name);
})();