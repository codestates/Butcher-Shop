const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
    if (!isAuthorized(req)) {
        res.status(405).send('invalid')
    }
    const userInfo = await user.findOne({where: {
        userId: req.body.userId,
        password: req.body.password
    }})

    if (!userInfo) {
        res.status(406).send('incorrect id or password')
    } else {
        await user.destroy({where: {userId: req.body.userId, password: req.body.password}})
        res.status(206).clearCookie('jwt').send('good bye')
    }
}