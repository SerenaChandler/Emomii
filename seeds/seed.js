const sequelize = require("../config/connection");
const { User, Post, Mood } = require("../models");

const userData = require("./userData.json");
const postData = require("./moodData.json");
const postData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const mood of moodData) {
    await Mood.create({
      ...mood,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: post[Math.floor(Math.random() * post.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
