const { recipe } = require('../../models');

module.exports = async (req, res) => {
    if(!req.query.name)
        return res.status(200).json([])
    const recipes = await recipe.findAll({ where: { material: req.query.name } })
    return res.status(200).json(recipes)
}