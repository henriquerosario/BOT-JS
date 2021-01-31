const discord = require('discord.js');
var pessoas = 0;
exports.run = (client, message, args) => {
    client.user.setActivity(`o ${message.author.username} esta triste :(`)
    message.reply(`que triste!`)
}