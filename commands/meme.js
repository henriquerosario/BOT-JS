const Discord = require("discord.js")

exports.run = async (client, message, args) => {
var list = [
  'https://im7.ezgif.com/tmp/ezgif-7-1b3d62fa3714.gif',
  'https://im7.ezgif.com/tmp/ezgif-7-70733f4e581f.gif',
  'https://im7.ezgif.com/tmp/ezgif-7-6e06bb500970.gif'
];
var rand = list[Math.floor(Math.random() * list.length)];

message.channel.send({
  content: "",
  embed: {
    title: "sera que o Knuckles aprovou seu meme?",
    color: 1639005,
    image: {
      url: `` + (rand) + ``
    }
  }
})


}
exports.help = {
  permisoes: "Nenhuma",
  description: `Diz oq o Knuckles achou de seu meme`,
  usage: "meme"
}