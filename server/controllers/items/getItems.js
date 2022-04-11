const { item } = require('../../models');

module.exports = async (req, res) => {
    return res.status(200).json(await item.findAll().dataValues)
}