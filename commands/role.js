const discord = require('discord.js');
const config = require("../config.json")
const prefix = config.prefix
exports.run = async (client, message, args, eco, cooldowns, ms) => {
const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`)
if (message.channel.id != eco.get(`${message.guild.id}-cargo`)) {
  message.reply("a bobinho use a area do cargo para adiquirir cargos!")
  return;
} 
const cooldowndata = cooldowns.get(`${message.author.id}-${message.guild.id}-vip`);
if(parseInt(cooldowndata) > Date.now()) {
  // para vips
    const msg = await message.channel.send(`${message.author} temos os cargos (reaja para comprar): \nvermelho: 🔴 val: 15\nazul: 🔵 val: 15\nroxo: 🟣 val: 10\nverde: 🟢 val: 10 \namarelo: 🟡 val: 5 \nVocê tem: \`${currentBalance}\` \nseu estado atual: VIP`);
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
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-vermelho`))){
         if (currentBalance >= 15) {
            guildMember.roles.add(eco.get(`${message.guild.id}-role-vermelho`));
            eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 15);
          }
          }
          }
    if (reaction.emoji.name == "🔵") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-azul`))) {
         if (currentBalance >= 15) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-azul`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 15);
          }
          }
          }
    if (reaction.emoji.name == "🟣") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-roxo`))){
         if (currentBalance >= 10) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-roxo`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 10);
          }
          }
          }
    if (reaction.emoji.name == "🟢") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-verde`))){
         if (currentBalance >= 10) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-verde`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 10);
          }
          }
          }
    if (reaction.emoji.name == "🟡") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-amarelo`))){
         if (currentBalance >= 5) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-amarelo`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 5);
          }
          }
          }
    }
    }
    })
} else {
  // para NÃO vips
    const msg = await message.channel.send(`${message.author} temos os cargos (reaja para comprar): \nvermelho: 🔴 val: 150\nazul: 🔵 val: 150\nroxo: 🟣 val: 100\nverde: 🟢 val: 100 \namarelo: 🟡 val: 50 \nVocê tem: \`${currentBalance}\` \nseu estado atual: NAO VIP use !vip para comprar o vip`);
    
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
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-vermelho`))){
         if (currentBalance >= 150) {
            guildMember.roles.add(eco.get(`${message.guild.id}-role-vermelho`));
            eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 150);
          }
          }
          }
    if (reaction.emoji.name == "🔵") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-azul`))){
         if (currentBalance >= 150) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-azul`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 150);
          }
          }
          }
    if (reaction.emoji.name == "🟣") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-roxo`))){
         if (currentBalance >= 100) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-roxo`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 100);
          }
          }
          }
    if (reaction.emoji.name == "🟢") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-verde`))){
         if (currentBalance >= 100) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-verde`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 100);
          }
          }
          }
    if (reaction.emoji.name == "🟡") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-amarelo`))){
         if (currentBalance >= 50) {
           guildMember.roles.add(eco.get(`${message.guild.id}-role-amarelo`));
           eco.set(`${message.author.id}-${message.guild.id}`, currentBalance - 50);
          }
          }
          }
    }
    }
    })
}
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Te dá um Cargo em Troca de Moedas",
  usage: "role react"
}