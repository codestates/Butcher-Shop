const { order_item } = require('../../models')

module.exports = async (req, res) => {
  try{
    const order = req.body
    for (let i = 0; i < order.length; i++) {
      await order_item.create({
        name: order[i].name,
        price: order[i].price,
        order_count: order[i].count
      })
    }
    return res.status(200).send('ok')
  } catch(err) {
      throw err
  }
}