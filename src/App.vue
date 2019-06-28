<template>
  <v-app id="app">
    <Header/>
    <v-content id="background">
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/blocks/Header'
import Footer from './components/blocks/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  },
  mounted() {
     
  }
}
</script>

<style>
  #app {
    font-family: 'Stylish', sans-serif;
  }
  #background {
    background: url("../src/assets/home.jpg") no-repeat;
    background-size: 100% 100%;
  }

</style>
