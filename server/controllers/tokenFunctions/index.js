require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: async(data) => {
    let token = await sign(data, process.env.ACCESS_SECRET)
    return token;
    // TODO: Access token으로 sign합니다.
    // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
  },
  sendAccessToken: (res, accessToken) => {
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    res.json({ message: 'ok' });
  },
  isAuthorized: (req) => {
   if(!req.headers.cookie) {
     return;
   }
    let authtoken = req.headers.cookie.split('=')[1].split(' ')[0];
    let clonetoken = authtoken.slice(0,authtoken.length-1)
    let decodedata ;
    
    verify(clonetoken,process.env.ACCESS_SECRET,(err,decoded)=> {
      decodedata = decoded;
    });
    return decodedata;
    
    // TODO: JWT 토큰 정보를 받아서 검증합니다.
    // HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
  }
};
