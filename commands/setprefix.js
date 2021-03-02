const Discord = require("discord.js");
const db = require("megadb");


let PrefixDB = new db.crearDB("Prefix");

exports.run = async (client, message, args, database, con, cooldowns, ms, prefixe, config) => {

  if (message.author.id != "686010259860750456") {
    if(!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(" | Você e fraco lhe falta a permissão: `Administrador`");
  }
  
  if (!PrefixDB.tiene(`${message.guild.id}`))
    PrefixDB.establecer(`${message.guild.id}`, {
      prefix: "meui6/"
  });

  let prefix = await PrefixDB.obtener(`${message.guild.id}.prefix`);

  const newPrefix = args[0]

  const embedError = await new Discord.MessageEmbed()
    .setTitle('Erro')
    .setDescription("**Prefixos com +7 caracteres não são permitidos pois assim da muito trabalho dos membros digitarem.**")
    .setColor("#e00000")

  if(newPrefix.length >= 7) return message.channel.send(embedError);
  
//client.user.setUsername(`[${newPrefix}]Darkbot`);
 
  PrefixDB.set(`${message.guild.id}.prefix`, newPrefix)

  const embed = await new Discord.MessageEmbed()
    .setDescription("**Configurações Atualizadas**")
    .addField("Novo Prefixo:", '`' + newPrefix + '`')
    .setColor("#e00000")

  message.channel.send(embed);
};
exports.help = {
  permisoes: "ADM",
  description: "Seta Um Prefixo",
  usage: "setprefix argumento",
  category: "mod"
}