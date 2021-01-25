const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "/"   // Prefix هنا تحط 

client.login('ODAzMTg2NDsFwmjd9dcdDAvETSB4H6Wn8IQ');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


client.on('message', msg => {

    let say= prefix + "say";
  if (msg.content.startsWith(say)) {
      if(msg.author.bot) return;

    let sa =msg.content.slice(say.length+1);
    if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
    msg.channel.send(sa);
  }
});