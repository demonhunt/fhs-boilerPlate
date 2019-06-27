function productDetail(object) {
  this.sku = object.sku
  this.name = object.name ? object.name : 'Không có thông tin sách'
  this.image = object.image ? object.image : ''
  this.price = object.price ? object.price : '0'
  this.bundleId = object.bundleId ? object.bundleId : '0'
}

function inventoryProduct(object) {
  return new productDetail(object)
}

module.exports = {
  inventoryProduct,
}
