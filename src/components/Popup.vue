<template>
  <v-row justify="center">
    <v-dialog v-model="opened" persistent width="320">
      <v-card class="popup-card homefone pa-0" min-height="320" @click="$emit('update:opened', false)">
        <v-toolbar
          dark
          :color="colored"
        >
          <v-toolbar-title>
            <h3>
              {{ header }}
            </h3>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <figure style="position: absolute; bottom: -8px; right: 0; z-index: 0">
            <svg width="173" height="158" viewBox="0 0 173 158" fill="none">
              <g style="mix-blend-mode:multiply">
                <path d="M173 3.05176e-05C77.4548 2.21647e-05 7.62439e-06 70.7 0 157.913L163 157.913C168.523 157.913 173 153.436 173 147.913L173 3.05176e-05Z" fill="#E6FED8"/>
                <path d="M173 41.2199C102.395 41.2199 45.1581 93.4651 45.1581 157.913L153 157.913C162.428 157.913 167.142 157.913 170.071 154.984C173 152.055 173 147.341 173 137.913L173 41.2199Z" fill="#D8FEC2"/>
                <path d="M173 84.1815C128.389 84.1815 92.2243 117.192 92.2243 157.913L163 157.913C168.523 157.913 173 153.436 173 147.913L173 84.1815Z" fill="#C2E9AB"/>
              </g>
            </svg>
          </figure>
        </v-card-text>
        <v-card-text class="popup-content text-center ma-auto pa-12">
          <p class="mt-12">
            {{ message }}
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>

.popup-card {
  height: max-content!important;
  overflow: hidden;
}

.popup-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
h3 {
  color: #fff;
  user-select: none;
}
p {
  margin-top: 24px;
  text-align: center;
  user-select: none;
}
/* button {
  bottom: -32px;
} */

</style>

<script>

export default {
  name: 'Popup',
  props: ['opened', 'type', 'title', 'text', 'color'],
  data: () => ({
    titles: {
      success: 'Thanks!',
      error: 'Error',
      disabled: 'Sorry...'
    },
    texts: {
      success: 'We\'ll get back to you shortly',
      error: 'Please fill the form fields',
      disabled: 'You have no access to do this action'
    },
    colors: {
      success: '#4CAF50',
      error: '#900',
      disabled: '#444'
    }
  }),
  computed: {
    header () {
      return this.type ? this.titles[this.type] : this.title ? this.title : 'Pineapple NET'
    },
    message () {
      return this.type ? this.texts[this.type] : this.text ? this.text : 'The action was successfully completed'
    },
    colored () {
      return this.type ? this.colors[this.type] : this.color ? this.color : '#000'
    }
  }
}
</script>
