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
        <div class="my-2">
          <v-card-text>
        <span class="subheading">Select Animal</span>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple--text text--accent-4"
          mandatory
        >
          <v-chip v-for="size in sizes" :key="size" :value="size" @click="getData(size)" color="blue">
            {{ size }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
        </div>
         <v-col v-for="(item, index) in bear" :key='index' >
           <v-card class="d-inline-block mx-auto">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-img :src="item.A_Pic01_URL"
                    height="150"
                    width="150"></v-img>
                </v-col>
                <v-col
                  class="text pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <p class="display-1 text--primary">
                        {{item.A_Pic01_ALT}}
                      </p>
                      {{ item.A_Name_Ch}}
                      {{ item.A_Name_En}}
                      <v-chip
                        class="ma-2"
                        color="green"
                        text-color="white"
                      >
                        {{ item.A_Family}}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-col>
                 <v-card
                    color="#385F73"
                    dark
                 >
                    {{ item.A_Behavior }}
                 </v-card>
              </v-row>
            </v-container>
           </v-card>
         </v-col>
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
      bear: null,
      value: null,
      url: 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613&q=',
      goal: '',
      selection: 'lion',
      sizes: ['lion', 'penguin', 'bear', 'deer', 'otter'
      ],
      input: {
        animal: ''
      }
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    getData: function (value) {
      this.goal = this.url + value
      axios
        .get(this.goal)
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
