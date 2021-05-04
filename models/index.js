const User = require("./User");
const Mood = require("./Mood");
const Entry = require("./Entry");

User.hasMany(Entry, {
    foreignKey: "user_id",
});

User.hasMany(Mood, {
    foreignKey: "user_id",
    onDelete: "cascade",
});

Entry.hasMany(Mood, {
    foreignKey: "entry_id",
    onDelete: "cascade",
});

Entry.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})

Mood.belongsTo(Entry, {
    foreignKey: "entry_id",
    onDelete: "cascade",
});

Mood.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "Cascade"
})

module.exports = { User, Entry, Mood};