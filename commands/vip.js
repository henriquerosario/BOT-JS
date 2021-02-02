const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.channel.id != config.canaldobanco) {
  message.delete()
  message.reply("a bobinho use o banco para gastar dinheiro!")
  return
}
const cooldowndata = cooldowns.get(`${message.author.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndata) > Date.now()) return message.reply(`Porfavor espere ${ms(parseInt(cooldowndata) - Date.now(), {long: true})} para virar vip novamente`)
const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
let valordovip = 500

if (currentBalance >= valordovip) {
  cooldowns.set(`${message.author.id}-${message.guild.id}-vip`, Date.now() + ms("1d"))
  eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 500);
  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('OS COMANDOS DO BOT:')
      .setDescription(`parabens ${message.author} agora você é vip por 24 horas agora Você tem R$\`${currentBalance - 500}\` na sua conta`)

      message.reply(comEmbed)
} else {
  message.reply("Você Não Tem Dinheiro Suficiente!")
}
}

exports.help = {
  permisoes: "Nenhuma",
  description: `Faz q se torne vip a custo de R$500`,
  usage: "vip"
}