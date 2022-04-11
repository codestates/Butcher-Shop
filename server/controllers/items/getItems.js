const { item } = require('../../models');

module.exports = async (req, res) => {
    const hash = [
        '소고기',
        '돼지고기',
        '닭고기',
        '가공품'
    ]
    const result = (await item.findAll())
        .map(item=>{
            item.type = hash[item.type]     
            return item
        })
    return res.status(200).json(result)
}