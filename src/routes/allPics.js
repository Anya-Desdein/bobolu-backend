
module.exports = app => {
  app.get('/api/all-pics', (req, res) => {
    res.json({
      items: [
        {
          id: '11',
          name: 'Test image 1!',
          thumbnailUrl: '/img/test_t.png',
        },
        {
          id: '22',
          name: 'Test image 2!',
          thumbnailUrl: '/img/test_t.png',
        },
        {
          id: '33',
          name: 'Test image 3!',
          thumbnailUrl: '/img/test_t.png',
        },
        {
          id: '44',
          name: 'Test image 4!',
          thumbnailUrl: '/img/test_t.png',
        },
      ]
    });
  });
}
