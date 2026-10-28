// Los datos iniciales permiten comprobar que el CRUD funciona
// aunque todavía no exista ningún mecanismo de persistencia.

const TAREAS_INICIALES = [
  { id: "demo-1", titulo: "Estudiar eventos del DOM", prioridad: "alta", completada: false },
  { id: "demo-2", titulo: "Resolver ejercicios de arreglos", prioridad: "media", completada: true },
  { id: "demo-3", titulo: "Revisar apuntes de JSON", prioridad: "baja", completada: false }
];

const CLAVE_TAREAS = "dw1:tareas-academicas";

// =============================================================
// ACTIVIDAD EN CLASE: IMPLEMENTAR LA PERSISTENCIA CON localStorage
// =============================================================
export function cargarTareas() {
  // TODO 1: Recuperar la cadena JSON desde localStorage.
  // Si no hay datos guardados, utilizar las tareas iniciales.
  // Convertir el JSON recuperado a un arreglo de objetos.
  const guardado = localStorage.getItem(CLAVE_TAREAS);

  if(guardado !== null){
    return JSON.parse(guardado);
  }
  return TAREAS_INICIALES.map((tarea) => ({ ...tarea }));
}

export function guardarTareas(tareas) {
  // TODO 2: Convertir el arreglo "tareas" a JSON y almacenarlo
  // en localStorage con la clave CLAVE_TAREAS.
  localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
}
// =============================================================