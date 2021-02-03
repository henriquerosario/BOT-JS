const Discord = require("discord.js")
const config = require("../config.json")

module.exports.run = async(client,message,args)=> {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;


    let msg = await message.channel.send("Loading...")

    try {

        message.channel.updateOverwrite(config.cargopermissao,{
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
        })
        msg.edit("✅")

    }catch(e){
        message.channel.send(e)
    }
}

exports.help = {
  permisoes: "Manejar canais",
  description: `Destranca o canal`,
  usage: "unlock"
}