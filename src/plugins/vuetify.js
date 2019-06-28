import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#000',
    secondary: '#fff',
    error: '#fb0000',
    info: '#0032fb',
    success: '#168911',
    warning: '#fbec00'
  },
  iconfont: 'md',
  option: {
    customProperties: true
  }
})
