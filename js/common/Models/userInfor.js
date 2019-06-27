function getFullName(firstName, middleName, lastName) {
  if (middleName == undefined || middleName == null) {
    middleName = ''
  }
  if (firstName == undefined || firstName == null) {
    firstName = ''
  }
  if (lastName == undefined || lastName == null) {
    lastName = ''
  }

  return lastName.trim() + ' ' + middleName.trim() + ' ' + firstName.trim()
}

module.exports = {
  getFullName,
}
