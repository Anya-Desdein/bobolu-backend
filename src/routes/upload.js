const path = require('path');

const imagesLocation = 'files/img';
const relativeUrl = '/img/';

function rnd() {
  return Math.random().toString(36).substr(2, 10);
}

module.exports = app => {
  app.post('/api/upload', async (req, res) => {
    const file = req.files.file;
    const ext = path.extname(file.name);
    const randomName = rnd() + rnd() + rnd();
    const filename = `${randomName}${ext}`;
    file.mv(path.join(imagesLocation, filename));
    res.json({
      imageUrl: `${relativeUrl}${filename}`,
      thumbnailUrl: `${relativeUrl}${filename}`,
    });
  });
}
