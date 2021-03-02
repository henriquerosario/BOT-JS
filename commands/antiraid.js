const config = require("../config.json")

exports.run = async (client, message, args, eco) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === eco.get(`${message.guild.id}-role-permissao`)); 

  if (
    !message.member.roles.cache.some(r =>
      [
        config.cargolider,
        config.cargoadm
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito.`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(66624).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(70585921).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
  }
};
exports.help = {
  permisoes: "ADM",
  description: "Ativa o antiraid",
  usage: "antiraid on||off",
  category: "mod"
}