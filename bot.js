const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607105200267722752")
setInterval(function() {
channel.send(`ياسين is here`);
}, 30)
})

client.login(process.env.BOT_TOKEN);