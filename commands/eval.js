const discord = require("discord.js");
const canvacord = require("canvacord");
const config = require("../config.json");


exports.run = async (client, message, args) => {
  let comando = message.content.replace(`${config.prefix}eval `, "")
  message.channel.send(eval(comando))
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Faz Tudo Como Se Fosse O Console do Node",
  usage: "eval <operação>"
}
