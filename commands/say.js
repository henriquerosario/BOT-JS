const discord = require('discord.js');
const config = require("../config.json")

exports.run = async (bot, message, args, eco, cooldowns, ms) => {
  

  let avatar = message.author.displayAvatarURL({format: 'png'});

  var arg = message.content.toLowerCase().split(`${config.prefix}say `)
  if(!arg[1])return message.channel.send(`oque quer q eu mande? use ${config.prefix}say algo que queira mandar`)
  message.delete()
  const exampleEmbed = new discord.MessageEmbed()
	.setColor('#9400D3')
  .setThumbnail(avatar)
	.addFields(
		{ name: `${message.author.username}`, value: `**${arg[1]}**` },
	)
    .setTimestamp()

const cooldowndatavip = cooldowns.get(`${message.author.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) {
  message.channel.send(exampleEmbed);
} else {
  message.channel.send(exampleEmbed);
  const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
  eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 50);
  message.reply("isso te custou R$50 pois não é vip")
}

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Fala Um Aviso Para o server (**USE COM MODERAÇAO!** Pode Levar Até Ban Se Usado Com Frequencia)",
  usage: "say coisa a se falar"
}