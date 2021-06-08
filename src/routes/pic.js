
module.exports = (app, db) => {
  app.get('/api/pic/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const pic = await db.getPic(id);
    res.json(pic);
  });
}