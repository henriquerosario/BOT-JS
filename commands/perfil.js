const Discord = require('discord.js');
const config = require("../config.json")
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

message.channel.send(new Discord.MessageEmbed()
    .setTitle(`🧑 Perfil De ${user.username}!`)
    .setDescription(`${currentBalance} moedas na conta!, \nestado dele(a): ${vip},\nlevel dele(a): ${lvl}, \n atualmente com ${xp} de xp, \nfaltão ${Math.abs(xp - (lvl * 100))} de xp para evoluir do lvl ${lvl} para o lvl ${lvl + 1}`).setColor("00ff00")
)
    
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra O Perfil De Alguem",
  usage: "perfil || !perfil @nome_pessoa"
}