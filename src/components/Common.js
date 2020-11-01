const token = ''


function getToken () {
  return this.token
}


function setToken (t) {
  this.token = t
}


export default {
  token,
  getToken,
  setToken
}