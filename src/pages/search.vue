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
        <v-form
          id="msgForm"
          v-on:keyup.enter="getData"
        >
          <v-text-field
            outlined
            prepend-inner-icon="search"
            v-model="input.animal"
          ></v-text-field>
        </v-form>
        <v-card>
          <v-container fluid>
            <div class="app1">
            {{ info }}
            </div>
          </v-container>
        </v-card>
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
      }
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    getData: function () {
      axios
        .get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613&q=bear')
        .then(response => (this.bear = response.data.result.results))
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  mounted () {
  }
}
</script>
