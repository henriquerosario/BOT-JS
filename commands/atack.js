const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 'https://i.imgur.com/RVMEpmu.gif',
 'https://i.imgur.com/1F4Ln65.gif',
 'https://media.giphy.com/media/ycther0Rq1sJO/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar! \n \n so n mata a pesoa viu!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('atack')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de atacar ${user}`)
        .setImage(rand)
        .setThumbnail(avatar)
        .setFooter('e moreu :D')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  
}
exports.help = {
  permisoes: "Nenhuma",
  description: "ataca o usuario",
  usage: "atack @nome_pessoa"
}