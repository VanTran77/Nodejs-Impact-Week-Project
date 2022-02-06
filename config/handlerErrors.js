const handlerError = (err) => {
const errs = {}
Object.values(err.errors).forEach((data) => {
      errs[data.properties.path] = data.properties.message
      })
      return errs
}
module.exports = {handlerError}