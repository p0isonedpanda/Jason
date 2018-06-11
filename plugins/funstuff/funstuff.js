const cowsay = require("cowsay"),
      figlet = require("figlet");

var self = this;

exports.commands = ["cowsay", "figlet"];

exports.init = function(client, config, _) {}
exports["cowsay"] = {
    process: function(bot, message, suffix) {
        message.channel.send("```" + cowsay.say({text: suffix}) + "```");
    }
}

exports["figlet"] = {
    process: function(bot, message, suffix) {
        figlet(suffix, function(err, data) {
            if (err) {
                message.channel.send("Something fucked up :(");
            } else {
                message.channel.send("```" + data + "```");
            }
        })
    }
}