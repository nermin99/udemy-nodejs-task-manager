module.exports = async (req, res, next) => {
  console.log(req.method, req.path)
  next()
}