const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(member.roles.cache.find(r => r.name === "Muted")) return message.reply(`This member is already muted`); 
            if(member.roles.cache.find(r => r.name === "Trial Admin")) return message.reply(`You can't mute trial staffs.`);
            if(member.roles.cache.find(r => r.name === "Trial Moderator")) return message.reply(`You can't mute trial staffs.`); 
            if(member.roles.cache.find(r => r.name === "Staff")) return message.reply(`You can't mute staffs.`);
            if(member.roles.cache.find(r => r.name === "Ping Breathing, 5th Form: Staff")) return message.reply(`You can't mute staffs.`);
            if(!member) return message.reply('Tag the person you want to mute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.add(role.id);
            const embed = new Discord.MessageEmbed()
                .setColor(0x43B581)
                .setDescription(`<:check:750364210176983182> ***${member.user.tag}  was muted***`)
            message.channel.send(embed)

            setTimeout( function () {
                member.roles.remove(role.id);
                const embed = new Discord.MessageEmbed()
                .setColor(0x43B581)
                .setDescription(`<:check:750364210176983182> ***${member.user.tag}  was unmuted***`)
                message.channel.send(embed)
            }, ms(time));

        } else {
            return message.channel.send("You don't have permission to run this command!")
        }
    }
module.exports.config = {
    name: "mute",
    description: "Mute a person",
    usage: "k!mute",
    accessableby: "Staffs",
    aliases: ['tempmute', 'mute']
}