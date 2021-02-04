const express = require('express'); 
const app = express();
const enmap = require("enmap");
const fs = require("fs")
const filtro = require('./filtro.json')
const ms = require("ms")
let fiztd = false
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 5000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Por Favor Pare De Spamar Fora do Canal Spam ou Flood.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** Foi Kicado do Server Fora do Canal Spam ou Flood.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** Foi BANIDO Por Spamar Fora do Canal Spam ou Flood.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: ['ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
const config = require("./config.json")
const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }), //Criação de um novo Client
dir = "./commands/",
prefix = config.prefix
var commands = [];
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

  
  response.sendStatus(200); 
})
app.listen(process.env.PORT); // Recebe solicitações que o deixa online



const eco = new enmap({
    name: "economy",
    cloneLevel: "deep",
    fetchAll: false,
    autoFetch: true
});

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

const cooldowns = new enmap({
    name: "cooldowns",
    cloneLevel: "deep",
    fetchAll: false,
    autoFetch: true
})






client.on("guildMemberAdd", async (member) => { 
  await member.roles.add(config.autorole)
  /*let guild = await client.guilds.cache.get(config.sevid);*/
  let channel = await client.channels.cache.get(eco.get(`${member.guild.id}-boasvindas`));
  /*let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "bemvindo");*/
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("https://i.imgur.com/ntvRPQs.jpeg")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:\n não se esqueça de ir em #confirmaçao e se cadastrar`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Henrique Franchesco")
      .setTimestamp();

    channel.send(embed);

});
client.on("guildMemberRemove", async (member) => { 

  /*let guild = await client.guilds.cache.get(config.sevid);*/
  let channel = await client.channels.cache.get(eco.get(`${member.guild.id}-saida`));
  /*let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "bye");*/
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus!`)
      .setImage("https://i.imgur.com/z09mFD1.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Henrique Franchesco")
      .setTimestamp();

    channel.send(embed);
  
});
client.on("ready", async () => {
  console.log("estou on")
  fiztd = true
})
client.on("message", async (message) => {


  eco.ensure(`${message.guild.id}-saida`, 0);
  eco.ensure(`${message.guild.id}-boasvindas`, 0);
  eco.ensure(`${message.guild.id}-mais18`, 0);
  eco.ensure(`${message.guild.id}-spam`, 0);
  eco.ensure(`${message.guild.id}-beijo`, 0);
  eco.ensure(`${message.guild.id}-abraco`, 0);
  eco.ensure(`${message.guild.id}-banco`, 0);
  eco.ensure(`${message.guild.id}-cargo`, 0);
  eco.ensure(`${message.guild.id}-sugerir`, 0);
  eco.ensure(`${message.guild.id}-sujestao`, 0);
  eco.ensure(`${message.guild.id}-confirmacao`, 0);
  eco.ensure(`${message.guild.id}-ticket`, 0);
  eco.ensure(`${message.guild.id}-cargospadrao`, 0);
  eco.ensure(`${message.guild.id}-role-vermelho`, 0);
  eco.ensure(`${message.guild.id}-role-verde`, 0);
  eco.ensure(`${message.guild.id}-role-azul`, 0);
  eco.ensure(`${message.guild.id}-role-amarelo`, 0);
  eco.ensure(`${message.guild.id}-role-roxo`, 0);
  eco.ensure(`${message.guild.id}-role-permissao`, 0);
  eco.ensure(`${message.guild.id}-role-cat`, 0);
  eco.ensure(`${message.guild.id}-role-dog`, 0);
  eco.ensure(`${message.guild.id}-role-outro`, 0);
  eco.ensure(`${message.guild.id}-role-passaro`, 0);
  eco.ensure(`${message.guild.id}-role-passaro`, 0);
  eco.ensure(`${message.guild.id}-role-homem`, 0);
  eco.ensure(`${message.guild.id}-role-mulher`, 0);
  eco.ensure(`${message.guild.id}-role-mais18`, 0);
  eco.ensure(`${message.guild.id}-role-menos18`, 0);
  eco.ensure(`${message.guild.id}-role-javascript`, 0);
  eco.ensure(`${message.guild.id}-role-python`, 0);
  eco.ensure(`${message.guild.id}-role-php`, 0);
  eco.ensure(`${message.guild.id}-role-html`, 0);
  eco.ensure(`${message.guild.id}-role-c`, 0);
  eco.ensure(`${message.guild.id}-role-cpp`, 0);
  eco.ensure(`${message.guild.id}-role-cs`, 0);









  





  console.log(eco.get(`${message.guild.id}-role-vermelho`))

  if (fiztd) {
    fiztd = false
  /*eco.ensure(`${client.guild.id}-saida`, 0);*/
  let guild = client.guilds.cache.get(message.guild.id);
  var canalconfirmacao = guild.channels.cache.find(ch => ch.id === eco.get(`${message.guild.id}-confirmacao`));
  var canaltiket = guild.channels.cache.find(ch => ch.id === eco.get(`${message.guild.id}-ticket`));
  var canalkk = guild.channels.cache.find(ch => ch.id === eco.get(`${message.guild.id}-cargospadrao`));
  /*let canalp = client.channels.cache.get(config.canalnummembros)*/
  /*let canalpo = client.channels.cache.get(eco.get(`${message.guild.id}-boton`))
  canalpo.send("uhul")*/
  console.log("Estou Online!")
  const scripts = fs.readdirSync(dir);
  scripts.forEach(script=>{
    props = require(`./commands/${script}`)
      commands.push(script.split(".js")[0])
  });


  var i = 0;
  client.user.setActivity("merda pela janela")
  var atividades = ["Pedra na Sua Mae","O Jogo da Cobrinha", `estou no ${guild.name} com ${guild.memberCount} membros :)`,"Nada","Estou Online","minha vida fora"]
    setInterval(function () {client.user.setActivity(atividades[i]); i++; if (i == 6) {i = 0}}, 10000)


  canalkk.bulkDelete(50, true)
  canaltiket.bulkDelete(50, true)
  canalconfirmacao.bulkDelete(50, true)
  

  const msge = await canalkk.send(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('**OQ É**')
      .setDescription("reja com: \n'🚹' para ser homem, \n'🚺' para ser mulher, \n'🔞' para ser maior de 18 anos, \n'🧒' para ser menor de 18 anos")
  )
  

  /*aki ta dando erro*/ 
  const msg = await canalkk.send(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('**OQ PROGRAMA**')
      .setDescription("reja com: \n'🟨' para javascript, \n'🟦' para python, \n'💎' para php, \n'🍁' para HTML e CSS, \n'☀' para C, \n'🎇' para C++, \n'👾' para C#")
  )
  /* aki n mais*/

  const msgei = await canalconfirmacao.send(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription("reja com '✅' para desbloquear o servidor!!")
  )

  const msgeei = await canaltiket.send(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription("MAQUINA DE TICKETS REAJA PARA ABRIR UM")
  )

  const msgcu = await canalkk.send(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('**QUAIS ANIMAIS TEM?**')
      .setDescription("reja com: \n'🐶' para DOG, \n'🐱' para CAT,\n'🐦' para PASSARO, \n'🐀' para OUTRO")
  )

  
  let emojis = ["🟨", "🟦", "💎", "🍁", "🖥️", "🎇", "👾"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }

  emojis = ["🐶", "🐱", "🐀", "🐦"];

  for (const i in emojis) {
    await msgcu.react(emojis[i])
  }

  emojis = ["🚹", "🚺", "🔞", "🧒"];

  for (const i in emojis) {
    await msge.react(emojis[i])
  }

  emojis = ["✅"];

  for (const i in emojis) {
    await msgei.react(emojis[i])
  }

  emojis = ["🎫"];

  for (const i in emojis) {
    await msgeei.react(emojis[i])
  }


  
  


  client.on('messageReactionAdd', async (reaction, user) => {

    if (reaction.message.id == msgei.id){
    if (!user.bot) {
    if (reaction.emoji.name == "✅") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-permissao`))){
           await guildMember.roles.add(eco.get(`${message.guild.id}-role-permissao`));
            }
          }
       }
    }

    if (reaction.message.id == msgcu.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🐶") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-dog`))){
           await guildMember.roles.add(eco.get(`${message.guild.id}-role-dog`));
            }
          }
    if (reaction.emoji.name == "🐱") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cat`))){
           await guildMember.roles.add(eco.get(`${message.guild.id}-role-cat`));
            }
          }
    if (reaction.emoji.name == "🐀") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-outro`))){
           await guildMember.roles.add(eco.get(`${message.guild.id}-role-outro`));
            }
          }
    if (reaction.emoji.name == "🐦") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-passaro`))){
           await guildMember.roles.add(eco.get(`${message.guild.id}-role-passaro`));
            }
          }
       }
    }

    if (reaction.message.id == msgeei.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🎫") {
    reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text',
            parent: config.categoriatickets
        }).then(async channel => {
            const mensagim = await channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Bem Vindo Ao Seu ticket!").setDescription("Poupe Nosso Tempo e Seja Especifico Para Fechar Reaja Novamente").setColor("00ff00"))

            mensagim.react("🎫")

            client.on('messageReactionAdd', async (reaction, user) => {
              if (reaction.message.id == mensagim.id){
              if (!user.bot) {
              if (reaction.emoji.name == "🎫") {
                await reaction.message.channel.delete();  
            }
            }
            }
            })
        })
    }
    }
    }
    if (reaction.message.id == msge.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🚹") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-homem`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-homem`));
          }
          }
    if (reaction.emoji.name == "🚺") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-mulher`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-mulher`));
          }
          }
    if (reaction.emoji.name == "🔞") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-18mais`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-18mais`));
          }
          }
    if (reaction.emoji.name == "🧒") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-18menos`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-18menos`));
          }
          }
    }
    }

    if (reaction.message.id == msg.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🟨") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-javascript`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-javascript`));
          }
          }
    if (reaction.emoji.name == "🟦") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-python`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-python`));
          }
          }
    if (reaction.emoji.name == "💎") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-php`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-php`));
          }
          }
    if (reaction.emoji.name == "🍁") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-html`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-html`));
          }
          }
    if (reaction.emoji.name == "🖥️") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-c`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-c`));
          }
          }
    if (reaction.emoji.name ==  "🎇") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cpp`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-cpp`));
          }
          }
    if (reaction.emoji.name == "👾") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(!guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cs`))){
           guildMember.roles.add(eco.get(`${message.guild.id}-role-cs`));
          }
          }
    }
    }
});
client.on('messageReactionRemove', async (reaction, user) => {

  if (reaction.message.id == msgcu.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🐶") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-dog`))){
           await guildMember.roles.remove(eco.get(`${message.guild.id}-role-dog`));
            }
          }
    if (reaction.emoji.name == "🐱") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cat`))){
           await guildMember.roles.remove(eco.get(`${message.guild.id}-role-cat`));
            }
          }
    if (reaction.emoji.name == "🐀") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-outro`))){
           await guildMember.roles.remove(eco.get(`${message.guild.id}-role-outro`));
            }
          }
    if (reaction.emoji.name == "🐦") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-passaro`))){
           await guildMember.roles.remove(eco.get(`${message.guild.id}-role-passaro`));
            }
          }
       }
    }

    if (reaction.message.id == msge.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🚹") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-homem`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-homem`));
          }
          }
    if (reaction.emoji.name == "🚺") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-mulher`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-mulher`));
          }
          }
    if (reaction.emoji.name == "🔞") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-18mais`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-18mais`));
          }
          }
    if (reaction.emoji.name == "🧒") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-18menos`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-18menos`));
          }
          }
    }
    }

    if (reaction.message.id == msg.id){
    if (!user.bot) {
    if (reaction.emoji.name == "🟨") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-javascript`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-javascript`));
          }
          }
    if (reaction.emoji.name == "🟦") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-python`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-python`));
          }
          }
    if (reaction.emoji.name == "💎") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-php`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-php`));
          }
          }
    if (reaction.emoji.name == "🍁") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-html`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-html`));
          }
          }
    if (reaction.emoji.name == "🖥️") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-c`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-c`));
          }
          }
    if (reaction.emoji.name ==  "🎇") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cpp`))){
           guildMember.roles.revove(eco.get(`${message.guild.id}-role-cpp`));
          }
          }
    if (reaction.emoji.name == "👾") {
    const guildMember = reaction.message.guild.members.cache.get(user.id)
       if(guildMember.roles.cache.get(eco.get(`${message.guild.id}-role-cs`))){
           guildMember.roles.remove(eco.get(`${message.guild.id}-role-cs`));
          }
          }
    }
    }
    
});
}





  const cooldowndatamute = cooldowns.get(`${message.author.id}-${message.guild.id}-mute`);
  const currentMute = await eco.get(`${message.author.id}-${message.guild.id}-mute`);
  if(parseInt(cooldowndatamute) > Date.now()) {
    message.reply(`ainda faltão ${ms(parseInt(cooldowndatamute) - Date.now(), {long: true})} para poder falar novamente`)
    message.delete()
    return
    }
  if (currentMute > 0) {
    message.reply(`voce esta mutado(a)`)
    message.delete()
    return
  }
  if (message.channel.id != eco.get(`${message.guild.id}-spam`)) {
    antiSpam.message(message)
  }
  
  if (message.channel.id != eco.get(`${message.guild.id}-mais18`)) {
    Object.keys(filtro.palavras).forEach(chave => {
          if (message.content.toLowerCase().includes(filtro.palavras[chave])) {
              message.delete()
          }
    })
  }

  if (message.channel.id != config.canaldivulgacao) {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send(
        `${message.author} **você não pode postar link de outros servidores aqui! use o canal divulgaçao dos membros para isso**`
      );
  }
  }

  
  await eco.ensure(`${message.author.id}-${message.guild.id}`, currentBalance = 0);
      if (message.content.split(" ")[0].toLowerCase() == "!kiss"){ 
       if (message.channel != eco.get(`${message.guild.id}-beijo`)) {
        message.delete()
        return message.reply("a BOBINHO você não pode beijar fora da area do beijo!")

      }
     }
     if (message.content.split(" ")[0].toLowerCase() == "!hug"){ 
       if (message.channel != config.eco.get(`${message.guild.id}-abraco`)) {
        message.delete()
        return message.reply("a BOBINHO você não pode abraçar fora da area do abraço!")

      }
     }
      

     if(message.content.includes("gay")) {
       if(!message.member.hasPermission('MANAGE_MESSAGES')) {
          message.channel.send(`é quem fala gaysão(a)`)
       } else {
         message.channel.send("acredita nele(nela) ✊")
       }
     } 
     
      
     if (message.author.bot) return;
    
     if(message.content.toLowerCase() == "olo") {
       message.channel.send("co ┏ (゜ω゜)=☞")
     }
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    

    try {
        const commandFile = require(`./commands/${command}.js`)
        if (command != "help") {
        commandFile.run(client, message, args, eco, cooldowns, ms, prefix, config);
        } else {
          commandFile.run(client, message, commands, prefix, config, args);
        }
    } catch (err) {
    console.error('Erro:' + err);
    message.reply(`Desculpe Mas O Comando '${prefix}${command}' \nNão Existe Digite ${prefix}help Para Ver os Existentes!!!`);
  }




    console.log(`o ${message.author.username} mandou !${command} ${args[0] ? `com ${message.content.split(`${prefix}${command} `)[1]}`: `sem`}  argumentos, no canal ${message.channel.name}`)

    if(command == "daily") {
        const cooldowndata = await cooldowns.get(`${message.author.id}-${message.guild.id}-daily`);
        /*if(parseInt(cooldowndata) > Date.now()) return message.reply(`Please wait ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)*/

        await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
        const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);

        /*message.channel.send(new Discord.MessageEmbed()
            .setTitle("💵 Daily Reward!")
            .setDescription(`You have claimed your daily reward! Your new balance is now ${currentBalance + 5}!`).setColor("00ff00")
        )*/

        /*cooldowns.set(`${message.author.id}-${message.guild.id}-daily`, Date.now() + ms("1d"))*/
    }




});



client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token