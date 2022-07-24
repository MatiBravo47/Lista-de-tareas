const app = new Vue({
  el:'#app',
  data:{
    titulo: 'Lista de tareas',
    tareas:[],
    nuevaTarea:''
  },
  methods:{
    agregarTarea: function(){
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      this.nuevaTarea = '';

    },
    editarTarea: function(){
      console.log('editar');

    }
  }
})