const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
    try {
      let nopassworduser;
      if(!req.headers.cookie) {
        res.status(401).send({ data: null, message: 'not authorized' }); 
      }
      const accessTokenData =  isAuthorized(req);
      const userInfo = await user.findOne({where: {id:accessTokenData.id}})
      if(accessTokenData) {
        
        delete userInfo.dataValues['password'] 
        nopassworduser = {data: {userInfo: userInfo.dataValues}}
        res.status(200).json(nopassworduser)
    
      }
    } catch (err) {
    throw err;
  }
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.

}
