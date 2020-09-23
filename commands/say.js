const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "593733192905654272") return console.log("This user isn't Bot Owner")
    let msg = message.content || null;
    let Channel = message.guild.channels.cache.find(
        (ch) => ch.id === "745487429602902217"
    );
    Channel.send(`${msg}`);
}

module.exports.config = {
    name: "say",
    description: "To say something",
    usage: "k!say",
    accessableby: "Bot Owner",
    aliases: []
}