module.exports = {
  discProductPrice({ price, discount }) {
    if (discount) {
      return price * (1 - discount)
    }
    else {
      return price
    }
  }
}