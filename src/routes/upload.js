
module.exports = app => {
  app.post('/api/upload', (req, res) => {
    res.json({
      imageUrl: '/img/test.png',
      thumbnailUrl: '/img/test_t.png',
    });
  });
}
