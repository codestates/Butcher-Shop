const { order_item } = require('../../models')

module.exports = async (req, res) => {
  try{
    await order_item.create({
      where: {
        name: req.body.name,
        price: req.body.price
      }
    })
    return res.status(200).send('ok')
  } catch(err) {
      throw err
  }
}