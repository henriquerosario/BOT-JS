const discord = require('discord.js')
const db = require("megadb")

exports.run = async (bot, message, commands) => {
  const PrefixDB = new db.crearDB("Prefix");
  let prefix = await PrefixDB.obtener(`${message.guild.id}.prefix`);
  const args = message.content
        .trim().slice(prefix.length)
        .split(/ +/g);
  const command = args.shift().toLowerCase();
  var des = ""
  var deis = "`Categorias: `"
  var des2 = ""
  var desn = 0
  var comandos_numero = 0
  var kategorias = []
  var des3 = ""
  var des4 = ""
  var des5 = ""

    commands.forEach((script, index) => {
      props = require(`./${script}`)

      if (kategorias.indexOf(props.help.category?props.help.category:"uncategoryzed") == -1) {
        kategorias.push(props.help.category?props.help.category:"uncategoryzed")
        deis += `\n${props.help.category} `
      }
      if (kategorias.indexOf(args[0]) == -1) {
        if (script == args[0]) {
          des = `**comando ${prefix}${script}:**\n**Descriçao:** ${props.help.description ? props.help.description : 'Não tem descrição'}, \n**usagem:**  ${prefix}${props.help.usage ? props.help.usage : "Não especificado"}, \n**Permissoes necesarias:** ${props.help.permisoes ? props.help.permisoes : "Não especificado"}.`
        }
      } else if (kategorias.indexOf(args[0]) != -1) {
        if (require(`./${script}.js`).help.category == args[0]) {
          if (des.split("")[0] != "*") {
            des = ``
          }
          des += `**comando ${comandos_numero} ${prefix}${script}:**\n**Descriçao:** ${props.help.description ? props.help.description : 'Não tem descrição'}, \n**usagem:**  ${prefix}${props.help.usage ? props.help.usage : "Não especificado"}, \n**Permissoes necesarias:** ${props.help.permisoes ? props.help.permisoes : "Não especificado"}.\n\n`
          console.log(des)
          comandos_numero++
          desn++
        }
      }
        /*props = require(`./${script}`)
        des += `\n **comando ${comandos_numero} ${prefix}${script}**: \n**Descriçao:** ${props.help.description ? props.help.description : 'Não tem descrição'}, \n**usagem:**  ${prefix}${props.help.usage ? props.help.usage : "Não especificado"}, \n**Permissoes necesarias:** ${props.help.permisoes ? props.help.permisoes : "Não especificado"}.\n\n`
        comandos_numero++
        desn++*/
      
      if (desn >= 10) {
        des5 = des4
        des4 = des3
        des3 = des2
        des2 = des
        des = ""
        desn = 0
      }
    }); 
    if (!args[0]) {
      const comEmbed = new discord.MessageEmbed()
        .setColor('#9400D3')
        .setTitle(`As Categosrias Do Bot`)
        .setDescription(deis + `\n\n\n\nPara ver Uma Categoria: \`${prefix}help categoria\``)

      
      message.reply(comEmbed)
      return;
    }
    if (kategorias.indexOf(args[0]) == -1) {
      if (des == "") {des = `não existe digite !help para ver os existentes`}
      const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle(`O COMANDO ${args[0]}:`)
      .setDescription(des)

      
      message.reply(comEmbed)
      return
    }

    const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle(`OS COMANDOS DO BOT (Da Categaria ${args[0]} digite \`${prefix}help comando\` para ver um comando):`)
      .setDescription(des5.replace(undefined, "").replace("undefined", ""))

      message.reply(comEmbed)
    if (des4 != '') {
      const comEmbed4 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des4.replace(undefined, "").replace("undefined", ""))

      message.reply(comEmbed4)
    }
    if (des3 != '') {
      const comEmbed3 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des3.replace(undefined, "").replace("undefined", ""))

      message.reply(comEmbed3)
    }
    if (des2 != '') {
      const comEmbed2 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des2.replace(undefined, "").replace("undefined", ""))

      message.reply(comEmbed2)
    }
    if (des != '') {
      const comEmbed1 = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setDescription(des.replace(undefined, "").replace("undefined", ""))

      message.reply(comEmbed1)
    }
}
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra **TODOS** os comandos ou o comando desejado",
  usage: `help | | (prefixo)help comando | | (prefixo)help categoria`,
  category: "help-me"
}