function productProfile(object) {
  this.type = object.type ? object.type : ''
  this.entity_id = object.productId
  this.name = object.name
  this.image = object.image
  this.min_price = object.minPrice ? object.minPrice : 0
  this.max_price = object.maxPrice ? object.maxPrice : 0
  this.final_price = object.finalPrice ? object.finalPrice : 0
  this.price = object.originalPrice ? object.originalPrice : 0
  this.discount_percent = object.discount_percent ? object.discount_percent : 0
  if (object.rating_summary) {
    this.rating_summary = object.rating_summary.rating_summary_fhs
      ? object.rating_summary.rating_summary_fhs
      : null
    this.reviews_count = object.rating_summary.reviews_count_fhs
      ? object.rating_summary.reviews_count_fhs
      : null
  } else {
    this.rating_summary = null
    this.reviews_count = null
  }
  this.stock_available = object.stock_available ? object.stock_available : ''
  this.soon_release = object.soon_release !== '1' ? 0 : 1
  this.sku = object.sku ? object.sku : ''
}
function parseProducts(object) {
  return object.map(function(item) {
    return new productProfile(item)
  })
}
function parseCollections(object) {
  if (object == null) return null
  if (object.cms == null) return null
  if (object.cms.data == null) return null
  return parseProducts(object.cms.data)
}
module.exports = function(object) {
  var response = {
    totals: object.cms ? (object.cms.totals ? object.cms.totals : 0) : 0,
    success: object.success,
    data: parseCollections(object),
  }
  return response
}
