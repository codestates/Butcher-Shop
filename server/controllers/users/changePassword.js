const { user } = require('../../models');
const { isAuthorized } = require('../tokenfunctions');

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
    const accesstokendata = isAuthorized(req);
    const userinfo = await user.findOne({
        where: {
            id: accesstokendata.id,
            password:req.body.oldPassword
        }
    })
    if (!userinfo) {
        return res.status(401).send(
            { data: null, message: 'password does not match' }
        );
    }

    // 새로운 비밀번호로 변경
    await user.update(
        {password: req.body.newPassword},
        {where: {id:accesstokendata.id }}
    )

    // 처리 완료 메시지 반환
    res.status(200).send('password change ok')
}