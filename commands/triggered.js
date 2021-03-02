const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let avatar = user.avatarURL({ dynamic: false, format: 'png', size: 1024 });
  let image = await canvacord.Canvas.trigger(avatar);
  let attachment = new Discord.MessageAttachment(image, "triggered.gif");
  return message.channel.send(attachment);
}
exports.help = {
  description: "deixa o @pessoa ou a si mesmo como: img_perfil triggered",
  usage: "triggered @nome_pessoa |ou| !triggered",
  permisoes: "Nenhuma",
  category: "fun"
}