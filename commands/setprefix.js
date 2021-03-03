const Discord = require("discord.js");
const db = require("megadb");


let PrefixDB = new db.crearDB("Prefix");

exports.run = async (client, message, args, database, con, cooldowns, ms, prefixe, config) => {
/*
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
    .setDescription("**Prefixos com +5 caracteres não são permitidos**")
    .setFooter(`pq senão os user fica pito de digitar 6 caracteres`)
    .setColor("#9400D3")

  if(newPrefix.length >= 5) return message.channel.send(embedError);
  
//client.user.setUsername(`[${newPrefix}]Darkbot`);
 
  PrefixDB.set(`${message.guild.id}.prefix`, newPrefix)

  const embed = await new Discord.MessageEmbed()
    .setDescription("**Configurações Atualizadas (hihihihi eu achu)**")
    .addField("Nada Para Ver Aki")
    .setFooter(`tá esquecidinho te digo qual é o prefixo agora achu ki é: \`${newPrefix}\``)
    .setColor("#9400D3")

  message.channel.send(embed);
  */
};
exports.help = {
  permisoes: "ADM",
  description: "Seta Um Prefixo",
  usage: "setprefix argumento",
  category: "mod"
}