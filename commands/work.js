const discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args, database, con, cooldowns, ms) => {
if (message.channel.id != con.get(`${message.guild.id}-banco`)) {
  message.delete()
  message.reply("a bobinho use o banco para consegir dinheiro!")
  return
}
const cooldowndata = cooldowns.get(`${message.author.id}-${message.guild.id}-work`);
if(parseInt(cooldowndata) > Date.now()) return message.reply(`Porfavor espere ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)

  let random = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let work  = ["Gari", "gacha-tuber", "Traficante", "Secretário", "Caçador", "Entregador", "Garçom", "Pedreiro", "Illuminati","adm do discord", "desenhista", "DJ", "progamador", "trava zap", "progamador da loritta", "progamador de bots e de apps"];
  
  let workresult  = Math.floor(Math.random() * work .length);
  let randomresult = Math.floor(Math.random() * random.length);

  let trab = work[workresult];
  
  let answer;
  try {
    answer = random[randomresult] * (workresult + 5);
  } catch (err) {
    return message.reply(`**Quantia inválida** ${err}`);
  }


  let vip = "Não Vip"
  let tempo = "5M"
  const cooldownvip = cooldowns.get(`${message.author.id}-${message.guild.id}-vip`);
  if(parseInt(cooldownvip) > Date.now()) {
    answer = answer * 2; 
    vip = "VIP"; 
    tempo = "3M"
    }
  cooldowns.set(`${message.author.id}-${message.guild.id}-work`, Date.now() + ms(tempo))
  

  

database.ref(`Servidores/Money/${message.author.id}`).once("value").then(async function(db) {
  database.ref(`Servidores/Money/${message.author.id}`).update({
    money: db.val().money + answer
  })
  const comEmbed = new discord.MessageEmbed()
      .setColor('#9400D3')
      .setTitle('TRABALHOU:')
      .setDescription(`Você Trabalhou ${random[randomresult]} dias de ${trab} e ganhou ${answer} moedas\npara trabalhar novamente espere ${tempo} agora, Você tem ${db.val().money + answer} moedas na sua conta seu estado: ${vip}`)
  message.reply(comEmbed)
})
}

exports.help = {
   permisoes: "Nenhuma",
  description: "Faz q Ganhe dinheiro acada 5 minutos",
  usage: "work"
}