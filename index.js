const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!!";

bot.on('ready', () => {
    bot.user.setStatus('available')
    console.log("Le bot est bien lancer !") //S'affichera dans la console pour vous montrez qu'il ets bien en ligne !
    bot.user.setPresence({
        game: {
            name: 'Fait un tuto ( !! )', //Le nom qui s'affichera en status
            type: "STREAMING", //PLAYING , LISTENING , STREAMING , WATCHING
            url: "https://www.twitch.tv/bot/" // Vous pouvew mettre n'importe quoi ou une vrai chaine twitch
        }
    })
})

//Je vous conseil de faire ceci , c'est pour voir qui envoie des messages en privee au bot 

bot.on("message", message => {
    if(message.channel.type === "dm") {
        console.log(`${message.author.tag} a envoyer un message au bot , voici le message : ( ${message.content} ).`)
    }
});

//Maintenant voici la commande ping , donc le bot vous repondre le nombre de ms qu'il a

bot.on('message', message => {
    if(message.content === PREFIX + "ping") { // PREFIX = se que vous avez mit ligne 4 et se qui se mettra devant le ping. Exemple: !!ping
        message.delete() // Quand vous avez mit la commande dans le tchat sa se supprimera
        message.channel.send(`Pong 🏓: ${Math.round(bot.ping)} ms !`)
        console.log("La commande ping a etait effectuer")
    }
});

//Voici un Embed | Il y en a encore plein c'est pour ca que je vais vous mettre la doc Discord.js dans la description https://discord.js.org/#/docs/main/stable/class/MessageEmbed

/*bot.on('message', message => {
    if(message.content === PREFIX + "embed") {
        message.delete()
        var embed = new Discord.RichEmbed() // Si vous voulez commencez un embed toujours mettre ca
        .setAuthor() // Mettre un author
        .setTitle() // Mettre un Titre
        .setColor() //Permet de mettre une couleur sur le coter | Si vous voulez mettre une couleur rapidement vous pouvez l'ecrire en lettre (exemple: RED , BLUE , CYAN ect... ou mettre en code couleur 0014ff ect... ou encore plus simple RANDOM sa mettra des couleur au pif)
        .setThumbnail() // Permet de mettre un logo en haut a droite
        .setDescription() // mettre une description sur le dessus
        .addField() // Mettre une ligne
        .setImage() // Permet de mettre une image en grand
        .setTimestamp() // Permet de mettre la date en plus de la ligne du bas
        .setFooter() // Mettre une ligne sur le bas
        message.channel.send(embed) //toujours mettre le nom que vous avez mit ligne 41 donc embed
    }
});*/

// Nous allons maintenant reprendre des partie de l'embed pour faire une commande avatar

bot.on('message', message => {
    if(message.content.startsWith(PREFIX + "avatar")) {
        message.delete()
        let member = message.mentions.members.first() || message.member;
        var avatar_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL) // message.author.tag = le nom de l'utilisateur et message.author.displayAvatarURL = l'avatar du l'user
        .setTitle(`Voici l'avatar de ${member.user.username}`)
        .setImage(member.user.avatarURL) // member.user.avatarURL = L'avatar de l'user
        .setTimestamp()
        .setFooter("Bot pour les Tuto de Tks :)")
        message.channel.send(avatar_embed) // Toujours mettre cette ligne sinon l'embed creer ne s'affichera pas dans le tchat
    }
})

bot.login('NjY1NTQ4OTQwNzUzNjMzMjkx.XhrQ_w.gHCtECuJvFb88OrPVEkXWZvlexs');
