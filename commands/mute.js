const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};

let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    return message.reply("mensione alguem");
}

if(!args[0]) {
  return message.reply("quanto tempo?")
}

cooldowns.set(`${user.id}-${message.guild.id}-mute`, Date.now() + ms(args[0]))

message.reply(`${message.author} o(a) ${user} foi mutado(a) por ${args[0]} milesegundos com sucesso`)
message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "muta alguem",
  usage: "!mute tempo (em milisegundos) @nome_pessoa"
}