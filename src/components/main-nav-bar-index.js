import Vue from 'vue'
import MainNavBar from './MainNavBar.vue'

const Components = {
  MainNavBar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
