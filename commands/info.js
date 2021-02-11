const botInfo =
  "**Name:** Demo Bot\n" +
  "**Version:** 1.0.0\n" +
  "**Mood:** Always Happy! :relaxed:";

module.exports = (message) => {
  message.channel.send(botInfo);
};
