require('dotenv').config()

let getAge = (dateString) => {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    age--
  return String(age) + " years"
}
const BASIC_INFO = {
  name: 'Kaustubh',
  fullname: 'Kaustubh D',
  nickname: 'Kay',
  age: getAge('7/10/1998'),
  github: 'https://github.com.kaydee',
  linkedin: process.env.linkedin || '',
}

module.exports = BASIC_INFO