const Discord = require('discord.js');

exports.run = async (client, message, args) => {


const msgcu = await message.reply(
    new Discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('**LISTA DE GIRIAS**')
      .setDescription("bunitim = bonito,\ndnv = denovo,\ndps = depois,\nmds = meu deus,\nnss = nossa,\npqp = por que pai,\nn = não,\nq = que,\ntmj = tamo jundo,\nstalkear = persegir,\nTop = legal,\nvc = você,\npq = porque,\npv = porfavor\n...")
  )


  let emojis = ["👌", "🆒", "👍"];

  for (const i in emojis) {
    await msgcu.react(emojis[i])
  }


}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra varias girias",
  usage: "ldg"
}