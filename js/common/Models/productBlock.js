import globalSetting from '../setting'

function productBlock(object) {
  if (object == null) return
  this.totalItemQuantity =
    object.totalItemQty && !isNaN(object.totalItemQty)
      ? parseInt(object.totalItemQty)
      : 0
  this.productId = object.productId ? object.productId : null
  this.image = object.image
    ? globalSetting.WEB_URL + '/media/catalog/product/' + object.image
    : null
  this.name = object.name ? object.name : null
  this.bundleId2 = object.bundleId
  this.bundleName = object.bundleName ? object.bundleName : null
  if (object.bookshelfBundleId !== undefined) {
    if (
      object.bookshelfBundleId == null ||
      object.bookshelfBundleId == 'null'
    ) {
      this.bundleId = 0
    } else {
      this.bundleId = object.bookshelfBundleId
    }
  } else {
    if (object.bundleId == null || object.bundleId == 'null') {
      this.bundleId = 0
    } else {
      this.bundleId = object.bundleId
    }
  }
  this.sku = object.sku ? object.sku : null
  this.price = object.price ? object.price : null
  this.price = object.price && !isNaN(object.price) ? object.price : 0
  this.bookshelfId = object.bookshelfId ? object.bookshelfId : null
  this.bookshelfName = object.bookshelfName ? object.bookshelfName : null
  this.bookshelfQuantity = object.bookshelfQty
    ? parseInt(object.bookshelfQty)
    : 0
  this.requiredQuantity =
    object.totalQty && !isNaN(object.totalQty) ? parseInt(object.totalQty) : 0
  this.listOrder =
    object.listOrder && Object.keys(object.listOrder).length > 0
      ? object.listOrder.map(item => {
          return {
            orderId: item.orderId ? item.orderId : null,
            quantity: item.qty ? parseInt(item.qty) : 0,
          }
        })
      : []
  this.timeToPickAnItem =
    object.timeToPickAnItem && !isNaN(object.timeToPickAnItem)
      ? parseInt(object.timeToPickAnItem)
      : 0
}
module.exports = function(object) {
  let object2 = new productBlock(object)
  return object2
}
