<template>
  <v-row>
    <v-col v-for="(forecast, index) in $store.state.forecasts" cols="12" sm="3" :key="index">
        <v-card>
          <v-img
            height="100"
            width="100"
            :src="$store.getters.getImgURL(index)"
            >
          </v-img>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ $store.getters.getDate(index) }}
              </v-list-item-title>
              <div>
                <span class="large">{{ $store.getters.getHour(index)}}</span>
                <span class="mx-2">{{ $store.getters.getDescription(index) }}</span>
                <span class="large">{{ $store.getters.getTemp(index) }}℃</span>
              </div>
            </v-list-item-content>
          </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  fetch({ $axios, store }) {
    return $axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Takizawa&APPID=${process.env.API_KEY}`)
    .then(res => {
      store.commit('initForecasts', res.data)
    })
  },
}
</script>
<style>
span.large {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>