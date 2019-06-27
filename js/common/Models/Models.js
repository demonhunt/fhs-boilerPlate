import skuProductProfile from './skuProductProfile'
import searchData from './searchData'
import {
  productLocation,
  groupByLocationBasedOnProduct,
  groupByLocationBasedOnBookshelf,
  mixMediaGalleryWithImage,
} from './productLocation'
import {
  compareBookshelf,
  convertShelfName,
  validateBookshelf,
  validateTote,
} from './compareBookshelf'
import { getFullName } from './userInfor'
import productBlock from './productBlock'
import { inventoryProduct } from './inventoryProduct'

function Models() {}
Models.skuProductProfile = skuProductProfile
Models.searchData = searchData
Models.productLocation = productLocation
Models.groupByLocationBasedOnProduct = groupByLocationBasedOnProduct
Models.groupByLocationBasedOnBookshelf = groupByLocationBasedOnBookshelf
Models.compareBookshelf = compareBookshelf
Models.convertShelfName = convertShelfName
Models.validateBookshelf = validateBookshelf
Models.validateTote = validateTote
Models.getFullName = getFullName
Models.productBlock = productBlock
Models.mixMediaGalleryWithImage = mixMediaGalleryWithImage
Models.inventoryProduct = inventoryProduct
module.exports = Models
