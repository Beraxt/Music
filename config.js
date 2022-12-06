module.exports = {
TOKEN: "",
ownerID: "321980072305098754", //write your discord user id.
botInvite: "https://discord.com/oauth2/authorize?client_id=383245877642395659&scope=bot&permissions=277028608000", //write your discord bot invite.
supportServer: "", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://Berat:x7x6x5x4@cluster0.wkxi1gi.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
status: '🎶 Musics',
commandsDir: './commands', //Please don't touch
language: "tr", //en, tr, nl, pt, fr, ar, zh_TW
embedColor: "ffa954", //hex color code
errorLog: "1048413808835706942", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },
  
   shardManager:{
     shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
   },

    playlistSettings:{
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
