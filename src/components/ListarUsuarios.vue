<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Lista de Usuarios</h2>
    <!-- List Group para mostrar los usuarios -->
    <ul class="list-group">
      <li v-for="usuario in usuarios" :key="usuario.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>Nombre :{{ usuario.nombre }}</strong><br />
          <span>Correo :{{ usuario.email }}</span>
        </div>
        <!-- Botón para eliminar el usuario -->
        <button @click="removeUsuario(usuario.id)" class="btn btn-danger btn-sm">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'; 

export default {
  name: 'ListarUsuarios',  

  computed: {
    // Utiliza 'mapState' para mapear el estado global de Vuex a las propiedades locales del componente
    ...mapState({
      // Mapea la propiedad 'usuarios' del estado de Vuex a una propiedad local 'usuarios' en el componente
      usuarios: state => state.usuarios,  
    }),
  },

  mounted() {
  // Cargar datos o ejecutar acciones que necesitan que el DOM esté disponible.
  this.$store.dispatch('getUsuarios');
},

  methods: {
    // Mapea la acción 'removeUsuario' del store global a un método local en el componente
    ...mapActions(['removeUsuario']),  
  },
};
</script>

<style scoped>
</style>
