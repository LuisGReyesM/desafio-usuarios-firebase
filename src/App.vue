<template>
  <div id="app" class="container mt-5">
    <h1 class="mb-4 text-center">Gestión de Usuarios</h1>
    <div class="row">
      <!-- Componente Usuarios con contenedor redondeado -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm rounded p-4">
          <Usuarios />
        </div>
      </div>

      <!-- Componente ListarUsuarios con contenedor redondeado -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm rounded p-4">
          <ListarUsuarios />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Usuarios from './components/Usuarios.vue';
import ListarUsuarios from './components/ListarUsuarios.vue';

export default {
  name: 'App',
  components: {
    Usuarios,
    ListarUsuarios,
  },
};
</script>

<style>
/* Estilos adicionales si es necesario */
</style>
