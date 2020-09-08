const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "593733192905654272") return message.channel.send("I'm sorry, you're not my Sticky Oniichan :sweat_smile:")

        try {
            await message.channel.send("Kanna is preparing to sleep...")
            process.exit()
        } catch (e) {
            message.channel.send("Error: $(e.message")
        }
    }

    module.exports.config = {
        name: "shutdown",
        description: "Shut the bot down",
        usage: "k!shutdown",
        accessableby: "Bot Owner",
        aliases: ['sd', 'sleep']
    }