const { order_item } = require('../../models')

module.exports = async (req, res) => {
  try{
    console.log(req.body)
    await order_item.create(
      {where: {name: req.body.name, price: req.body.price}}
    ).then(res => {
      res.status(200).send('ok')
    })
  } catch(err) {
      throw err
  }}