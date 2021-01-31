const discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()
  message.channel.send("**CONCORDO PLENAMENTE!!!**")
}