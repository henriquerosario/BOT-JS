const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, con, cooldowns, ms) => {
  if (message.author.id != "686010259860750456") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
      return
    };
  }
  if(!args[0]) {return message.reply("qual canal ex: !setcanal argumentos: cargospadrao, ticket, confirmacao, sujestao, sugerir, cargo, banco, abraco, beijo, spam, mais18, boasvindas, saida")}
  await con.ensure(`${message.guild.id}-${args[0]}`, 0);
  const canal = await con.get(`${message.guild.id}-${args[0]}`);
  con.set(`${message.guild.id}-${args[0]}`, message.channel.id);
  message.reply(`canal ${args[0]} Setado com sucesso!`)
  message.delete()
}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Seta Um Canal",
  usage: "setcanal argumento",
  category: "mod"
}