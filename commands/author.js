const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(
  new Discord.MessageEmbed()
  .setTitle("Meu Criador :)")
  .setDescription("o henrique franchesco de almeida do rosario mais conhecido como <h1>henrique50</h1> é o meu criador\n é só isso por enquanto... ")
)

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Descreve Meu Lindo Criador :3",
  usage: "author"
}