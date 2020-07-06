import Vue from 'vue'
import HowToConnect from './HowToConnect.vue'

const Components = {
  HowToConnect
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
