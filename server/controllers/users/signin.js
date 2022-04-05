const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const userInfo = await user.findOne({where: {email:req.body.email , password:req.body.password},
  });
  if(!userInfo) {
    res.status(404).send('invalid user')
  }
  else {
    await generateAccessToken(userInfo.dataValues).then((data)=>
     { res.cookie("jwt",data).status(200).send({message:'ok'})})
    
  }
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달

};
