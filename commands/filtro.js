const config = require("../config.json")

exports.run = async (client, message, args, eco) => {

  if (message.author.id != "686010259860750456") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')){
      message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
      return
    };
  }
  
  if (message.content.includes("on")) {
    con.set(`${message.guild.id}-inclue-filtro`, true);
    message.channel.send("Filtro Ativado!")
  } else if (message.content.includes("off")) {
    con.set(`${message.guild.id}-inclue-filtro`, false);
    message.channel.send("Filtro Desativado!")
  } else {
    message.channel.send("use on ou off")
  }
}
exports.help = {
  permisoes: "MANAGE_MESSAGES",
  description: "Ativa ou Desativo o Filtro",
  usage: "filtro on| |off"
}