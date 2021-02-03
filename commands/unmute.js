const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};

let user;
if (message.mentions.users.first() || client.users.cache.get(args[0])) {
  user = message.mentions.users.first() || client.users.cache.get(args[0]);
} else {
    return message.reply("mensione alguem");
}

if(!args[0]) {
  return message.reply("quanto tempo? use !mute tempo(atributo) @pessoa, atributos: D = dia, H = hora, M = minutos e m = milesegundos")
}

cooldowns.set(`${user.id}-${message.guild.id}-mute`, 0)
const cooldowndata = cooldowns.get(`${user.id}-${message.guild.id}-mute`);
message.reply(`${message.author} o(a) ${user} foi desmutado(a) com sucesso`)
message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Desmuta alguem",
  usage: "desmute @nome_pessoa"
}