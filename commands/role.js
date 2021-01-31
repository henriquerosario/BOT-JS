const discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.channel.id != "804525195876237363") {
  message.reply("a bobinho use a area do cargo para adiquirir cargos!")
  return;
} 
if (!args[0]) {
  message.reply("use !role <iddocargo> temos o cargo temos: \nvermelho: 804519118026833942 azul: 804519229515628545\nroxo: 804519327549620244 verde: 804519472706093116"); return
}
if ((args[0] == "804519118026833942") || (args[0] == "804519229515628545")) {
message.member.roles.add(args[0])
}else if ((args[0] == "804519327549620244") || (args[0] == "804519472706093116")) {
  message.member.roles.add(args[0])
} else if ((args[0] == "804703558061522985")) {
  message.member.roles.add(args[0])
} else {
message.reply("este cargo NÃO esiste!")
}
}