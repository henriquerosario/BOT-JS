const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.author.id != "686010259860750456") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
      return
  };
}

let user;
if (message.mentions.users.first() || client.users.cache.get(args[0])) {
  user = message.mentions.users.first() || client.users.cache.get(args[0]);
} else {
    return message.reply("mensione alguem");
}

if(!user) {
  return message.reply("Quem?")
}

cooldowns.set(`${user.id}-mute`, 0)
await eco.ensure(`${user.id}`, 0);
eco.set(`${user.id}-mute`, 0);
const cooldowndata = cooldowns.get(`${user.id}-mute`);
message.reply(`${message.author} o(a) ${user} foi desmutado(a) com sucesso`)
message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Desmuta alguem",
  usage: "desmute @nome_pessoa",
  category: "mod"
}