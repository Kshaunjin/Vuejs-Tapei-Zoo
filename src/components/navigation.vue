<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-list dense>
      <v-list-item link to="/home">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
              Home
          </v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/show">
          <v-list-item-action>
            <v-icon>mdi-cat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Animals</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/search">
          <v-list-item-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  })
}
</script>
