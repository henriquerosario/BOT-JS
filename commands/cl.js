const discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')){
        message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
        return};
    if (!args[0]) {
        message.reply("informe a quantidade!")
        return;
    }
    if (isNaN[args] && args[0] <= 0) {
        message.reply("eu quero CORRETAMENTE um **NÚMERO!!!**")
        return;
    }
    if(args[0] >= 100) {
        message.delete()
        message.channel.bulkDelete(99, true);
    } else {
        message.delete()
        message.channel.bulkDelete(args[0], true)
    }
}
exports.help = {
  permisoes: "Manejar Mensagens",
  description: "limpa mensagens",
  usage: "cl numero_de_mensagens",
  category: "mod"
}