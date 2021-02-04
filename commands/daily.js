const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.channel.id != eco.get(`${message.guild.id}-banco`)) {
  message.delete()
  message.reply("a bobinho use o banco para consegir dinheiro!")
  return
}
const cooldowndata = cooldowns.get(`${message.author.id}-${message.guild.id}-daily`);
if(parseInt(cooldowndata) > Date.now()) return message.reply(`Please wait ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)
let valor = 15
let vip = "Não Vip"
const cooldowndatavip = cooldowns.get(`${message.author.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) {valor = 200; vip = "VIP"}
if(parseInt(cooldowndata) > Date.now()) 

await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
eco.set(`${message.author.id}-${message.guild.id}`, currentBalance + valor);

message.channel.send(new Discord.MessageEmbed()
    .setTitle("💵 Recompença Diaria!")
    .setDescription(`Parabens Coletou sua recompença diaria agora você tem: ${currentBalance + valor}! seu estado atual: ${vip}`).setColor("00ff00")
)

cooldowns.set(`${message.author.id}-${message.guild.id}-daily`, Date.now() + ms("1d"))
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Te da dinheiro a cada vez q usado (de 24 em 24 horas no **MINIMO**)",
  usage: "daily"
}