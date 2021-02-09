<template>
        <v-select
          @change="handleSelect"
          v-model="select"
          :hint="`${select.name}, ${select.code}`"
          :items="items"
          item-text="name"
          item-value="code"
          label="場所選択"
          presistent-hint
          return-object
          single-line
        >
        </v-select>
</template>
<script>
export default {
  name: "select-places",

  data() {
    return {
      fixed: true,
      title: "Open Weather",
      select: {name: '滝沢市', code: 'Takizawa'},
      items: [
        { name: '札幌', code: 'Sapporo' },
        { name: '滝沢市', code: 'Takizawa' },
        { name: '東京', code: 'Tokyo' },
        { name: '大阪', code: 'Osaka' },
        { name: '高知市', code: 'Kochi' },
        { name: '佐賀市', code: 'Saga' },
        { name: '那覇市', code: 'Naha' },
        { name: '高知市', code: 'Kochi' },
        { name: 'Los Angeles', code: 'Los Angeles' },
        { name: 'New York', code: 'New York' },
        { name: 'London', code: 'London' },
      ],
    }
  },

  methods: {
    async handleSelect() {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.select.code}&APPID=${process.env.API_KEY}`
      await this.$axios.get(url)
            .then(res => {
              this.$store.commit('initForecasts', res.data)
            })
    }
  }

}
</script>
