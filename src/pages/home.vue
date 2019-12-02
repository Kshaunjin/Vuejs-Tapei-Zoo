<template>
  <v-app id="inspire">
    <navigation></navigation>
    <navbar></navbar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
      <v-carousel dark=true>
        <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
        >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
      </v-col>
    </v-row>
      </v-container>
    </v-content>
    <footers></footers>
  </v-app>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Navigation from '../components/navigation.vue'
import Footers from '../components/footer.vue'
import axios from 'axios'

export default {
  components: {
    Navbar,
    Navigation,
    Footers
  },
  props: {
  },
  data () {
    return {
      info: null,
      input: {
        animal: ''
      },
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ]
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
  },
  mounted () {
    axios
      .get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613&q=bear')
      .then(response => (this.info = response.data.result.results[1].A_Behavior))
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>
