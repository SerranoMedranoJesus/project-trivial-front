<template>
  <v-toolbar class="primary">
    <v-btn to="/" color="white" flat><h1>🎭</h1></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-and-down">
      <v-btn v-if="$store.getters.isAuthUser" to="/quiz" color="white" flat>A jugar ! 🎭</v-btn>
      <v-btn v-if="$store.getters.isAuthUser" to="/stats" color="white" flat>Stats</v-btn>
      <v-btn v-if="$store.getters.isAuthUser" color="white" flat @click="logOut()"><v-icon>exit_to_app</v-icon> Salir</v-btn>
      <v-btn v-if="$store.getters.isnotAuthUser" to="/login" color="white" flat>Iniciar sesión</v-btn>
      <v-btn v-if="$store.getters.isnotAuthUser" to="/register" color="white" flat>Registro</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      logOut() {
          this.$store.commit('removeToken')
          this.$router.replace('/')
      }
    }
  }
</script>
