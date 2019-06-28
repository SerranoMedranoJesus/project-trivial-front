<template>
  <v-responsive>
    <v-container class="mt-5" fill-height>
      <v-layout align-center justify-center>
        <v-flex id="present">
          <h3 class="" id="text">Bienvenido al Trivial del carnaval de Cádiz</h3>

          <div class="mb-3 black--text" id="text">¿Cuánto sabes del Carnaval de Cádiz?</div>

          <v-btn
            class="mb-5 mt-4"
            color="#057a6b"
            large
            to="/quiz"
          >
            Vamos a jugar !
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
</template>

<style>

  #present {
    text-align: center;
    background:  linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6));
  }
  #text {
    margin: 4%;
    color: #057a6b;
    font-size: 55px
  }
</style>
