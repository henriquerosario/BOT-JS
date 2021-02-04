const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    user = message.author;
}

if (message.channel.id != config.canaldobanco) {
  message.delete()
  message.reply("a bobinho use o banco para ver seu dinheiro!")
  return
}
await eco.ensure(`${user.id}-${message.guild.id}`, 0);
const currentBalance = await eco.get(`${user.id}-${message.guild.id}`);
let vip = "Não Vip"
const cooldowndatavip = cooldowns.get(`${user.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) vip = "VIP"

message.channel.send(new Discord.MessageEmbed()
    .setTitle("💵 Seu Dinheiro!")
    .setDescription(`${user} tem R$\`${currentBalance}\` na conta! estado dele(a): ${vip}`).setColor("00ff00")
)
    
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra seu Dinheiro na Conta",
  usage: "bal"
}