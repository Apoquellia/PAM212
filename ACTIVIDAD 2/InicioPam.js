class InicioPAM{

    desplegarReglamentoClase(){
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
    desplegarLineamientosClassroom(){
        const contenedor = document.getElementById("contenido");
        contenedor.innerHTML = 
        `<h1>Lineamientos</h1> <ol> 
        <li> Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos del alumno, materia</li>
        <li>Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad</li>
        </ol>`;
        
    }
    desplegarFechasExamenes(){
        const contenedor = document.getElementById("contenido");
        contenedor.innerHTML = 
        `<h1>Fechas de los Exámenes</h1> <ol> 
        <li>Parcial 1: 29/09/2025</li>
        <li>Parcial 2: 03/10/2025</li>
        <li>Parcial 3: 01/12/2025</li>
        </ol>`;
    }
    desplegarPorcentajesMateria(){
        const contenedor = document.getElementById("contenido");
        contenedor.innerHTML = 
        `<h1>Porcentajes</h1> <ol>
        <li>Parcial 1 </li>
        <li>Conocimiento: 40% </li>
        <li>Desempeño: 20% </li>
        <li>Producto: 30% </li>
        <li>PI: 10% </li>
        </ol>
        <li>Parcial 2 </li>
        <li>Conocimiento: 40% </li>
        <li>Desempeño: 20% </li>
        <li>Producto: 20% </li>
        <li>PI: 20% </li>
        </ol>
        <li>Parcial 3 </li>
        <li>Conocimiento: 20% </li>
        <li>Desempeño: 10% </li>
        <li>Producto: 40% </li>
        <li>PI: 30% </li>
        </ol>`;
    }
}