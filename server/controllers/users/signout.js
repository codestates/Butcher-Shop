module.exports = (req, res) => {
  res.status(205).clearCookie('jwt').send('Logged out successfully');
};