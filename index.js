const fs = require("fs");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { prefix, token } = require("./config.json");

const client = new Client();

client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);
