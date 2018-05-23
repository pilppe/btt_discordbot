const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
  client.user.setGame("Scania");
  console.log("I'm ready to start trucking!");
});

client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
  }
});

client.login(config.token);
