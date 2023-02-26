
//1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación. 
//Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.



class persona{
constructor (nombre,apellido,id,edad,ubicación){
    this.nombre = nombre
    this.apellido = apellido
    this.id = id
    this.edad= edad
    this.ubicación = ubicación
}
saludar(){ //metodo
return "hola mi nombre es:" + this.nombre + "mi apelido es:" + this.apellido;
}
}
const saludo = new persona("pancho", "solano", 11685525 , 18 ,"mi casa")
console.log(saludo.saludar())




//2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
//Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado,
class empleado extends persona{
    constructor (nombre,apellido,id,edad,ubicación,sueldo, posición, departamento, ingreso){
        super(nombre,apellido,id,edad,ubicación)
        this.sueldo = sueldo
        this.posición = posición
        this.departamento = departamento
        this. ingreso = ingreso
    }
    imprimirSueldo(){
        const sueldoAnual = this.sueldo * 12
        console.log("el sueldo anual es:" + sueldoAnual)
    }

}
const sueldoAnual1 = new empleado ("pancho", "solano", 11685525 , 18 ,"mi casa", 180000, "sennior", "manage",6000)
sueldoAnual1.imprimirSueldo()

//3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro
// llamado lenguajes (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
//Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
//el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico
 class Desarrollador extends empleado{
    constructor ( nombre,apellido,id,edad,ubicación,sueldo, posición, departamento, ingreso ){
        super(nombre,apellido,id,edad,ubicación,sueldo, posición, departamento, ingreso)
        this.lenguaje = lenguaje 
    }
}