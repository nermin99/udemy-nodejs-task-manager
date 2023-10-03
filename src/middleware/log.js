module.exports = async (req, res, next) => {
  console.info(
    `${req.method} ${req.protocol}://${req.get('host') + req.originalUrl}`
  )
  next()
}
