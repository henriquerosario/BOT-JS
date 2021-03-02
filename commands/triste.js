const discord = require('discord.js');
var pessoas = 0;
exports.run = (client, message, args) => {
    client.user.setActivity(`o ${message.author.username} esta triste :(`)
    message.reply(`que triste!`)
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Deixa o Stories do Bot Como: @pessoa_do_comando esta triste, por 10 segundos",
  usage: "triste",
  category: "fun"
}