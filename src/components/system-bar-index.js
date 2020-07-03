import Vue from 'vue'
import SystemBar from './SystemBar.vue'

const Components = {
  SystemBar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
