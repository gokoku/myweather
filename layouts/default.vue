<template>
  <v-app dark>
    <v-app-bar
      dense
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-col cols="2">
        <SelectPlaces />
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <p>{{ city }}</p>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new $moment().format('YYYY/MM/DD') }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SelectPlaces from '../components/SelectPlaces'
export default {
  name: "layouts",
  components: {
    SelectPlaces
  },

  computed: {
    city() {
      return this.$store.state.city
    }
  },
  data() {
    return {
      title: 'Open Weather',
      fixed: false
    }
  }


}
</script>
