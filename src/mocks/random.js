export default {
  // The maximum is exclusive and the minimum is inclusive
  int(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  },

  fromList(list) {
    return list[this.int(0, list.length)]
  },

  phone() {
    return new Array(9).fill(0).map(() => this.int(0, 10)).join('')
  },

  time() {
    return new Date().getTime() - this.int(0, 100000000000)
  },
}
