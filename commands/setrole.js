const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};
  let user;
  if (message.mentions.roles.first() || client.users.cache.get(args[0])) {
    user = message.mentions.roles.first() || client.users.cache.get(args[0]);
  } else {
      message.reply("use ex: !setrole @vermelho vermelho")
  }

  eco.set(`${message.guild.id}-role-${args[1]}`, user.id);
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "muta alguem",
  usage: "setrole @nome_role argumento"
  }