function skuProductProfile(object) {
  this.type_id = object.type_id ? object.type_id : ''
  this.entity_id = object.entity_id
  this.name = object.name
  this.image = object.image
  this.final_price = object.final_price ? object.final_price : 0
  this.price = object.price ? object.price : 0
  this.min_price = object.min_price ? object.min_price : 0
  this.max_price = object.max_price ? object.max_price : 0
  this.discount_percent = object.discount_percent ? object.discount_percent : 0
  this.rating_summary = object.rating_summary
    ? object.rating_summary.rating_summary_fahasa
    : null
  this.reviews_count = object.rating_summary
    ? object.rating_summary.reviews_count_fahasa
    : null
  this.soon_release = object.soon_release !== '1' ? 0 : 1
  this.stock_available = object.stock_available ? object.stock_available : ''
  this.sku = object.sku ? object.sku : ''
}
module.exports = function(object) {
  return new skuProductProfile(object)
}
