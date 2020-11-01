<template>
<v-card flat class="transparent mx-auto mt-12" :style="{ top: top }">
  <v-row width="100%" justify="center" class="mx-auto">
    <v-col style="min-width: 340px; max-width: 340px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">ABOUT PINEAPPLE NET</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14">{{ about }}</p>
          <p></p>
          <p class="left-14">{{ officeAddress }}</p>
          <p class="left-14" @click="call">
            <!-- <span width="10" height="10" class="mr-2" style="display: inline-block;">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9.77581 7.9031L8.23146 6.35859C7.92386 6.05222 7.41446 6.06153 7.09614 6.37996L6.31809 7.15784C6.26894 7.13074 6.21806 7.10245 6.16457 7.07242C5.67324 6.80019 5.00077 6.42705 4.29314 5.7189C3.58341 5.00926 3.20993 4.33576 2.93686 3.84412C2.90804 3.79203 2.88044 3.74181 2.85317 3.69412L3.37536 3.17271L3.63208 2.91567C3.95089 2.59678 3.95968 2.08752 3.65279 1.78026L2.10845 0.235575C1.80157 -0.0712539 1.29194 -0.0619457 0.973128 0.256949L0.537879 0.694697L0.549773 0.706505C0.403829 0.892728 0.281873 1.10751 0.191117 1.33912C0.107457 1.55959 0.0553713 1.76998 0.0315547 1.98079C-0.172366 3.67134 0.600165 5.21637 2.69671 7.31295C5.59478 10.2108 7.93024 9.99189 8.03099 9.9812C8.25043 9.95498 8.46072 9.90254 8.67444 9.81955C8.90405 9.72985 9.11868 9.60807 9.30479 9.46244L9.3143 9.47089L9.75524 9.03911C10.0734 8.72028 10.0825 8.21085 9.77581 7.9031Z" fill="white"/>
              </svg>
            </span> -->
            <v-icon>mdi-phone</v-icon> {{ officePhone }}
          </p>
          <p class="left-14">{{ officeEmail }}</p>
          <p class="left-14">ABN: {{ officeABN }}</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">CONNECT</p>
        </v-card-title>
        <v-card-text>
          <a :href="faceBook" target="_blank" style="text-decoration: none">
            <p class="left-14 ref">
              <!-- <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5.625 3.4375V2.1875C5.625 1.8425 5.905 1.5625 6.25 1.5625H6.875V0H5.625C4.58938 0 3.75 0.839375 3.75 1.875V3.4375H2.5V5H3.75V10H5.625V5H6.875L7.5 3.4375H5.625Z" fill="white"/>
              </svg> -->
              <v-icon>mdi-facebook</v-icon>
              <span style="margin-left: 8px; vertical-align: middle;">Facebook</span>
            </p>
          </a>
          <a :href="linkedIn" target="_blank" class="ref" style="text-decoration: none">
            <p class="left-14 ref">
              <!-- <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.793 3.8606H0.383978C0.277062 3.8606 0.19043 3.94727 0.19043 4.05414V11.7933C0.19043 11.9002 0.277062 11.9868 0.383978 11.9868H2.793C2.89991 11.9868 2.98655 11.9002 2.98655 11.7933V4.05414C2.98655 3.94727 2.89991 3.8606 2.793 3.8606Z" fill="white"/>
                <path d="M1.58965 0.0131836C0.71311 0.0131836 0 0.725519 0 1.60109C0 2.47705 0.71311 3.18966 1.58965 3.18966C2.4655 3.18966 3.17803 2.47702 3.17803 1.60109C3.17806 0.725519 2.4655 0.0131836 1.58965 0.0131836Z" fill="white"/>
                <path d="M8.92111 3.66821C7.95356 3.66821 7.23833 4.08415 6.80451 4.55676V4.05411C6.80451 3.94723 6.71787 3.86056 6.61096 3.86056H4.3039C4.19698 3.86056 4.11035 3.94723 4.11035 4.05411V11.7933C4.11035 11.9002 4.19698 11.9868 4.3039 11.9868H6.70765C6.81457 11.9868 6.9012 11.9002 6.9012 11.7933V7.96418C6.9012 6.67387 7.25168 6.17118 8.15114 6.17118C9.13073 6.17118 9.20857 6.97704 9.20857 8.03057V11.7933C9.20857 11.9002 9.2952 11.9869 9.40212 11.9869H11.8068C11.9137 11.9869 12.0003 11.9002 12.0003 11.7933V7.54824C12.0003 5.6296 11.6345 3.66821 8.92111 3.66821Z" fill="white"/>
              </svg> -->
              <v-icon>mdi-linkedin</v-icon>
               <span style="margin-left: 8px; vertical-align: middle;">Linkedin</span>
            </p>
          </a>
          <br>
          <br>
          <br>
          <p class="left-14 ref">FAQs & Support</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-card>
</template>

<style scoped>

* {
  color: #fff!important;
}
.footer--bottom-content {
  position: absolute;
  left: 0;
  margin-bottom: -4px;
  bottom: 16px;
}

.ref {
  cursor: pointer;
}
.left-16 {
  text-align: left;
  font-size: 16px;
}
.left-14 {
  text-align: left;
  font-size: 14px;
}
</style>

<script>

// import { VRow, VCol, VCard, VCardTitle, VCardText } from 'vuetify/lib'

import { mapState } from 'vuex'

export default {
  name: 'FooterBottomContent',
  components: {
    // VRow,
    // VCol,
    // VCard,
    // VCardTitle,
    // VCardText
  },
  props: ['top'],
  computed: {
    ...mapState(['viewportWidth', 'officePhone', 'officeAddress', 'officeEmail', 'officeABN', 'linkedIn', 'faceBook']),
    ...mapState('content', ['about', 'copyright'])
  },
  methods: {
    call () {
      window.open(`tel:${this.officePhone}`)
    }
  }
}
</script>
