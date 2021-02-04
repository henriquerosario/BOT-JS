const Discord = require("discord.js");
config = require("../config.json")

exports.run = async (client, message, args) => {
  if (message.channel.id != config.canalsugerir) {message.reply("use o canal de sugestoes para dar ideias"); return message.delete()}
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === config.canalsugestao);
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Conteúdo", "@everyone " + content)
    .setFooter(`Autor: ${message.author}`)
    .setDescription(`${message.author} reaja com "✖" para apagar sua mensagem`)
    .setTimestamp()
  );
  const mmm = await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["✔️", "❌", "✖"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
  client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.id != msg.id) return
    if (user.id != message.author.id) return
    if (user.bot) return
    if (reaction.emoji.name != "✖") return
    msg.delete()
    mmm.delete()
	});
}
}
exports.help = {}