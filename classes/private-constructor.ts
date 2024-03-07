(()=>{

    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(
            public name: string
            ) {}
        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis');
            }
            return Apocalipsis.instance;
        }
        changeName(newName: string): void {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');
    // const apocalipsis = new Apocalipsis('soy apocalipsis');
    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})();