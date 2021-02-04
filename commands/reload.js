const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, eco, cooldowns, ms, fiztd) => {
if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.channel.send(`ei ${message.author} você não tem permissão para fazer isso peça para algem q tem! >:(`) 
    return
};

eco.set(`${message.guild.id}-reload`, 0)

const mgs = await message.reply("reloding...")

mgs.delete()
message.delete()

message.reply("reloded ✅")

}
exports.help = {
  permisoes: "Manejar msgs",
  description: "Dá Reload",
  usage: "!reload"
}