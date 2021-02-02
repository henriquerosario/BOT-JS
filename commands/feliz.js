const discord = require('discord.js');
var pessoas = 0;
exports.run = (client, message, args) => {
    client.user.setActivity(`o ${message.author.username} esta feliz :)`)
    message.reply(`que bom!`)
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Deixa o Stories do Bot como: @pessoa_do_comando está feliz, por 10 segundos",
  usage: "feliz"
}