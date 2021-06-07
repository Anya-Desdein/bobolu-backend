
module.exports = app => {
  app.post('/api/create', (req, res) => {
    res.json({      
      redirectUrl: '/pic/11', 
    });
  });
}
