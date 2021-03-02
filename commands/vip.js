const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, database, con, cooldowns, ms) => {
if (message.channel.id != con.get(`${message.guild.id}-banco`)) {
  message.delete()
  message.reply(`a bobinho use o  <#${con.get(`${message.guild.id}-banco`)}> para gastar dinheiro!`)
  return
}
const cooldowndata = cooldowns.get(`${message.author.id}-vip`);
if(parseInt(cooldowndata) > Date.now()) return message.reply(`Você Ainda Tem ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}  de Vip \ndigite un-vip para desvirar vip`)
database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
  
let currentBalance = db.val().money
let valordovip = 500

if (currentBalance >= valordovip) {
  cooldowns.set(`${message.author.id}-vip`, Date.now() + ms("1d"))
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money - valordovip
  })
  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('OS COMANDOS DO BOT:')
      .setDescription(`parabens ${message.author} agora você é vip por 24 horas agora Você tem ${currentBalance - 500} moedas na sua conta`)

      message.reply(comEmbed)
} else {
  message.reply("Você Não Tem Dinheiro Suficiente!")
}
})
}

exports.help = {
  permisoes: "Nenhuma",
  description: `Faz q se torne vip a custo de R$500`,
  usage: "vip",
  category: "economy"
}