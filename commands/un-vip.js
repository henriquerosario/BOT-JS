const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, database, con, cooldowns, ms) => {
const cooldowndataVip = cooldowns.get(`${message.author.id}-vip`);
if(parseInt(cooldowndataVip) > Date.now()) {
  var horas_usadas = (parseInt(cooldowndataVip) - Date.now()) / 1000 / 60 / 60
  var valor_da_hora = 500 / 24
  var valor_total = horas_usadas * valor_da_hora
  let msg = await message.channel.send(`Tem Certeza Que Deseja Continuar?\nVocê Receberá ${valor_total.toFixed(2)} Devolta!!\n💵 = Mostrar Valor Total\n✅ = Prosseguir\n❎ = Cancelar\n\n\n ||${message.author}||`)

  emojis = ["💵","✅","❎"];
  for (const i in emojis) {
    await msg.react(emojis[i])
  }

  client.on('messageReactionAdd', async (reaction, user) => {
    if (user.id == message.author.id) {
      if (reaction.message.id == msg.id){
        if (!user.bot) {
          if (reaction.emoji.name == "💵") {
            msg.edit(`Tem Certeza Que Deseja Continuar?\nVocê Receberá ${valor_total} Devolta!!\n💵 = Mostrar Valor Total\n✅ = Prosseguir\n❎ = Cancelar\n\n\n ||${message.author}||`);
          }
          if (reaction.emoji.name == "✅") {
            cooldowns.set(`${message.author.id}-vip`, 0)
            database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
              database.ref(`Servidores/Money/${message.author.id}`).update({
                money: db.val().money + valor_total
              })
            }); 
            msg.delete()
            message.delete()
            const Enbed = new discord.MessageEmbed()
            .setColor('#9400D3')
            .setTitle("Dinheiro Devolvido :)")
            .setDescription(`o ${message.author} recebeu ${valor_total} Devolta :)`)

            message.channel.send(Enbed)
          }
          if (reaction.emoji.name == "❎") {
            msg.delete()
            message.delete()
          }
        }
      }
    }
  });
  client.on('messageReactionAdd', async (reaction, user) => {})
} else {
  return message.reply("Você Não É Vip!")
}
}
exports.help = {
  permisoes: "Nenhuma",
  description: `Te Devolve O Valor Do Vip`,
  usage: "un-vip"
}