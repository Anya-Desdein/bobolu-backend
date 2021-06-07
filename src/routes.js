
const routes = [
  require('./routes/allPics'),
  require('./routes/pic'),
  require('./routes/upload'),
  require('./routes/create'),
];

module.exports = app => {
  routes.forEach(el => el(app)); 
};
