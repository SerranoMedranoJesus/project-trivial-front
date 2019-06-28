<template>
  <v-content>
    <v-container fluid class="mt-5 mb-5">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registro 🎭</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="user.name" prepend-icon="person" name="name" label="Nombre carnavalero" type="text" :rules="user.nameRules" :counter="10"></v-text-field>
                <v-text-field v-model="user.email" prepend-icon="email" label="Email" type="email" :rules="user.emailRules" required></v-text-field>
                <v-text-field v-model="user.password" prepend-icon="lock" name="password" label="Contraseña" id="password" :rules="user.passwordRules" type="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions row wrap>
              <v-btn to="/login" class="success ml-2" block>Ir a Inicio de sesión</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="info mr-2" block @click="singUp()">Acepta tu registro</v-btn>
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
            email: '',
            emailRules: [
              v => !!v || 'E-mail es requerido',
              v => /.+@.+/.test(v) || 'E-mail no es valido'
            ],
            name: '',
            nameRules: [
              v => !!v || 'Nombre es requerido',
              v => v.length <= 10 || 'Nombre debe tener menos de 10 caracteres'
            ],
            password: '',
            passwordRules: [
              v => !!v || 'Contraseña es requerida',
              v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
              'La contraseña debe contener una letra mayúscula, un carácter numérico y un carácter especial.'
            ]
          }
        }
    },
    methods: {
      singUp() {
        let newUser = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        }
        axios.post('http://localhost:8080/api/v1/user', newUser)
          .then((response) => {
            if(response.status === 201) {
              alert('Vamos a logearnos pishita')
              this.$router.replace('/login')
            }
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
</script>
