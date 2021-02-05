import moment from 'moment'

export const state = () => ({
  forecasts: new Array(),
})

export const mutations = {
  initForecasts(state, fores) {
    state.forecasts = new Array()
    fores.forEach((elem) => state.forecasts.push(elem))
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
}
