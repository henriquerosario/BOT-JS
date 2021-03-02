const discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "686010259860750456") {
  if (!message.member.hasPermission('MANAGE_SERVER')) {
    message.reply("Sem Permisão!")
    return message.delete()
  }
  }
  message.delete()
  message.channel.send("**CONCORDO PLENAMENTE!!!**")
}
exports.help = {
  permisoes: "MANEJAR SERVER",
  description: "Faz q o Bot Diga: CONCORDO PLENAMENTE",
  usage: "vdd",
  category: "mod"
}