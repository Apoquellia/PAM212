const persona = {
    nombre: "José Luis",
    edad: 19,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const { nombre, edad, direccion: {ciudad, pais}} = persona;

console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad)
