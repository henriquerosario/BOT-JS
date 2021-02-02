const discord = require('discord.js');
const config = require("../config.json")

exports.run = (client, message, args) => {

let user;
if (message.mentions.users.first() || client.users.cache.get(args[1])) {
  user = message.mentions.users.first() || client.users.cache.get(args[1]);
} else {
    user = message.author;
}
let  i = 0
let des = ""
while(i <= 10) {
  des += `vai ${user} eee `;
  i++
}
const comEmbed = new discord.MessageEmbed()
    .setColor('#9400D3')
    .setTitle('PIRLL:')
    .setDescription(`${des} voce consegue`)

  message.reply(comEmbed)

}
exports.help = {
  permisoes: "Nenhuma",
  description: "diz para a pessoa q ela consegue",
  usage: "vc_consegue @nomepessoa"
}