const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
  'https://i.pinimg.com/originals/f9/0b/05/f90b053fd476fafe60f8fb4bffc1a877.gif',
  'https://i.pinimg.com/originals/29/d2/3c/29d23cb3146a03c1b55cdc95afef8bc0.gif',
  'https://i.pinimg.com/originals/a3/5f/d2/a35fd2cb4d4ef1677e15a6b097506abc.gif',
  "https://media.tenor.com/images/f26f0e499c32fddab142b9e3b77ebbf7/tenor.gif",
  "https://media.tenor.com/images/b5f4c495ee53db0bc1298dab4243cc36/tenor.gif"
];

var rand = list[Math.floor(Math.random() * list.length)];
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cute')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de pedir algo fofo`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Cute Cute Cute')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
exports.help = {
  description: "manda um video fofo",
  permisoes: "Nenhuma",
  usage: "cute",
  category: "fun"
}