
module.exports = (app, db) => {
  app.get('/api/all-pics', async (req, res) => {
    const items =
      (await db.getLatestPics())
      .map(el => el.imageBasicInfo);

    res.json({
      items
    });
  });
}
