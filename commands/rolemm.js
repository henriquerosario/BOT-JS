const discord = require('discord.js');
const config = require("../config.json")
const prefix = config.prefix
exports.run = async (client, message, args, eco, cooldowns, ms) => {
if (message.channel.id != config.areadocargo) {
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
       if(guildMember.roles.cache.get("804519118026833942")){
            guildMember.roles.remove("804519118026833942");
          }
          }
          
    if (reaction.emoji.name == "🔵") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get("804519229515628545")){
           guildMember.roles.remove("804519229515628545");
          }
          }
          
    if (reaction.emoji.name == "🟣") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get("804519327549620244")){
           guildMember.roles.remove("804519327549620244");
          }
          }
          
    if (reaction.emoji.name == "🟢") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get("804519472706093116")){
           guildMember.roles.add("804519472706093116");
          }
          }

    if (reaction.emoji.name == "🟡") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get("804703558061522985")){
           guildMember.roles.add("804703558061522985");
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