const Discord = require('discord.js');

exports.run = (client, message, args) => {
    console.log(`o ${message.author} enviou ${message} com ${args[0]} argumentos`)
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#9400D3')
    .setTitle('OS COMANDOS DO BOT:')
	.setAuthor('Henrique Franchesco', `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png`, "http://henriques-site.great-site.net")
	.setDescription('Aqui Ficam Os Comandos Do Bot')
	.addFields(
		{ name: 'COMANDOS:', value: 'os comandos para uma lista completa !comhelp' },
        { name: '\u200B', value: '\u200B' },
		{ name: '!help', value: 'retorna: A Lista De Comandos', inline: true },
		{ name: '!clear <valor>', value: 'limpa as msgs \n * só funciona se você tiver o \n privilegio de mexer nas msgs', inline: true },
	)
    .setTimestamp()
    
message.channel.send(exampleEmbed);
}
