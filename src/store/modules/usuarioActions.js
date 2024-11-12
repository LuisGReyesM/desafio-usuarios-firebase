import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { getDb } from './fireStore'

export const actions = {
  // Acción para obtener la lista de usuarios desde Firebase
  async getUsuarios({ commit }) {
    try {
      // Obtiene la colección de usuarios desde Firestore
      const db = getDb();
      const usuariosCollection = collection(db, 'usuarios');
      
      // Obtiene los documentos de la colección 'usuarios'
      const usuariosSnapshot = await getDocs(usuariosCollection);
      
      // Mapea los documentos para obtener los datos y asignarles un id
      const usuariosList = usuariosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Llama a la mutación 'setUsuarios' para guardar los usuarios en el estado
      commit('setUsuarios', usuariosList);
    } catch (error) {     
      console.error('Error al obtener usuarios:', error.message);
    }
  },

  // Acción para agregar un nuevo usuario a Firebase
  async addUsuario({ commit }, usuario) {
    try {
      // Obtiene la colección 'usuarios' de Firestore
      const db = getDb();
      const usuariosCollection = collection(db, 'usuarios');
      
      // Agrega un nuevo documento a la colección 'usuarios' con los datos del nuevo usuario
      const docRef = await addDoc(usuariosCollection, usuario);
      
      // Llama a la mutación 'addUsuario' para agregar el usuario al estado
      commit('addUsuario', { id: docRef.id, ...usuario });
    } catch (error) {      
      console.error('Error al agregar usuario:', error.message);
    }
  },

  // Acción para eliminar un usuario de Firebase
  async removeUsuario({ commit }, usuarioId) {
    try {
      // Obtiene el documento específico del usuario a eliminar usando su id
      const db = getDb();
      const usuarioDoc = doc(db, 'usuarios', usuarioId);
      
      // Elimina el documento del usuario de la base de datos
      await deleteDoc(usuarioDoc);
      
      // Llama a la mutación 'removeUsuario' para eliminar el usuario del estado
      commit('removeUsuario', usuarioId);
    } catch (error) {      
      console.error('Error al eliminar usuario:', error.message);
    }
  },
};
