const discord = require('discord.js');
const config = require("../config.json")
const prefix = config.prefix
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.channel.id != eco.get(`${message.guild.id}-cargo`)) {
  message.reply("a bobinho use a area do cargo para adiquirir cargos!")
  return;
}

  const msg = await message.channel.send(`${message.author} temos os cargos (reaja para retirar): \nvermelho: 🔴\nazul: 🔵 \nroxo: 🟣 \nverde: 🟢 \namarelo: 🟡`);
    const emojis = ["🔴", "🔵", "🟣", "🟢", "🟡"];

    for (const i in emojis) {
      await msg.react(emojis[i])
    }
    client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.id == msg.id){
    if (!user.bot) {
    if (user.id != message.author.id) return reaction.users.remove(user);
    if (reaction.emoji.name == "🔴") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(con.get(`${message.guild.id}-role-vermelho`))){
            guildMember.roles.remove(con.get(`${message.guild.id}-role-vermelho`));
          }
          }
          
    if (reaction.emoji.name == "🔵") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(con.get(`${message.guild.id}-role-azul`))){
           guildMember.roles.remove(con.get(`${message.guild.id}-role-azul`));
          }
          }
          
    if (reaction.emoji.name == "🟣") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(con.get(`${message.guild.id}-role-roxo`))){
           guildMember.roles.remove(con.get(`${message.guild.id}-role-roxo`));
          }
          }
          
    if (reaction.emoji.name == "🟢") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(con.get(`${message.guild.id}-role-verde`))){
           guildMember.roles.add(con.get(`${message.guild.id}-role-verde`));
          }
          }

    if (reaction.emoji.name == "🟡") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(con.get(`${message.guild.id}-role-amarelo`))){
           guildMember.roles.add(con.get(`${message.guild.id}-role-amarelo`));
          }
          }
          
    }
    }
    })
}
exports.help = {
    permisoes: "Nenhuma",
  description: "Te retira um Cargo",
  usage: "role react"
}