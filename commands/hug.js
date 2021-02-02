const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
  'https://i.imgur.com/b1Rcb.gif',
  'https://i.imgur.com/c3WzMZu.gif',
  "https://media.tenor.com/images/9e87d9739cb0f7ea965247ff57df724c/tenor.gif",
  "https://media1.tenor.com/images/d05fb005c06ba7895288aac14e24ad60/tenor.gif"
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Hug')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('nhec nhec nhec')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Da um Abraço na Pessoa q Escolheu",
  usage: "hug @nome_pessoa"
}