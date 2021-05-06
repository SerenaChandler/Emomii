const User = require("./User")
// const Mood = require("./Mood");
const Post = require("./Post")

User.hasMany(Post, {
    foreignKey: "user_id",
});


Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})



module.exports = { User, Post};
