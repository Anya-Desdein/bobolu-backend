
module.exports = app => {
  app.get('/api/all-pics', (req, res) => {
    res.json({
      items: [
        {
          name: 'Test image!',
          thumbnailUrl: '/img/test.png',
        }
      ]
    });
  });
}
