const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "593733192905654272") return console.log("This user isn't Bot Owner")
    let msg = message.content.slice();
    const mc = member.guild.channels.cache.find(channels => channel.id === "745487429602902217");
    mc.send(`${msg.slice()}`);
}

module.exports.config = {
    name: "say",
    description: "To say something",
    usage: "k!say",
    accessableby: "Bot Owner",
    aliases: []
}