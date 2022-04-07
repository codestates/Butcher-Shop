const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  // res.send()시 앞에 return을 써 주어야
  // 한번의 requst에 2번 이상의 response가 반환되지 않는다.

  // 입력값이 하나라도 없으면 에러 반환
  if(Object.entries(req.body).every(item=>item[1])) {
    return res.status(422).send('insufficient parameters supplied')
  }

  // 중복되는 아이디가 있다면 에러 처리
  if(await user.findOne({where: {userId:req.body.userId}})) {
    return res.status(409).send('userId exists');
  }

  // 신규 유저라면 데이터를 DB에 입력
  const userInfo = Object.assign({},req.body) // 객체를 복사한다.
  userInfo.authority = 0; // 일반 유저일 시 authority값이 0
  await user.create(userInfo)

  // 토큰을 만들서어 발행
  let token = await generateAccessToken(req.body);
  return res.cookie("jwt",token).status(201).send({message:'ok'})
};