const Discord = require("discord.js");
const bot = new Discord.Client();

const firebase = require("firebase/app");
require("firebase/database");

const info = require("./commands/info");
const firebaseInit = require("./commands/firebaseInit");
const demoRegistration = require("./commands/demoRegistration");

bot.on("ready", () => {
  console.log("I'm Ready, Boss!!! Let's Have Some Purr-ty!! :tada:");

  firebaseInit(firebase);
});

bot.on("message", (message) => {
  let args = message.content.slice(prefix.length).split(" ");

  switch (args[0]) {
    case "info":
      info(message);
      break;

    case "register":
      demoRegistration(firebase, args[1], args[2], args[3])
      break;
  }
});

bot.login(process.env.TOKEN);
