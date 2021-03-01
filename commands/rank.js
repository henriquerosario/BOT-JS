const discord = require('discord.js');
const config = require("../config.json")
const canvacord = require("canvacord");
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path")
let uu = 0

exports.run = async (client, message, args, database, con, cooldowns, ms) => {
  var msg_prossecando = await message.channel.send("⚙")
  let tops = []
  let talvez = []
  let des = ``
  let vc = ``
  database.ref(`Servidores/Level/`).once("value").then(async function(db) {
          Object.keys(db.val()).forEach((id, index, array) => {
            database.ref(`Servidores/Level/${id}`).once("value").then(async function(db) {
              tops.push(db.val().level+"_"+id)
              if (index + 1 == array.length) {
                function ordenaNum (a, b) {
                  a = a.split("_")
                  b = b.split("_")
                  return b[0] - a[0];
                }
                tops.sort(ordenaNum)
                for (i=0; i<tops.length; i++) {
                  talvez.push(tops[i] + "-" + (i + 1))
                }
                talvez.forEach((valor, index) => {
                  if (message.author.id == valor.split("-")[0].split("_")[1]) {
                    vc += `Você é o ${valor.split("-")[1]}° Colocado(a) com ${valor.split("_")[0]} Levels!`
                  }
                  if (valor.split("-")[1] == 1) {
                      des += `🥇 1° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 🥇\n\n`
                    } else if (valor.split("-")[1] == 2) {
                      des += `🥈 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 🥈\n\n`
                    } else if (valor.split("-")[1] == 3) {
                      des += `🥉 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 🥉\n\n`
                    } else if (valor.split("-")[1] == 4) {
                      des += `🏅 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 🏅\n\n`
                    } else if (valor.split("-")[1] == 5) {
                      des += `🎖️ 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 🎖️\n\n`
                    } else if (valor.split("-")[1] == 6 || valor.split("-")[1] == 7) {
                      des += `😀 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 😀\n\n`
                    } else if (valor.split("-")[1] == 8 || valor.split("-")[1] == 9) {
                      des += `😐 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 😐\n\n`
                    } else if (valor.split("-")[1] == 10) {
                      des += `😩 2° Colocado(a): <@!${valor.split("-")[0].split("_")[1]}> Com ${valor.split("_")[0]} Levels 😩\n\n`
                    }
                })
               const comEmbed = new discord.MessageEmbed()
                .setColor('#9400D3')
                .setTitle('OS TOP 10:')
                .setDescription(des)
                .setFooter(vc)
                
                msg_prossecando.delete()
                message.reply(comEmbed)
            }
          })
          })
  })
}       
exports.help = {
  permisoes: "Nenhuma",
  description: "Mostra O Perfil De Alguem",
  usage: "rank | | meui6/rank @nome_pessoa"
}