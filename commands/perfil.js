const Discord = require('discord.js');
const config = require("../config.json")
const canvacord = require("canvacord");
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path")
let uu = 0

exports.run = async (client, message, args, database, cooldowns, ms) => {
  let tops = []
  let talvez = []
  database.ref(`Servidores/Level/`).once("value").then(async function(db) {
          const ids = Object.keys(db.val()).forEach((id, index, array) => {
            database.ref(`Servidores/Level/${id}`).once("value").then(async function(db) {
              tops.push(db.val().level+"_"+id)
              if (index + 1 == array.length) {
                function ordenaNum (a, b) {
                  a = a.split("_")
                  b = b.split("_")
                  return b[0] - a[0];
                }
                tops.sort(ordenaNum)
                for (i=0; i<tops.length; i++) {
                  talvez.push(tops[i] + "-" + (i + 1))
                }
                console.log(talvez)
                let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    user = message.author;
}
database.ref(`Servidores/Money/${user.id}`).once("value").then(async function(db) {
    let currentBalance = db.val().money
    database.ref(`Servidores/Level/${user.id}`).once("value").then(async function(db) {
      let lvl = db.val().level
      let xp = db.val().xp
      let vip = "Não Vip"
      const cooldowndatavip = cooldowns.get(`${user.id}-vip`);
      if(parseInt(cooldowndatavip) > Date.now()) vip = "VIP"
      let pos = 0
      for (i=0; i<talvez.length; i++) {
        if (talvez[i].split("-")[0].split("_")[1] == user.id) {
          pos = i
        }
      }
      const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({format: 'png'}))
    .setCurrentXP(xp)
    .setLevel(lvl)
    .setRank(parseInt(talvez[pos].split("-")[1]))
    .setOverlay("ai sim garoto")
    .setRequiredXP(lvl * 100)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);
    
 
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
    })

})

              }
            })
          })
        })



  



}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra O Perfil De Alguem",
  usage: "perfil || !perfil @nome_pessoa"
}