const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Commands:`)
            .setDescription('purge | mute | unmute | kick | vcban | vcunban | math | report')
            .setColor(0x337FD5)
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Description** ${command.config.description || "There's no Description for this command."}
            - **Usage:** ${command.config.usage || "No Usage"}
            - **Permissions:** ${command.config.accessableby || "Members"}
            - **Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor(0x337FD5)

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "Show current available commands.",
    usage: "k!help",
    accessableby: "Members",
    aliases: []
}