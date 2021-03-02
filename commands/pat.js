const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
  'https://media.tenor.com/images/fb27db25be4089ddf0fa01ccf2043e13/tenor.gif',
  'https://media.tenor.com/images/12e9c4c6a45ee65b4037da2aaba67c45/tenor.gif',
  'https://media.tenor.com/images/7232f51343915699308b66cef2ffe754/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para acariciar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pat')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de acariciar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('chuck chuck chuck opa esse é \`(ಠ ʖ̯ ͡ಠ) Outra Coisa\`')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Da um carinho na Pessoa q Quer acariciar",
  usage: "pat @nome_pessoa",
  category: "fun"
}