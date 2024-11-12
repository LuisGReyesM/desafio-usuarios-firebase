export const mutations = {  
  setUsuarios(state, usuarios) {
    // Actualiza el estado de 'usuarios' con la lista de usuarios recibida
    state.usuarios = usuarios;
  },
 
  addUsuario(state, usuario) {
    // Agrega un nuevo usuario al array de 'usuarios'
    state.usuarios.push(usuario);
  },

  removeUsuario(state, usuarioId) {
    // Filtra el array de 'usuarios' para eliminar el usuario con el ID proporcionado
    state.usuarios = state.usuarios.filter(usuario => usuario.id !== usuarioId);
  },
};
