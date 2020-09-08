const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to run this command!");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member} has been kicked!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kick a user",
    usage: "k!kick",
    accessableby: "Staffs",
    aliases: ['kick']
}