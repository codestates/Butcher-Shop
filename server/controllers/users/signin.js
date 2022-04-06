const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const userInfo = await user.findOne({where: {userId:req.body.userId , password:req.body.password},
  });
  if(!userInfo) {
    res.status(404).send('invalid user')
  } else {
    await generateAccessToken(userInfo.dataValues).then((data)=>
     { res.cookie("jwt",data).status(200).send({message:'ok'})})
  }
};