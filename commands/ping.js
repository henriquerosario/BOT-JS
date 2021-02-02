module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping');

  m.edit(`🏓 **Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência do Bot: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra a Latencia Do server e do Bot",
  usage: "ping"
}