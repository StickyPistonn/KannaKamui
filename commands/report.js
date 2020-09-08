const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let modRole = "745702507271028817";
    let reporter = "752033032763998209";
    let trial = "752052503977263144";
    if (message.member.roles.cache.has(modRole) || message.member.roles.cache.has(reporter) || message.member.roles.cache.has(trial)) {
        let User = message.mentions.users.first() || null;

        if (User == null) {
            return message.channel.send(`You didn't mention a user!`);
        } else {
            let Reason = message.content.slice() || null;
            message.channel.send("User has been reported!")
            if (Reason == null) {
                return message.channel.send(
                    `You did not specify a reason for the report!`
                );
            }
            let Avatar = User.displayAvatarURL();
            let Channel = message.guild.channels.cache.find(
                (ch) => ch.name === "reports"
            );
            if (!Channel)
                return message.channel.send(
                    `There's no channel in this server which is called \`reports\``
                );
            let Embed = new MessageEmbed()
                .setTitle(`User Report!`)
                .setDescription(
                    `The reporter ${message.author.tag} has reported the user ${User.tag}! `
                )
                .setColor(`RED`)
                .setThumbnail(Avatar)
                .addFields(
                    { name: "Reported on", value: `${message.channel}`, inline: true },
                    { name: "Reporter ID", value: `${message.author.id}`, inline: true },
                    { name: "Reporter Tag", value: `${message.author.tag}`, inline: true },
                    { name: "Reported ID", value: `${User.id}`, inline: true },
                    { name: "Reported Tag", value: `${User.tag}`, inline: true },
                    { name: "Reason", value: `${Reason.slice(22 + 9)}`, inline: true },
                    {
                        name: "Date (Month/Day/Year)",
                        value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
                        inline: true,
                    }
                );
            Channel.send(Embed);
        }
    } else message.channel.send(`You don't have permission to run this command!`);
}


module.exports.config = {
    name: "report",
    description: "Report rule breaker",
    usage: "k!report",
    accessableby: "Reporter",
    aliases: []
}