const discord = require('discord.js');
const config = require("../config.json")

exports.run = async (client, message, args, database, con, cooldowns, ms) => {
if (message.channel.id != con.get(`${message.guild.id}-banco`)) {
  message.delete()
  message.reply(`a bobinho use o <#${con.get(`${message.guild.id}-banco`)}> para ver seu dinheiro!`)
  return
}
database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {

  let currentBalance = db.val().money
  if (!args[1]) return message.reply("use !pay valor pessoa")
  if (!args[0]) return message.reply("use !pay valor pessoa")
  if (currentBalance < parseInt(args[0])) return message.reply("sem dindin")

  const deleteCount = parseInt(args[0]);

  let user;
  if (message.mentions.users.first() || client.users.cache.get(args[1])) {
    user = message.mentions.users.first() || client.users.cache.get(args[1]);
  } else {
      user = message.author;
  }

  
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money - parseInt(args[0])
  })
  currentBalance = currentBalance - args[0]
  database.ref(`Servidores/Money/${user.id}`).once("value").then(async function(db) {
  database.ref(`Servidores/Money/${user.id}`).update({
    money: db.val().money + parseInt(args[0])
  })
  currentBalancepay = db.val().money + parseInt(args[0])
  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('PAY:')
      .setDescription(`o ${message.author} pagou ${parseInt(args[0])} moedas para ${user} e ficou com ${currentBalance} moedas, ${user} ficou com ${currentBalancepay} moedas`)

  message.reply(comEmbed)
})

  
  })
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Paga Algem",
  usage: "pay valor @pessoa",
  category: "economy"
}