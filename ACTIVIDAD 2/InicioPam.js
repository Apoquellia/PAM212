class InicioPAM{

    desplegarReglamento(){
        const contenedor = document.getElementById("contenido");
        contenedor.innerHTML = 
        `<h1>Reglamento</h1> <ol> 
        <li>Participación activa en clase</li>
        <li>Trabajos en classroom</li>
        <li>Entregas completas</li>
        <li>Respetar tiempos de entrega</li>
        <li>Presentación de trabajo</li>
        <li>Calidad universitaria</li>
        </ol>`;
        
    }
    desplegarLineamientos(){
        const contenedor = document.getElementByID("contenido");
        contenedor.innerHTML = 
        `<h1>Lineamientos</h1> <ol> 
        <li> Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos del alumno, materia</li>
        <li>Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad</li>
        </ol>`;
        
    }
    desplegarFechas(){

    }
    desplegarPorcentajes(){

    }
}