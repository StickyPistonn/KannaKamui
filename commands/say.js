const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(member.roles.cache.find(r => r.name != "Staff Member")) return null
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