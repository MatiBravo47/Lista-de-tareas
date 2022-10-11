const app = new Vue({
  el:'#app',
  data:{
    titulo: 'Lista de tareas',
    tareas: [],
    nuevaTarea: ''
  },
  methods:{
    agregarTarea: function(){
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      this.nuevaTarea = '';
      localStorage.seItem('lista-vue', JSON.stringify(this.tareas));
    },
    editarTarea: function(index){
      this.tareas[index].estado = true;
      localStorage.seItem('lista-vue', JSON.stringify(this.tareas));
    },
    eliminar: function(index){
      this.tareas.splice(index, 1);
      localStorage.seItem('lista-vue', JSON.stringify(this.tareas));
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