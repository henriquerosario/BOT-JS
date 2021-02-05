const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, con, cooldowns, ms) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};
  if(!args[0]) {return message.reply("qual canal ex: !setcanal argumentos: cargospadrao, ticket, confirmacao, sujestao, sugerir, cargo, banco, abraco, beijo, spam, mais18, boasvindas, saida, divulgacao")}


    let user;
  if (message.mentions.roles.first() || client.users.cache.get(args[1])) {
    user = message.mentions.roles.first() || client.users.cache.get(args[1]);
  } else {
      user = message.channel
  }

  await con.ensure(`${message.guild.id}-${args[0]}`, 0);
  con.set(`${message.guild.id}-${args[0]}`, user.id);
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Seta Um Canal",
  usage: "setcanal argumento || setcanal argumento canal"
}