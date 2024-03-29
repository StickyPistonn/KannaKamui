const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['MANAGE_MESSAGES']) && !message.member.hasPermission('MANAGE_MESSAGES')) return;

        let mutedRole = message.guild.roles.cache.find(role => role.name === "Muted");
        let memberRole = message.guild.roles.cache.get('745479174596067438');
        if(mutedRole) {
            member.roles.remove(mutedRole);
            const embed = new Discord.MessageEmbed()
            .setColor(0x43B581)
            .setDescription(`<:check:750364210176983182> ***${member.user.tag}  was unmuted***`)
            message.channel.send(embed)
        }
}

module.exports.config = {
    name: "unmute",
    description: "Unmute specific person",
    usage: "k!unmute",
    accessableby: "Staffs",
    aliases: []
}