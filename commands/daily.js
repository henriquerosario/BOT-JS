const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, database, con, cooldowns, ms) => {
if (message.channel.id != con.get(`${message.guild.id}-banco`)) {
  message.delete()
  message.reply("a bobinho use o banco para consegir dinheiro!")
  return
}
const cooldowndata = cooldowns.get(`${message.author.id}-${message.guild.id}-daily`);
if(parseInt(cooldowndata) > Date.now()) return message.reply(`Please wait ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)
let valor = 100
let vip = "Não Vip"
const cooldowndatavip = cooldowns.get(`${message.author.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) {valor = 200; vip = "VIP"}
if(parseInt(cooldowndata) > Date.now()) 

database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money + valor
  })


  message.channel.send(new Discord.MessageEmbed()
      .setTitle("💵 Recompença Diaria!")
      .setDescription(`Parabens Coletou sua recompença diaria agora você tem: ${db.val().money + valor} moedas! \nseu estado atual: ${vip}`).setColor("00ff00")
  )
})
cooldowns.set(`${message.author.id}-${message.guild.id}-daily`, Date.now() + ms("1d"))
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Te da dinheiro a cada vez q usado (de 24 em 24 horas no **MINIMO**)",
  usage: "daily"
}