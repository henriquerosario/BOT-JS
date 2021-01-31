const discord = require('discord.js');

exports.run = (bot, message, args) => {
  let avatar = message.author.displayAvatarURL({format: 'png'});
  var arg = message.content.split("!say ")
  if(!arg[1])return message.channel.send("oque quer q eu mande? use !say <algo>")
  message.delete()
  const exampleEmbed = new discord.MessageEmbed()
	.setColor('#9400D3')
  .setThumbnail(avatar)
	.addFields(
		{ name: `${message.author.username}`, value: `**${arg[1]}**` },
	)
    .setTimestamp()
    
message.channel.send(exampleEmbed);
}
