const discord = require('discord.js');

exports.run = (bot, message, args) => {
    console.log(`o ${message.author} enviou ${message} com ${args[0]} argumentos`)
    //message.reply("Ainda Não Disponivel! Tente Usar o !help")
    message.reply(`comandos: \n !comhelp \n !help \n !cl <numero> ou !clear <numero> \n !feliz \n !triste \n !ping \n !kiss @nome_pessoa`)
}