const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "embed",
    aliases: ["msg"],
    category: "UTILITY COMMANDS",
    description: "Send preloaded embeds",
    useage: "MSG",
    run: async (client, message, args) => {
        let embedembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("KURUVI CMD UPDATE")
            .setDescription("NEW CMDS 1.BANS 2.AVATAR")
            .setFooter("KURUVI | BY AVI", client.user.displayAvatarURL())

        message.reply(embedembed);
    }
}