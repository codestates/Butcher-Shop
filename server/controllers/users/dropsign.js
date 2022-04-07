const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
    if (!isAuthorized(req)) {
        res.status(405).send('invalid')
    } else {
        await user.destroy({where: {userId: req.body.userId}})
        res.status(206).clearCookie('jwt').send('good bye')
    }
}