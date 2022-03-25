class jugadores  {
    getname (){
        return this.nombre;
    }

    getnombrecompleto (){
        return this.nombre + " " + this.apellido;
    }
    constructor(name, lastname, clubes, logros ) {
        this.nombre = name;
        this.apellido =  lastname;
        this.clubes =  clubes;
        this.logros =  logros;
      }


    nombre = "";
    apellido = "";
    clubes = [""];
    logros = [""];
}
    
  const messi = new jugadores("Leo", "Messi", ["Barcelona", "psg"], ["45 titulos"])
  const cr7 = new jugadores("Cristiano", "Ronaldo", ["Sporting", "Manchester United", "Real Madrid", "Juventus"], ["42 titulos"])
  

  console.log(messi);
  console.log (cr7.getname())
  console.log (messi.getnombrecompleto())