const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("-");



bot.on('ready' , () => {
    console.log("Bot ready !");
});

bot.login('NTY3NzI2MDE0MzQ4Nzg3NzI5.XLXumw.6FI14NoNho6VrBQiW9AmOqolIrY');

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'mp')) {
    msg.guild.members.forEach(member => {
    member.send("**10 nitros = nitro** https://discord.gg/TDCjc5E")
    }) 
    }

});
