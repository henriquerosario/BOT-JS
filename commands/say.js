const discord = require('discord.js');
const config = require("../config.json")
const db = require("megadb")
const PrefixDB = new db.crearDB("Prefix");

exports.run = async (client, message, args, database, con, cooldowns, ms) => {
  let prefixoAtual = await PrefixDB.obtener(`${message.guild.id}.prefix`);

  let avatar = message.author.displayAvatarURL({format: 'png'});

  var arg = message.content.toLowerCase().replace(`${prefixoAtual}say `, "")
  if(!arg)return message.channel.send(`oque quer q eu mande? use ${prefixoAtual}say algo que queira mandar`)
  message.delete()
  const exampleEmbed = new discord.MessageEmbed()
	.setColor('#9400D3')
  .setThumbnail(avatar)
	.addFields(
		{ name: `${message.author.username}`, value: `**${arg}**` },
	)
    .setTimestamp()

const cooldowndatavip = cooldowns.get(`${message.author.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) {
  message.channel.send(exampleEmbed);
} else {
  database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
    if (db.val().money > 49) {
      message.channel.send(exampleEmbed);
    } else {
      message.reply("sem dindin")
      return
    }
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money - 50
  })
})
  message.reply("isso te custou R$50 pois não é vip")
}

}
exports.help = {
  permisoes: "Nenhuma",
  description: "Fala Um Aviso Para o server (**USE COM MODERAÇAO!** Pode Levar Até Ban Se Usado Com Frequencia)",
  usage: "say coisa a se falar",
  category: "fun"
}