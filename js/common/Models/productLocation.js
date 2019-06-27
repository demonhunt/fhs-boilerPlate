function productDetail(object) {
  this.entity_id = object.entity_id ? object.entity_id : null
  this.name = object.name ? object.name : ''
  this.image = object.image ? object.image : null
  this.sku = object.sku ? object.sku : ''
  this.childSku = object.childSku ? object.childSku : ''
  this.unit = object.unit ? object.unit : ''
  // this.type_id = object.type_id ? object.type_id : null;
  // this.final_price = object.final_price ? object.final_price : 0;
  this.productType = object.productType ? object.productType : null
  this.price = object.price ? object.price : null
  this.location =
    object.location && Object.keys(object.location).length > 0
      ? object.location.map(item => {
          return {
            bookshelfEntityId: item.bookshelfEntityId,
            bookshelfId: item.bookshelfId,
            decription: item.decription,
            quantity: parseInt(item.quantity),
          }
        })
      : []
}

function productLocation(object) {
  return new productDetail(object)
}

function groupByLocationBasedOnProduct(object, listProduct) {
  if (object == null) return []
  let result = []
  listProduct.map(product => {
    let products = object.filter(x => x.sku == product.sku)
    let productInfo = {}
    if (products.length > 0) {
      productInfo = {
        productId: products[0].product_id,
        name: products[0].name,
        sku: products[0].sku,
        image: products[0].image,
        productType: products[0].productType,
        price: products[0].price,
        location: products
          .map(location => {
            return {
              bookshelfEntityId: location.bookshelfEntityId,
              bookshelfId: location.bookshelfName,
              decription: location.decription,
              quantity: location.quantity,
            }
          })
          .filter(x => x.bookshelfEntityId != null),
        quantity: product.quantity,
      }
    }
    result.push(productInfo)
  })
  return result
}

function groupByLocationBasedOnBookshelf(object) {
  if (object == null) return []
  //create list bookshelf
  let listShelf = object
    .map(location => {
      return {
        bookshelfEntityId: location.bookshelfEntityId,
        bookshelfId: location.bookshelfName,
        floor: location.floor ? parseInt(location.floor) : 0,
        type: location.type,
        shelfId: location.bookshelfId ? parseInt(location.bookshelfId) : 0,
        decription: location.decription,
        row: location.row ? parseInt(location.row) : 0,
      }
    })
    .filter(
      (value, index, self) =>
        self.findIndex(x => x.bookshelfEntityId == value.bookshelfEntityId) ===
        index
    )
  listShelf.sort((a, b) => {
    if (a.floor < b.floor) return -1
    if (a.floor > b.floor) return 1
    if (a.type < b.type) return -1
    if (a.type > b.type) return 1
    if (a.shelfId < b.shelfId) return -1
    if (a.shelfId > b.shelfId) return 1
    if (a.row < b.row) return -1
    if (a.row > b.row) return 1
    return 0
  })
  listShelf.map(shelf => {
    let products = object.filter(
      x => x.bookshelfEntityId == shelf.bookshelfEntityId
    )
    shelf.listProduct = products.map(product => {
      return {
        productId: product.product_id,
        name: product.name,
        sku: product.sku,
        image: product.image,
        productType: product.productType,
        price: product.price,
      }
    })
  })
  return listShelf
}

function mixMediaGalleryWithImage(media_gallery, image) {
  var images = []
  images.push({
    file: image ? image : '',
  })
  if (Object.keys(media_gallery).length > 0) {
    media_gallery.images.map(function(item) {
      if (item.file !== image) {
        images.push(new parseImageInMediaGallery(item))
      }
    })
  }
  return images
}

function parseImageInMediaGallery(object) {
  this.file = object.file ? object.file : ''
}
module.exports = {
  productLocation,
  groupByLocationBasedOnProduct,
  groupByLocationBasedOnBookshelf,
  mixMediaGalleryWithImage,
}
