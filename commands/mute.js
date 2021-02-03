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



await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
await eco.set(`${user.id}-${message.guild.id}-mute`, 1);
const cooldowndata = cooldowns.get(`${user.id}-${message.guild.id}-mute`);
message.channel.send(`${message.author} o(a) ${user} foi mutado(a) com sucesso`)
message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "muta alguem",
  usage: "mute @nome_pessoa"
}