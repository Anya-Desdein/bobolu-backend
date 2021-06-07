
module.exports = app => {
  app.get('/api/pic/:id', (req, res) => {
    res.json({
      imageBasicInfo: {
        name: 'Test image!',
        thumbnailUrl: '/img/test_t.png',
      },
      imageDetailInfo: {
        viewCount: 55,
        description: 'If you are trying to send a json file you can use streams',
        imageUrl: '/img/test.png',
      },
      score: {
        integerScore: 9,
        sameScoreImageCount: 45,
        voteCount: 32,
      },
      imageTags: [
        {
          name: 'girl',
          taggedImageCount: 133,
        },
        {
          name: 'yes',
          taggedImageCount: 666,
        }
      ],
    });
  });
}