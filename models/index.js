const User = require("./User");
const Mood = require("./Mood");
const Post = require("./Post");

User.hasMany(Post, {
    foreignKey: "user_id",
});

User.hasMany(Mood, {
    foreignKey: "user_id",
    onDelete: "cascade",
});

Post.hasMany(Mood, {
    foreignKey: "entry_id",
    onDelete: "cascade",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})

Mood.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "cascade",
});

Mood.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})

module.exports = { User, Post, Mood};
