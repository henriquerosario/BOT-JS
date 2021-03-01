const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
   const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('Urls De Acesso:')
      .setDescription(`1: https://www.henriques-site.com.br/ \n2: https://henriques-site.com.br/ \n3: https://henriques-site.netlify.app/`)

      message.reply(comEmbed)
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra As Url",
  usage: "site PVVVV Usa Esse Comando :)"
}