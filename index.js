const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log(`Client is logged in as ${client.user.tag} and ready!`);
});

client.login('process.env.TOKEN');