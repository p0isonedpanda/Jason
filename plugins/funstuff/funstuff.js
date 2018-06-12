const cowsay = require("cowsay"),
      figlet = require("figlet");

var self = this;

exports.commands = ["cowsay", "figlet"];

exports.init = function(client, config, _) {}
exports["cowsay"] = {
    process: function(bot, message, suffix) {
        if (suffix.length > 30) {
            message.channel.send("Please send a message that is 30 characters or less");
        } else {
            message.channel.send("```" + cowsay.say({text: suffix}) + "```");
        }
    }
}

exports["figlet"] = {
    process: function(bot, message, suffix) {
        if (suffix.length > 10) {
            message.channel.send("Please send a message that is 10 characters or less");
        } else {
            figlet(suffix, function(err, data) {
                if (err) {
                    message.channel.send("Something fucked up :(");
                } else {
                    message.channel.send("```" + data + "```");
                }
            });
        }
    }
}