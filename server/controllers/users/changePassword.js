const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
    // 쿠키가 없으면 에러 반환
    if (!req.headers.cookie) {
        return res.status(401).send(
            { data: null, message: 'there are no cookies' }
        );
    }

    // 쿠키가 맞지 않으면 에러 반환
    if (!isAuthorized(req)) {
        return res.status(401).send(
            { data: null, message: 'not authorized' }
        );
    }

    // 비밀번호가 맞지 않으면 에러 반환
    const userInfo = await user.findOne({
        where: {
            id: accessTokenData.id,
            password:req.body.oldPassword
        }
    })
    if (!userInfo) {
        return res.status(401).send(
            { data: null, message: 'password does not match' }
        );
    }

    // 새로운 비밀번호로 변경
    const accessTokenData = isAuthorized(req);
    await user.update(
        {password: newPassword},
        {where: {id:accessTokenData.id }}
    )

    // 처리 완료 메시지 반환
    res.status(200).send('password change ok')
}