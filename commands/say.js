const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "593733192905654272") return console.log("This user isn't Bot Owner")
    if (message.author.id != "294553395807911936") return console.log("This user doesn't have access")
    let msg = message.content || null;
    let Channel = message.guild.channels.cache.find(
        (ch) => ch.id === "718918454459236385"
    );
    Channel.send(`${msg.slice(6)}`);
}

module.exports.config = {
    name: "say",
    description: "To say something",
    usage: "k!say",
    accessableby: "Bot Owner",
    aliases: []
}