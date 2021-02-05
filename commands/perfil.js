const Discord = require('discord.js');
const config = require("../config.json")
const canvacord = require("canvacord");
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path")
let uu = 0

exports.run = async (client, message, args, eco, cooldowns, ms) => {
let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    user = message.author;
}

await eco.ensure(`${user.id}-${message.guild.id}`, 0);
const currentBalance = await eco.get(`${user.id}-${message.guild.id}`);
const lvl = await eco.get(`${message.guild.id}-${user.id}-lvl`);
const xp = await eco.get(`${message.guild.id}-${user.id}-xp`);
let vip = "Não Vip"
const cooldowndatavip = cooldowns.get(`${user.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndatavip) > Date.now()) vip = "VIP"


  const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({format: 'png'}))
    .setCurrentXP(xp)
    .setLevel(lvl)
    .setRank(NaN)
    .setOverlay("ai sim garoto")
    .setRequiredXP(lvl * 100)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(message.author.username)
    .setDiscriminator(message.author.discriminator);
    
 
rank.build()
    .then(async data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        //message.channel.send(attachment);
        const embed = new Discord.MessageEmbed()
          .setTitle(`Perfil De ${user.username}!`)
          .setDescription(`${currentBalance} moedas na conta!, \nestado dele(a): ${vip}, \nnumero de pagamentos executados: ainda não disponivel`).setColor("00ff00")
        let msg = await message.channel.send(embed)
  emojis = ["↪️"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }

  


  client.on('messageReactionAdd', async (reaction, user) => {

      if (reaction.message.id == msg.id){
      if (!user.bot) {
      if (reaction.emoji.name == "↪️") {
        if (uu == 0) {
          await msg.delete()
          msg = await message.channel.send(attachment)
          await msg.react("↪️")
          uu++
        } else if (uu == 1) {
          await msg.delete()
          msg = await message.channel.send(embed)
          await msg.react("↪️")
          uu--
        }
      }
      }
      }
    
  });
});



}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra O Perfil De Alguem",
  usage: "perfil || !perfil @nome_pessoa"
}