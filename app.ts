(() => {

    // Tipos
    const batman: string= 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string]= [batman,superman];
    const villan: [string, number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza{
      Acuaman=0,
      Batman=1,
      Flash=5,
      Superman=100

    }
    const fuerzaFlash: Fuerza = Fuerza.Flash;
    const fuerzaSuperman: Fuerza = Fuerza.Superman;
    const fuerzaBatman: Fuerza = Fuerza.Batman;
    const fuerzaAcuaman: Fuerza = Fuerza.Acuaman;
  
    // Retorno de funciones
    function activaBatiseñal(): string{
      return 'activada';
    }
    console.log(activaBatiseñal());
  
    function pedirAyuda():void{
      console.log('Auxilio!!!');
    }
    pedirAyuda();
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  