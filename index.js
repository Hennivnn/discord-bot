const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//say.js
const prefix = "/"   // Prefix هنا تحط 

client.on('message', msg => {

    let say= prefix + "say";
  if (msg.content.startsWith(say)) {
      if(msg.author.bot) return;

    let sa =msg.content.slice(say.length+1);
    if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
    msg.channel.send(sa);
  }
});
//end.say.js.js

//ping.js
client.on('message', message => {
    if (message.content === '/ping') {
      message.channel.send('pong');
    }
  });
//end.ping.js

//moderation.js
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('/kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

//end.moderation.js

//VoiceConnection.js
client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
    
  });  
//end.VoiceConnection.js

//avatar
// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '/avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
//end.avatar

//
client.on('message', message => {
  // If the message is '!rip'
  if (message.content === '/rip') {
    // Create the attachment using MessageAttachment
    const attachment = newMessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});
//end

client.login('s');