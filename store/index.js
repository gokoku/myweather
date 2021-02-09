import moment from 'moment'

export const state = () => ({
  city: '',
  forecasts: new Array(),
})

export const mutations = {
  initForecasts(state, data) {
    state.forecasts = new Array()
    data.list.forEach((elem) => state.forecasts.push(elem))
    state.city = data.city.name
  },
}

export const getters = {
  getImgURL(state) {
    return function (index) {
      const icon = state.forecasts[index].weather[0].icon
      return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
  },
  getDate(state) {
    return function (index) {
      const date = state.forecasts[index].dt_txt
      return moment(date).format('YYYY年MM月DD日')
    }
  },
  getHour(state) {
    return function (index) {
      const date = state.forecasts[index].dt_txt
      return moment(date).format('HH時')
    }
  },
  getTemp(state) {
    return function (index) {
      const temp = Number(state.forecasts[index].main.temp) - 273.15
      return Math.round(temp * 10) / 10
    }
  },
  getDescription(state) {
    return function (index) {
      return state.forecasts[index].weather[0].description
    }
  },
  getCity() {
    return function () {
      return state.city
    }
  },
}
