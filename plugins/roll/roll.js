var self = this;

exports.commands = ["roll"];

exports.init = function(client, config, _) {}
exports["roll"] = {
    process: function(bot, message, suffix) {
        message.channel.send("Bear with me for a moment...");

        // Input validation
        var input = suffix.split("d");
        if (input.length != 2)
            return message.channel.send("Invalid format! Make sure you use it like `" + config.prefix + "roll [#/dice]d[#/faces]`");

        numberRolled = parseInt(suffix.split("d")[0]);
        faceCount = parseInt(suffix.split("d")[1]);
        errMsg = "";

        if (numberRolled > 10 || numberRolled < 1) {
            errMsg += "Please only roll between 1 and 10 dice";
        }

        if (faceCount > 120 || faceCount < 2) {
            if (errMsg != "") {
                errMsg += " and make sure the dice only has 2-120 faces";
            } else {
                errMsg += "Please make sure your dice only has 2-120 faces";
            }
        }

        if (errMsg != "") {
            message.channel.send(errMsg);
            return;
        }

        var result = "";

        for (i = 0; i < numberRolled; i++) {
            result += "Roll " + (i + 1) + ": " +
                ( 1 + Math.floor(Math.random() * Math.floor(faceCount))) + "\n";
        }
        if (result == "") result = "Sorry, looks like you're trying to make me roll something I can't";
        message.channel.send(result);
    }
}