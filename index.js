const express = require('express'); 
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos


client.on("guildMemberAdd", async (member) => { 
  await member.roles.add("804234677844967454")
  let guild = await client.guilds.cache.get("794167456897564682");
  let channel = await client.channels.cache.get("804224614846693386");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "bemvindo");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://i.imgur.com/ntvRPQs.jpeg")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:\n não se esqueça de ir em #confirmaçao e se cadastrar`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Henrique Franchesco")
      .setTimestamp();

    channel.send(embed);
  }
});
client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("794167456897564682");
  let channel = await client.channels.cache.get("804222959509962803");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "bye");
  if (guild != member.guild) {
    return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Adeus! ${emoji}`)
      .setImage("https://i.imgur.com/z09mFD1.gif")
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Henrique Franchesco")
      .setTimestamp();

    channel.send(embed);
  }
});
client.on("ready", () => {
console.log("Estou Online!")
var i = 0;
client.user.setActivity("estou online")
var atividades = ["Pedra na Sua Mae","O Jogo da Cobrinha",`Estou em ${client.guilds} Servidores.`,"Nada","Estou Online","minha vida fora"]
  setInterval(function () {client.user.setActivity(atividades[i]); i++; if (i == 6) {i = 0}}, 10000)
});

client.on("raw", (dados) => {
  //console.log(dados)
  //console.log(dados.d.username)
  //if( == "<h1>henrique</h1>") console.log("foi")
}) 
client.on('message', message => {
  
      if (message.content.split(" ")[0].toLowerCase() == "!kiss"){ 
       if (message.channel != "804116608364576790") {
        message.delete()
        return message.reply("a BOBINHO você não pode beijar fora da area do beijo!")

      }
     }
     if (message.content.split(" ")[0].toLowerCase() == "!hug"){ 
       if (message.channel != "804159975781040158") {
        message.delete()
        return message.reply("a BOBINHO você não pode abraçar fora da area do abraço!")

      }
     }
      

     if(message.content.toLowerCase() == "gay") {
       if(!message.member.hasPermission('MANAGE_MESSAGES')) {
          message.channel.send(`é quem fala gaysão(a)`)
       } else {
         message.channel.send("acredita nele(nela) ✊")
       }
     } 
     
      if (message.channel.id == "804014823847100496") {
        if (message.author.bot) return
      if (message != "!eu-aceito-os-termos") {message.delete()} else {
        if(message.author.roles.has("804006571171643424")) message.delete()
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
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
    message.reply(`Desculpe Mas O Comando '!${command}' \nNão Existe Digite !help Para Ver os Existentes!!!`);
  }
  
});



client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token