  
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

message.channel.send("o meu link para de invio é:\nhttps://discord.com/api/oauth2/authorize?client_id=797559448188354571&permissions=8&scope=bot")

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Manda O Meu Link de Envio",
  usage: "invite"
}