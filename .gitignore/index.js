const Discord = require('discord.js');
const bot = new Discord.Client();
//const low = require('lowdb');
//const FileSync = require ('lowdb/adapters/fileSync')
const client = new Discord.Client();

//const adapter = new FileSync('database.json');
//const db = low(adapter);

//db.defaults({histoires: [], xp: []}).write() 
var prefix = ("s!")

bot.on('ready', function() {
    bot.user.setGame("vec FoliiiFolki");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === prefix + "solus"){
        message.reply("Solus est un MMO FPS français en dévelopemet");
    }
   
    if (message.content === "meurt"){
        message.reply("**s'allonge sur lui tristement**");
    }
    if (message.content === "miaou"){
        message.reply("miaou");
    }
    
    if (message.content === "jiji"){
        message.reply("Nique ta mere");
    }
    
    if (message.content === "folki viens ici"){
        message.reply("**arrive joyeusement**");
        console.log("commande Salut effectué");
    }
    
    if (message.content === "s!assit"){
        message.reply("**s'assoit**");
    }
    
    if (message.content === ""){
        message.reply("miaou miaou **arrive**");
    }
    
    if (message.content === "croquette"){
        message.reply("nani ?");
    }
    
    if (message.content === "FOLKI"){
        message.reply("miaou miaou **arrive**");
    }
    
    if (message.content === "pere noel"){
        message.reply("http://www.icone-gif.com/gif/humour/pipi-caca/pipi_caca012.gif");
    }
    
    if (message.content === "caca"){
        message.reply("http://www.icone-gif.com/gif/humour/pipi-caca/pipi_caca005.gif");
    }
    
    if (message.content === "s!bien"){
        message.reply("ok et tu m'aime ?");
    }
    
    if (message.content === "s!mal"){
        message.reply("oh désolé");
    }
    
    if (message.content === "s!oui"){
        message.reply("tu est gentil et tu est quoi comme race ?");
    }
    
    if (message.content === "s!non"){
        message.reply("t méchant **boude**");
    }
    
    if (message.content === "démon"){
        message.reply("ahhh **part**");
    }
    
    if (message.content === "ange"){
        message.reply("moi aussi sauf que je suis Dieu");
    }
    if (message.content === "humain"){
        message.reply("normal quoi");
    }
    
    if (message.content === "neko"){
        message.reply("trop kawaii");
    }
    
    if (message.content === "homme bête"){
        message.reply("ouhhh tu fait peur");
    }
    
    if (message.content === "s!merci"){
        message.reply("de rien");
    }
    
    if (message.content === "folki"){
        message.reply("**s'en bas les couilles**");
    }
    
    if (message.content === "bonjour folki"){
        message.reply("bonjour");
    }
    
    if (message.content === "s!ça va"){
        message.reply("oui et toi ?");
    }
    
    if (message.content === "caresse folki"){
        message.reply("**ronronne**");
    }

    if (message.content === prefix + "s!beta"){
        message.reply("http://www.solus-enterprise.co.nf/");
        console.log("commande Salut effectué");
    }

    if (message.content === prefix + "s!paidks"){
        message.reply("It's my dady");
    }
    
    if (message.content === prefix + "help"){ 
        var embed = new Discord.RichEmbed() 
            .setTitle("Help") 
            .setDescription("Les commandes du bot son") 
            .addField("s!help","Page d'aide", true) 
            .addField("s!solus","Informations sur le jeux", true)
            .addField("s!beta","Informations sur la bêta", true)
            .addField("s!level","Ton level", true)
            .addField("s!meme","Un meme aléatoire", true)
            .addField("s!paidks","Moi =)", true)
            .setColor("0xFF0000") 
            .setFooter("Enjoy") 
        message.channel.sendEmbed(embed);
    }
    
}); 
           
