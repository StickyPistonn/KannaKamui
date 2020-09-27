const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "404763865847562241") return console.log("This user doesn't have access")
    let msg = message.content || null;
    let Channel = message.guild.channels.cache.find(
        (ch) => ch.id === "745487429602902217"
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