const discord = require('discord.js');
const config = require("../config.json")

exports.run = async (bot, message, args, database, cooldowns, ms) => {
  

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

const cooldowndatavip = cooldowns.get(`${user.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) {
  message.channel.send(exampleEmbed);
} else {
  message.channel.send(exampleEmbed);
  database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money - 50
  })
})
  message.reply("isso te custou R$50 pois não é vip")
}

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Fala Um Aviso Para o server (**USE COM MODERAÇAO!** Pode Levar Até Ban Se Usado Com Frequencia)",
  usage: "say coisa a se falar"
}