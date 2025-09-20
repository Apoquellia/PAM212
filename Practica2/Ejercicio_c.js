const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}    
]
let resultadoFind = personas.find(persona => persona.nombre == "Luis");
console.log("Find()")
console.log(resultadoFind);
console.log("")

console.log("forEach()")
personas.forEach((persona) => console.log("El nombre de la persona es " + persona.nombre + " y su edad es " + persona.edad));
console.log("")

console.log("reduce()")
let sumaEdades = personas.reduce((sumaTotal, persona) => sumaTotal + persona.edad, 0)
console.log("La suma total de las edades de las personas es de " + sumaEdades)
