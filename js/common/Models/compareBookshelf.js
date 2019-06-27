function convertShelfData(shelf, isWarehouse = false) {
  let temp = shelf.trim()
  if (isWarehouse) {
    var arrrayTmp = temp.split('-')
    if (arrrayTmp.length == 3) {
      let floor = 0
      let type = arrrayTmp[0]
      let bookshelfId = parseInt(arrrayTmp[1])
      let row = parseInt(arrrayTmp[2])
      return {
        floor: floor,
        type: type,
        bookshelfId: bookshelfId,
        row: row,
      }
    }
  } else {
    let length = shelf.length
    let floor = parseInt(temp.substring(0, 1))
    let type = temp.substring(length - 1, length)
    let bookshelfId = parseInt(shelf.substring(1, length - 1))
    return {
      floor: floor,
      bookshelfId: bookshelfId,
      type: type,
      row: 0,
    }
  }
}
function compareBookshelf(shelf1, shelf2, isWarehouse = false) {
  let data1 = convertShelfData(shelf1, isWarehouse)
  let data2 = convertShelfData(shelf2, isWarehouse)
  if (
    data1.floor === data2.floor &&
    data1.bookshelfId === data2.bookshelfId &&
    data1.type === data2.type &&
    data1.row === data2.row
  ) {
    return true
  }
  return false
}

function convertShelfName(shelf, isWarehouse = false, isBookstore = 0) {
  if (isWarehouse) {
    return shelf
  } else {
    let temp = convertShelfData(shelf)
    let id = ''
    if (temp.bookshelfId < 10) {
      id = '00' + temp.bookshelfId.toString()
    } else if (temp.bookshelfId < 100) {
      id = '0' + temp.bookshelfId.toString()
    } else {
      id = temp.bookshelfId.toString()
    }
    return temp.floor + id + temp.type
  }
}
function validateBookshelf(shelf, isBookstore = '0') {
  let temp = shelf.trim()
  let reg

  if (isBookstore == '1') {
    reg = /^L\d{0,2}\-[a-zA-Z]{1}\-\d{1,3}\-\d{1,2}$/gi
  } else {
    reg = /^[a-zA-Z]{1,2}\-\d{0,3}\-\d{0,2}$/gi
  }
  if (reg.test(temp)) {
    return true
  }
  return false
}

function validateTote(tote, isWarehouse = false) {
  let temp = tote.trim()
  let reg
  if (isWarehouse) {
    reg = /^\d+$/gi
  } else {
    reg = /^\d+$/gi
  }
  if (reg.test(temp)) {
    return true
  }
  return false
}

module.exports = {
  compareBookshelf,
  convertShelfName,
  validateBookshelf,
  validateTote,
}
