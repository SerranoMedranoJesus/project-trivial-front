<template>
  <v-content>
    <v-container fluid class="mt-5 mb-5">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Inicio de sesión 🎭</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="user.name" prepend-icon="person" name="name" label="Nombre carnavalero" type="text" :rules="user.nameRules" :counter="10" required></v-text-field>
                <v-text-field v-model="user.password" prepend-icon="lock" name="password" label="Contraseña" id="password" :rules="user.passwordRules" type="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions row wrap>
              <v-btn to="/register" class="success ml-2" block>Registrate</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="info mr-2" block @click="logIn()">Iniciar sesión</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
        return{
          user: {
            valid: false,
            name: '',
            nameRules: [
              v => !!v || 'Nombre es requerido',
              v => v.length <= 10 || 'Nombre debe tener menos de 10 caracteres'
            ],
            password: '',
            passwordRules: [
              v => !!v || 'Contraseña es requerida'
            ]
          }
        }
    },
    methods: {
      logIn() {
        let user = {
          name: this.user.name,
          password: this.user.password
        }
        axios.post('http://localhost:8080/api/v1/login', user)
          .then((response) => {
            if(response.status === 200) {
              alert('Ya estas logeado pishita 🎭')
              this.$store.commit('setToken', response.data.token)
              localStorage.setItem('token', response.data.token)
              console.log(localStorage.getItem("token"))
              this.$router.replace('/')
            }
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
</script>
