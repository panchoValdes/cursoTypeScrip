(()=>{

    const addNumbers = (a: number, b: number): number => {
        return a + b;
    }
    const greet = (name: string): string => {
        return `Hello ${name}`;
    }
    const saveTheWorld = (): string => {
        return `The world is saved!`;
    }

    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Clark Kent'));
    
    myFunction = saveTheWorld;
    console.log(myFunction());

})();    