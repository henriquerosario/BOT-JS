const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};
  if(!args[0]) {return message.reply("qual canal ex: !setcanal argumentos: cargospadrao, ticket, confirmacao, sujestao, sugerir, cargo, banco, abraco, beijo, spam, mais18, boasvindas, saida")}
  await eco.ensure(`${message.guild.id}-${args[0]}`, 0);
  const canal = await eco.get(`${message.guild.id}-${args[0]}`);
  eco.set(`${message.guild.id}-${args[0]}`, message.channel.id);
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Seta Um Canal",
  usage: "setcanal argumento"
}