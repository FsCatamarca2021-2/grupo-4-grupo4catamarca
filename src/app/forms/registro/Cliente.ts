export class Cliente {
    IdCliente: number;
    Nombre:string;
    Apellido:string;
    dni:string;
    IdDepartamento:number;
    direccion:string;
    Mail:string;
    Contraseña: string;

   constructor(){
       this.IdCliente=0;
       this.Apellido="";
       this.Nombre="";
       this.dni="";
       this.direccion="";
       this.IdDepartamento=0;
       this.Mail="";
       this.Contraseña="";


   }
}
