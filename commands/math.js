const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let method = args[0];
    let firstNumber = Number(args[1]);
    let secondNumber = Number(args[2]);
    const operations = ['+', '-', 'x', '/'];

    if (!method) return message.reply("You didn't state a operation.");

    if (!operations.includes(method)) return message.reply("When choosing an operation, select +, -, x, /.");

    if (!args[1]) return message.reply("State two number to put into the calculation");

    if (!args[2]) return message.reply("State a number to put into the calculation");

    if (isNaN(firstNumber)) return message.reply("The first number you stated isn't a number");

    if (isNaN(secondNumber)) return message.reply("The second number you stated isn't a number");

    if (method === '+') {
        let doMath = firstNumber + secondNumber
        message.channel.send(`${doMath}`);
    }

    if (method === '-') {
        let doMath = firstNumber - secondNumber
        message.channel.send(`${doMath}`);
    }

    if (method === 'x') {
        let doMath = firstNumber * secondNumber
        message.channel.send(`${doMath}`);
    }

    if (method === '/') {
        let doMath = firstNumber / secondNumber
        message.channel.send(`${doMath}`);
    }
}

module.exports.config = {
    name: "math",
    description: "Solve a math for you",
    usage: "k!math",
    accessableby: "Members",
    aliases: ['calc']
}