import Vue from 'vue'
import InternetPlans from './InternetPlans.vue'

const Components = {
  InternetPlans
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
