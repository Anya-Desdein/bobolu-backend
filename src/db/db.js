
// Mock database, temporarily based on a file

const fs = require('fs');

const dbPath = 'storage/db.json';

class Db {
  async loadJson() {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  }

  async saveJson(data) {
    const content = JSON.stringify(data);
    fs.writeFileSync(dbPath, content);
  }

  getNextId(data) {
    return data
      .map(el => el.imageBasicInfo.id)
      .reduce((a, b) => Math.max(a, b), 0) + 1;
  }

  
  async getLatestPics() {
    const data = await this.loadJson();
    return data;
  }

  async getPic(id) {
    const data = await this.loadJson();
    return data.find(el => el.imageBasicInfo.id === id);
  }

  async createPic(formData) {
    const data = await this.loadJson();
    const id = this.getNextId(data);

    const newImage = {
      imageBasicInfo: {
        id,
        name: formData.name,
        thumbnailUrl: formData.thumbnailUrl,
      },
      imageDetailInfo: {
        viewCount: 0,
        description: formData.description,
        imageUrl: formData.imageUrl,
      },
      score: {
        integerScore: null,
        sameScoreImageCount: null,
        voteCount: 0,
      },
      imageTags: []
    };

    data.unshift(newImage);

    await this.saveJson(data);

    return id;
  }
}

module.exports = Db;
