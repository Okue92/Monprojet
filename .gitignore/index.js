const Discord = require('discord.js');
const client = new Discord.Client();

// token a chercher dans bot and BUILD-A-BOT
client.login (process.env.TOKEN);

client.on('ready', function() {
    client.user.setGame("dm");
    console.log("Connectedç");
});

client.on('message', message => {
    if(message.content.startsWith('alldm')){
        let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        message.guild.members.forEach((player) => {
             message.guild.member(player).send(`Un nouveau serveur ouvre, https://discord.gg/uY63Q3C
        });
    }
})
