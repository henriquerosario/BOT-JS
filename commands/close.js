module.exports.run = async (client, message, args) => {
  if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
  message.channel.delete();
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Fecha o ticket",
  usage: "close"
}