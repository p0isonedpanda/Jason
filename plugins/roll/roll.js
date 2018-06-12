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

        // The format for a dice roll argument should be [num of dice]d[num of faces]
        // There is also an optional modifier we can place at the end to add or subtract from the rolled value
        numberRolled = parseInt(suffix.split("d")[0]);
        // Check if there is a modifier for this roll
        if (suffix.split("d")[1].split("+").length == 2) {
            faceCount = parseInt(suffix.split("d")[1].split("+")[0]);
            modifier = parseInt(suffix.split("d")[1].split("+")[1]);
        } else if (suffix.split("d")[1].split("-").length == 2) {
            faceCount = parseInt(suffix.split("d")[1].split("-")[0]);
            modifier = parseInt(suffix.split("d")[1].split("-")[1]) * -1;
        } else { // If there is no modifier present
            faceCount = parseInt(suffix.split("d")[1]);
            modifier = 0;
        }
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
                (1 + Math.floor(Math.random() * Math.floor(faceCount)) + modifier) + " (mod: " + modifier + ")" + "\n";
        }
        if (result == "") result = "Sorry, looks like you're trying to make me roll something I can't";
        message.channel.send(result);
    }
}