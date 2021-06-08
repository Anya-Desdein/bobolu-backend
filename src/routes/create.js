
module.exports = (app, db) => {
  app.post('/api/create', async (req, res) => {
    const formData = req.body;
    console.log("Saving entry:", formData);
    const id = await db.createPic(formData);
    res.json({      
      id, 
    });
  });
}
