const discord = require('discord.js')
const config = require("../config.json"),
prefix = config.prefix


exports.run = (bot, message, commands) => {
  const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
  const command = args.shift().toLowerCase();
  var des = ""
  var des2 = ""
  var desn = 0
  var des3 = ""
  var des4 = ""
  var des5 = ""
    commands.forEach(script=>{
      if (args[0]) {
        if (script != args[0]) return
      }
      props = require(`./${script}`)
      des += `\n **${prefix}${script}**: \n**Descriçao:** ${props.help.description ? props.help.description : 'Não tem descrição'}, \n**usagem:** !${props.help.usage ? props.help.usage : "Não especificado"}, \n**Permissoes necesarias:** ${props.help.permisoes ? props.help.permisoes : "Não especificado"}.\n\n`
      desn++
      if (desn >= 10) {
        des5 = des4
        des4 = des3
        des3 = des2
        des2 = des
        des = ""
        desn = 0
      }
    }); 

    if (args[0]) {
      if (des == "") {des = `o comando ${args[0]} não existe digite !help para ver os existentes`}
      const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle(`O COMANDO ${args[0]}:`)
      .setDescription(des)

      message.reply(comEmbed)
      return
    }

    const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('OS COMANDOS DO BOT:')
      .setDescription(des5)

      message.reply(comEmbed)
    if (des4 != '') {
      const comEmbed4 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des4)

      message.reply(comEmbed4)
    }
    if (des3 != '') {
      const comEmbed3 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des3)

      message.reply(comEmbed3)
    }
    if (des2 != '') {
      const comEmbed2 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des2)

      message.reply(comEmbed2)
    }
    if (des != '') {
      const comEmbed1 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des)

      message.reply(comEmbed1)
    }
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra **TODOS** os comandos",
  usage: "help || !help comando"
}