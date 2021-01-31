const discord = require('discord.js');
exports.run = (client, message, args) => {
  message.member.roles.remove("804234677844967454")
  message.member.roles.add("804006571171643424")
  message.delete()
  message.reply(`confirmou ser legal`)
}