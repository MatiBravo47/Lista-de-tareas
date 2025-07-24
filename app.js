// llamada a libreria vue
const app = new Vue({
  //relacionar con id 'app' 
  el:'#app',
  data:{
    titulo: 'Lista de tareas',
    // array donde se almacenan todas las tareas 
    tareas: [],
    // lo ingresado en el input(HMTL) se relaciona con propiedad 'nuevaTarea'
    nuevaTarea: ''
  },
  methods:{
    agregarTarea: function(){
      // 'this' para llamar propiedad de data 
      // almacena nombre y estado en cada celda de array tareas
        // Validar que no esté vacía o solo tenga espacios
      if (this.nuevaTarea.trim() === '') {
        alert('No se puede agregar una tarea vacía.');
        return;
      }
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      // luego de que es detectado, vuelve a estar vacio
      this.nuevaTarea = '';
      localStorage.setItem('lista-vue', JSON.stringify(this.tareas));
    },
    cancelarTarea: function(){
      this.nuevaTarea = '';
    },
    editarTarea: function(index){
      //this.tareas[index].estado = true;
      this.tareas[index].estado = !this.tareas[index].estado; 
      localStorage.setItem('lista-vue', JSON.stringify(this.tareas));
    },
    eliminar: function(index){
      this.tareas.splice(index, 1);
      localStorage.setItem('lista-vue', JSON.stringify(this.tareas));
    }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('lista-vue'));
    if(datosDB === null){
      this.tareas = [];
    }else{
      this.tareas = datosDB;
    }
  }
});