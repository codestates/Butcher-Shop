module.exports = {
  auth: require('./users/auth'),
  signup: require('./users/signup'),
  signin: require('./users/signin'),
  signout: require('./users/signout'),
  changePassword: require('./users/changePassword'),
  changeUserInfo: require('./users/changeUserInfo'),
  dropsign: require('./users/dropsign'),
  getItems: require('./items/getItems'),
  getRecipes: require('./recipes/getRecipes'),
  orderItems: require('./orders/orderItems'),
};
