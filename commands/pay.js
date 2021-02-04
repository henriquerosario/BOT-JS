const discord = require('discord.js');
const config = require("../config.json")

exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.channel.id != config.canaldobanco) {
  message.delete()
  message.reply("a bobinho use o banco para ver seu dinheiro!")
  return
}
  let currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
  if (!args[1]) return message.reply("use !pay valor pessoa")
  if (!args[0]) return message.reply("use !pay valor pessoa")
  if (currentBalance <= parseInt(args[0])) return message.reply("sem dindin")

  const deleteCount = parseInt(args[0]);

  let user;
  if (message.mentions.users.first() || client.users.cache.get(args[1])) {
    user = message.mentions.users.first() || client.users.cache.get(args[1]);
  } else {
      user = message.author;
  }

  
  eco.set(`${message.author.id}-${message.guild.id}`, parseInt(currentBalance) - parseInt(args[0]));
  currentBalance = await eco.get(`${user.id}-${message.guild.id}`);
  eco.set(`${user.id}-${message.guild.id}`, parseInt(currentBalance) + parseInt(args[0]));
  currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);

  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('PAY:')
      .setDescription(`o ${message.author} pagou ${parseInt(args[0])} moedas para ${user} e ficou com ${currentBalance} moedas, ${user} ficou com ${eco.get(`${user.id}-${message.guild.id}`)} moedas`)

  message.reply(comEmbed)
  
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Paga Algem",
  usage: "pay valor @pessoa"
}