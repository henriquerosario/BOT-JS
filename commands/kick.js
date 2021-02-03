const Discord = require('discord.js'); 
const config = require("../config.json")

exports.run = async(bot, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        if (!member) return message.reply('mencione um membro por favor!');
        if (member === message.member) return message.reply('você não pode se expulsar!');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa botar um motivo!');

        let canal = message.guild.channels.cache.get(config.canalban);

        canal.send(`Membro Expulso: ${member}\nStaff: ${message.author}\nMotivo: ${motivo}`)
        member.kick()
    
}
exports.help = {
  permisoes: "espulsar membros",
  description: "bane a pessoa de seu server",
  usage: "kick @nome_pessoa motivo"
}