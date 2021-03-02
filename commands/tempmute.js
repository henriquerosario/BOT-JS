const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, database, con, cooldowns, ms, prefix, config) => {
if (message.author.id != "686010259860750456") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
      return
  };
}

let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    return message.reply("mensione alguem");
}

if(!args[0]) {
  return message.reply("quanto tempo? use (prefixo)tempmute tempo(atributo) @pessoa, atributos: D = dia, H = hora, M = minutos e m = milesegundos")
}
if (message.content.split(">")[1]) {
  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle(`RASÃO DO MUTE:`)
      .setDescription(message.content.split(">")[1])

      
  message.channel.send(comEmbed)
}
cooldowns.set(`${user.id}-mute`, Date.now() + ms(args[0]))
const cooldowndata = cooldowns.get(`${user.id}-mute`);
message.reply(`${message.author} o(a) ${user} foi mutado(a) por ${ms(parseInt(cooldowndata) - Date.now(), {long: true})} com sucesso`)
message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "muta alguem por um tempo",
  usage: "tempmute tempo(atributo) @nome_pessoa razão"
}