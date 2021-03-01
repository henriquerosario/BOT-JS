const Discord = require('discord.js');
const config = require("../config.json")

exports.run = async (client, message, args) => {

message.channel.send(
  new Discord.MessageEmbed()
  .setTitle("Meu Criador :)")
  .setDescription(`o henrique franchesco de almeida do rosario mais conhecido como <@!686010259860750456> é o meu criador\nUse o comando '${config.prefix}site' Para Seber O Site Do Henrique 🤠 \n AMIGUUUS:\n <@!643500963771973682>, Um Amigo Criador De Bots, Bot Dele <@!785932354132770886> ||Add Ele Ai||`)
)

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Descreve Meu Lindo Criador :3",
  usage: "author"
}