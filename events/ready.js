const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`Kanna has been loaded!`)
    bot.user.setActivity("with you :> | k!help", { type: "PLAYING" });
}