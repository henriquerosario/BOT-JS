const Discord = require('discord.js');

exports.run = async (client, message, args) => {


var list = [
  'https://media.tenor.com/images/921225db26207d5759b985d91e1adb8c/tenor.gif',
  'https://media.tenor.com/images/8b40c5dfa48b27437f2ab9d15e256ea6/tenor.gif',
  'https://media.tenor.com/images/e02f89a664e15bedd83c58a0d6da95e1/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (user.id == "686010259860750456" && message.author.id != "686010259860750456") {
  message.reply("Você Mero Mortal Não Pode Nem Encostar Em Um DEUS Como Esse!");
  return;
}
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('KILL')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de matar e destruir ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
exports.help = {
  permisoes: "Nenhuma",
  description: "mata a Pessoa q Quer matar",
  usage: "kill @nome_pessoa",
  category: "fun"
}