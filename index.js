const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.reply('@everyone pong');
    }

});



bot.login(process.env.BOT_TOKEN);
