document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave a proyectos
    const viewWorkBtn = document.querySelector('.btn-primary');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            document.querySelector('#projects').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Log para verificar carga (Tarea 5)
    console.log("Arquitectura del portafolio lista.");
});