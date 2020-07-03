import Vue from 'vue'
// import Footer from './Footer.vue'
import Popup from './Popup.vue'
import PopupError from './PopupError.vue'
import PopupEmailDisabled from './PopupEmailDisabled.vue'
// import SystemBar from './SystemBar.vue'

const Components = {
  // SystemBar,
  // Footer,
  Popup,
  PopupError,
  PopupEmailDisabled
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
