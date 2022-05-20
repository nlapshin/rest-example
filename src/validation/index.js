
export default {
  isString(str) {
    return typeof str === 'string'
  },

  isNumber(number) {
    return typeof number === 'number' && !Number.isNaN(number)
  }
}
