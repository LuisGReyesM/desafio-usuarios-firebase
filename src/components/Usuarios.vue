<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Agregar Usuario</h2>
    <form @submit.prevent="addUsuario">
      <div class="form-group">
        <label for="nombre">Nombre del usuario</label>
        <input id="nombre" v-model="usuario.nombre" type="text" class="form-control" placeholder="Nombre del usuario" required/>
      </div>
      
      <div class="form-group mt-3">
        <label for="email">Correo electrónico</label>
        <input id="email" v-model="usuario.email" type="email" class="form-control" placeholder="Correo electrónico" required/>
      </div>
      
      <button type="submit" class="btn btn-primary btn-block mt-4">
        Agregar Usuario
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Usuarios',
  data() {
    return {
      usuario: {
        nombre: '',
        email: '',
      },
    };
  },
  methods: {
    ...mapActions(['addUsuario']),
    async addUsuario() {
      try {
        // Llamar a la acción de Vuex para agregar el usuario
        await this.$store.dispatch('addUsuario', this.usuario);
        // Limpiar el formulario después de agregar
        this.usuario = { nombre: '', email: '' };
      } catch (error) {
        console.error('Error al agregar el usuario:', error);
      }
    },
  },
};
</script>

<style scoped>

</style>
