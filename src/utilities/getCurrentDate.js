const getCurrentDate = () => {
  const date = new Date()
  var day = String(date.getDate()).padStart(2, '0')
  var month = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export default getCurrentDate
