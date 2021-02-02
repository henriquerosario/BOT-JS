const discord = require("discord.js");
const canvacord = require("canvacord");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.delete() 
  message.delete()
  

  const msge = await message.channel.send(
    new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription("MAQUINA DE TICKETS REAJA PARA ABRIR UM")
  )
  msge.react("🎫")
}
exports.help = {}